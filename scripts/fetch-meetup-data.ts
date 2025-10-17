#!/usr/bin/env node --experimental-strip-types

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

// Data source URLs
const MEETUPS_URL = 'https://raw.githubusercontent.com/frontendmu/frontend.mu/refs/heads/main/packages/frontendmu-data/data/meetups-raw.json'
const SPEAKERS_URL = 'https://raw.githubusercontent.com/frontendmu/frontend.mu/refs/heads/main/packages/frontendmu-data/data/speakers-raw.json'
const SPONSORS_URL = 'https://raw.githubusercontent.com/frontendmu/frontend.mu/refs/heads/main/packages/frontendmu-data/data/sponsors-raw.json'

// Types
interface Config {
  meetups?: {
    id: string
  }
}

interface Speaker {
  id: string
  name: string
  github_account?: string
}

interface SessionData {
  title: string
  speakers: Speaker
}

interface Session {
  id: number
  Session_id: SessionData
}

interface SponsorData {
  id: string
  Name: string
  Logo?: {
    filename_disk: string
  }
}

interface Sponsor {
  id: number
  Sponsor_id: SponsorData
}

interface Meetup {
  id: number
  title: string
  Date: string
  Venue: string
  Location: string
  Time: string
  sessions: Session[]
  sponsors: Sponsor[]
}

interface SpeakerOverride {
  name?: string
  talkTitle?: string
  githubUsername?: string
  githubAvatar?: string
  company?: string
  jobTitle?: string
  bio?: string
}

interface MeetupDataOverride {
  meetup?: {
    title?: string
    date?: string
    venue?: string
    location?: string
    time?: string
  }
  speakers?: {
    [key: string]: SpeakerOverride  // Key by speaker name or index
  }
  sponsor?: {
    name?: string
    logo?: string
  }
}

interface MeetupData {
  meetup: {
    id: number
    title: string
    date: string
    venue: string
    location: string
    time: string
  }
  speakers: Array<{
    name: string
    talkTitle: string
    githubUsername: string | null
    githubAvatar: string | null
    company?: string
    jobTitle?: string
    bio?: string
  }>
  sponsor: {
    name: string
    logo: string | null
  } | null
}

interface Config {
  meetupId: string
  speakerExtraFields: string[]
}

/**
 * Read the slides config to get the meetup ID and speaker extra fields
 */
function readConfig(): Config {
  try {
    const configPath = resolve(process.cwd(), 'slides.config.ts')
    const configContent = readFileSync(configPath, 'utf-8')
    
    // Extract the id value
    const idMatch = configContent.match(/id:\s*['"](\d+)['"]/)
    if (!idMatch) {
      throw new Error('Could not find meetup id in slides.config.ts')
    }
    
    // Extract speaker extra fields
    const extraFieldsMatch = configContent.match(/extraFields:\s*\[(.*?)\]/s)
    let speakerExtraFields: string[] = []
    
    if (extraFieldsMatch) {
      // Parse the array content
      const fieldsStr = extraFieldsMatch[1]
      speakerExtraFields = fieldsStr
        .split(',')
        .map(s => s.trim().replace(/['"]/g, ''))
        .filter(s => s.length > 0)
    }
    
    return {
      meetupId: idMatch[1],
      speakerExtraFields
    }
  } catch (error) {
    console.error('Error reading config:', error)
    throw error
  }
}

/**
 * Fetch JSON data from a URL
 */
async function fetchJSON<T>(url: string): Promise<T> {
  console.log(`Fetching: ${url}`)
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  
  return response.json()
}

/**
 * Build GitHub avatar URL from username
 */
function getGithubAvatar(username: string | null): string | null {
  if (!username) return null
  return `https://github.com/${username}.png`
}

/**
 * Create override template file if it doesn't exist
 */
function createOverrideTemplate(speakers: string[], extraFields: string[]): void {
  const overridePath = resolve(process.cwd(), 'meetup-data.override.json')
  
  if (existsSync(overridePath)) {
    console.log('\n📝 Override file already exists, skipping template generation')
    return
  }
  
  // Build speaker override template with dynamic extra fields
  const speakerTemplate: any = {}
  
  // Add extra fields from config as placeholders
  extraFields.forEach(field => {
    speakerTemplate[field] = null
  })
  
  const template: any = {
    meetup: {},
    speakers: speakers.reduce((acc, name) => {
      acc[name] = { ...speakerTemplate }
      return acc
    }, {} as { [key: string]: any }),
    sponsor: {}
  }
  
  writeFileSync(overridePath, JSON.stringify(template, null, 2), 'utf-8')
  console.log('✨ Created meetup-data.override.json template')
  console.log(`   Extra fields from config: ${extraFields.join(', ') || 'none'}`)
  console.log('   Edit speaker fields to add overrides (set to null to keep original values)')
}

/**
 * Read and parse override file if it exists
 */
function readOverrides(): MeetupDataOverride | null {
  const overridePath = resolve(process.cwd(), 'meetup-data.override.json')
  
  if (!existsSync(overridePath)) {
    return null
  }
  
  try {
    const content = readFileSync(overridePath, 'utf-8')
    const overrides = JSON.parse(content)
    console.log('✅ Loaded overrides from meetup-data.override.json')
    return overrides
  } catch (error) {
    console.error('❌ Failed to parse override file:')
    if (error instanceof SyntaxError) {
      console.error(`   JSON syntax error: ${error.message}`)
      console.error('   Please check for trailing commas, missing quotes, or other JSON syntax issues')
    } else {
      console.error(`   ${error}`)
    }
    console.error('   Skipping overrides - fix the file and run again')
    return null
  }
}

/**
 * Apply overrides to meetup data
 * Skips null values to keep original data
 */
function applyOverrides(data: MeetupData, overrides: MeetupDataOverride | null): MeetupData {
  if (!overrides) return data
  
  // Helper to filter out null values
  const removeNulls = (obj: any): any => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== null)
    )
  }
  
  // Helper to normalize field names (jobtitle -> jobTitle)
  const normalizeFieldNames = (obj: any): any => {
    const normalized: any = {}
    for (const [key, value] of Object.entries(obj)) {
      // Convert 'jobtitle' to 'jobTitle' for consistency
      const normalizedKey = key === 'jobtitle' ? 'jobTitle' : key
      normalized[normalizedKey] = value
    }
    return normalized
  }
  
  console.log('\n🔄 Applying overrides...')
  
  // Apply meetup overrides (skip null values)
  if (overrides.meetup) {
    const validOverrides = removeNulls(overrides.meetup)
    if (Object.keys(validOverrides).length > 0) {
      console.log(`   ✓ Meetup overrides: ${Object.keys(validOverrides).join(', ')}`)
      data.meetup = { ...data.meetup, ...validOverrides }
    }
  }
  
  // Apply speaker overrides (skip null values and normalize field names)
  if (overrides.speakers) {
    data.speakers = data.speakers.map(speaker => {
      const override = overrides.speakers![speaker.name]
      if (override) {
        const normalizedOverride = normalizeFieldNames(override)
        const validOverrides = removeNulls(normalizedOverride)
        if (Object.keys(validOverrides).length > 0) {
          console.log(`   ✓ ${speaker.name}: ${Object.keys(validOverrides).join(', ')}`)
          return { ...speaker, ...validOverrides }
        }
      }
      return speaker
    })
  }
  
  // Apply sponsor overrides (skip null values)
  if (overrides.sponsor && data.sponsor) {
    const validOverrides = removeNulls(overrides.sponsor)
    if (Object.keys(validOverrides).length > 0) {
      console.log(`   ✓ Sponsor overrides: ${Object.keys(validOverrides).join(', ')}`)
      data.sponsor = { ...data.sponsor, ...validOverrides }
    }
  }
  
  return data
}

/**
 * Build sponsor logo URL
 */
function getSponsorLogoUrl(filename: string): string {
  return `https://frontend.mu/assets/${filename}`
}

/**
 * Generate markdown slide for a speaker
 */
function generateSpeakerSlide(speaker: {
  name: string
  talkTitle: string
  githubUsername: string | null
  githubAvatar: string | null
  company?: string
  jobTitle?: string
  bio?: string
}, index: number): string {
  // Build frontmatter properties
  const frontmatter: string[] = [
    'layout: speaker-intro',
    speaker.githubAvatar ? `image: ${speaker.githubAvatar}` : '',
    `name: ${speaker.name}`,
    `talkTitle: ${speaker.talkTitle}`,
    speaker.githubUsername ? `github: ${speaker.githubUsername}` : '',
    speaker.company ? `company: ${speaker.company}` : '',
    speaker.jobTitle ? `jobTitle: ${speaker.jobTitle}` : '',
  ].filter(Boolean) // Remove empty strings

  return `---
${frontmatter.join('\n')}
---
`
}

/**
 * Generate all speaker slide files
 */
function generateSpeakerSlides(speakers: Array<{
  name: string
  talkTitle: string
  githubUsername: string | null
  githubAvatar: string | null
  company?: string
  jobTitle?: string
  bio?: string
}>): void {
  // Ensure the directory exists
  const speakersDir = resolve(process.cwd(), 'pages/generated/speakers')
  mkdirSync(speakersDir, { recursive: true })

  console.log(`\n📝 Generating speaker slides...`)
  
  speakers.forEach((speaker, index) => {
    const slideContent = generateSpeakerSlide(speaker, index)
    const filename = `speaker-${index + 1}.md`
    const filepath = resolve(speakersDir, filename)
    
    writeFileSync(filepath, slideContent, 'utf-8')
    console.log(`   ✓ Created ${filename} for ${speaker.name}`)
  })
  
  console.log(`\n✨ Generated ${speakers.length} speaker slide(s)`)
  
  // Generate the slides.md snippet
  const slidesSnippet = speakers.map((_, index) => {
    return `---
src: ./pages/generated/speakers/speaker-${index + 1}.md
hide: false
---`
  }).join('\n\n')
  
  const snippetPath = resolve(process.cwd(), 'pages/generated/speakers-slides.txt')
  writeFileSync(snippetPath, slidesSnippet, 'utf-8')
  console.log(`\n📋 Slide references saved to: pages/generated/speakers-slides.txt`)
  console.log(`   Copy and paste these into your slides.md file!`)
}

/**
 * Main function to fetch and reconstruct meetup data
 */
async function fetchMeetupData() {
  console.log('🚀 Fetching meetup data...\n')
  
  // Read config
  const config = readConfig()
  console.log(`📋 Meetup ID: ${config.meetupId}`)
  console.log(`📝 Speaker extra fields: ${config.speakerExtraFields.join(', ') || 'none'}\n`)
  
  // Fetch all data sources
  const [meetupsData, speakersData, sponsorsData] = await Promise.all([
    fetchJSON<Meetup[]>(MEETUPS_URL),
    fetchJSON<Speaker[]>(SPEAKERS_URL),
    fetchJSON<Sponsor[]>(SPONSORS_URL),
  ])
  
  console.log(`✅ Fetched ${meetupsData.length} meetups`)
  console.log(`✅ Fetched ${speakersData.length} speakers`)
  console.log(`✅ Fetched ${sponsorsData.length} sponsors\n`)
  
  // Find the specific meetup
  const meetup = meetupsData.find(m => m.id === parseInt(config.meetupId))
  
  if (!meetup) {
    throw new Error(`Meetup with id ${config.meetupId} not found`)
  }
  
  console.log(`📅 Found meetup: "${meetup.title}"\n`)
  
  // Extract speakers data
  const speakers = meetup.sessions
    .filter(session => session.Session_id && session.Session_id.speakers)
    .map(session => {
      const sessionData = session.Session_id
      const speaker = sessionData.speakers
      return {
        name: speaker.name,
        talkTitle: sessionData.title,
        githubUsername: speaker.github_account || null,
        githubAvatar: getGithubAvatar(speaker.github_account || null),
      }
    })
  
  console.log(`👥 Found ${speakers.length} speaker(s)`)
  speakers.forEach(s => console.log(`   - ${s.name}: "${s.talkTitle}"`))
  
  // Extract sponsor data (first sponsor if multiple)
  const firstSponsor = meetup.sponsors[0]
  const sponsor = firstSponsor && firstSponsor.Sponsor_id ? {
    name: firstSponsor.Sponsor_id.Name,
    logo: firstSponsor.Sponsor_id.Logo 
      ? getSponsorLogoUrl(firstSponsor.Sponsor_id.Logo.filename_disk)
      : null,
  } : null
  
  if (sponsor) {
    console.log(`\n🏢 Sponsor: ${sponsor.name}`)
  }
  
  // Build the initial data structure
  let meetupData: MeetupData = {
    meetup: {
      id: meetup.id,
      title: meetup.title,
      date: meetup.Date,
      venue: meetup.Venue,
      location: meetup.Location,
      time: meetup.Time,
    },
    speakers,
    sponsor,
  }
  
  // Create override template (only if doesn't exist)
  createOverrideTemplate(speakers.map(s => s.name), config.speakerExtraFields)
  
  // Read and apply overrides
  const overrides = readOverrides()
  meetupData = applyOverrides(meetupData, overrides)
  
  // Save to file
  const outputPath = resolve(process.cwd(), 'meetup-data.json')
  writeFileSync(outputPath, JSON.stringify(meetupData, null, 2), 'utf-8')
  
  console.log(`\n✨ Data saved to: meetup-data.json`)
  
  // Generate speaker slides
  generateSpeakerSlides(meetupData.speakers)
  
  console.log('\n' + '='.repeat(50))
  console.log('Summary:')
  console.log('='.repeat(50))
  console.log(`Meetup: ${meetup.title}`)
  console.log(`Speakers: ${speakers.length}`)
  console.log(`Sponsor: ${sponsor?.name || 'None'}`)
  console.log('='.repeat(50))
}

// Run the script
fetchMeetupData().catch(error => {
  console.error('\n❌ Error:', error.message)
  process.exit(1)
})

