<script setup lang="ts">
import { computed } from 'vue'
import meetupData from '../meetup-data.json'

interface SponsorData {
  name: string
  logo: string | null
}

const sponsor = meetupData.sponsor as SponsorData | null

const sponsorLogo = computed(() => {
  // if the logo url starts with https://frontend.mu/assets/, then replace it with https://directus.coders.mu/assets/
  if (sponsor?.logo?.startsWith('https://frontend.mu/assets/')) {
    return sponsor.logo.replace('https://frontend.mu/assets/', 'https://directus.coders.mu/assets/')
  }
  return sponsor?.logo
})
</script>

<template>
  <div class="sponsor-slide">
    <div v-if="sponsor" class="flex flex-col items-center gap-12">
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

