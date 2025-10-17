#!/usr/bin/env node --experimental-strip-types

import { readFileSync, writeFileSync } from 'fs'
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
  }>
  sponsor: {
    name: string
    logo: string | null
  } | null
}

/**
 * Read the slides config to get the meetup ID
 */
function readConfig(): string {
  try {
    const configPath = resolve(process.cwd(), 'slides.config.ts')
    const configContent = readFileSync(configPath, 'utf-8')
    
    // Simple parsing - extract the id value
    const match = configContent.match(/id:\s*['"](\d+)['"]/)
    if (!match) {
      throw new Error('Could not find meetup id in slides.config.ts')
    }
    
    return match[1]
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
 * Build sponsor logo URL
 */
function getSponsorLogoUrl(filename: string): string {
  return `https://frontend.mu/assets/${filename}`
}

/**
 * Main function to fetch and reconstruct meetup data
 */
async function fetchMeetupData() {
  console.log('🚀 Fetching meetup data...\n')
  
  // Read config
  const meetupId = readConfig()
  console.log(`📋 Meetup ID: ${meetupId}\n`)
  
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
  const meetup = meetupsData.find(m => m.id === parseInt(meetupId))
  
  if (!meetup) {
    throw new Error(`Meetup with id ${meetupId} not found`)
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
  
  // Build the final data structure
  const meetupData: MeetupData = {
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
  
  // Save to file
  const outputPath = resolve(process.cwd(), 'meetup-data.json')
  writeFileSync(outputPath, JSON.stringify(meetupData, null, 2), 'utf-8')
  
  console.log(`\n✨ Data saved to: meetup-data.json`)
  console.log('\n' + '='.repeat(50))
  console.log('Preview:')
  console.log('='.repeat(50))
  console.log(JSON.stringify(meetupData, null, 2))
}

// Run the script
fetchMeetupData().catch(error => {
  console.error('\n❌ Error:', error.message)
  process.exit(1)
})

