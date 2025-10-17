<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface SponsorData {
  name: string
  logo: string | null
}

interface MeetupData {
  sponsor: SponsorData | null
}

const sponsor = ref<SponsorData | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const sponsorLogo = computed(() => {

  // if the logo url starts with https://frontend.mu/assets/, then replace it with https://directus.coders.mu/assets/
  
  if (sponsor.value?.logo?.startsWith('https://frontend.mu/assets/')) {
    return sponsor.value.logo.replace('https://frontend.mu/assets/', 'https://directus.coders.mu/assets/')
  }
  return sponsor.value?.logo
})

onMounted(async () => {
  try {
    const response = await fetch('/meetup-data.json')
    if (!response.ok) {
      throw new Error('Failed to load meetup data')
    }
    const data: MeetupData = await response.json()
    sponsor.value = data.sponsor
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Unknown error'
    console.error('Error loading sponsor data:', e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="sponsor-slide">
    <div v-if="loading" class="text-white/60 text-2xl">
      Loading...
    </div>
    
    <div v-else-if="error" class="text-red-400 text-xl">
      {{ error }}
    </div>
    
    <div v-else-if="sponsor" class="flex flex-col items-center gap-12">
      <h2 class="text-4xl font-bold text-white mb-4">
        Thank You to Our Sponsor
      </h2>
      
      <div v-if="sponsorLogo" class="sponsor-logo-container">
        <img 
          :src="sponsorLogo" 
          :alt="sponsor.name"
          class="sponsor-logo max-w-500px max-h-300px object-contain"
        />
      </div>
      
      <h3 class="text-5xl font-900 text-theme-yellow">
        {{ sponsor.name }}
      </h3>
    </div>
    
    <div v-else class="text-white/60 text-2xl">
      No sponsor information available
    </div>
  </div>
</template>

<style scoped>
.sponsor-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.sponsor-logo-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 4px solid #000;
  view-transition-name: card-layer-white;
}

.sponsor-logo {
  display: block;
}
</style>

