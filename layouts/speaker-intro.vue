<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'

interface Props {
  image?: string
  name?: string
  talkTitle?: string
  github?: string
  company?: string
  jobTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  name: '',
  talkTitle: '',
  github: '',
  company: '',
  jobTitle: '',
})

// Generate random border-radius for organic blob shapes
const randomBorderRadius = computed(() => {
  // Use name as seed for consistent randomness per speaker
  const seed = props.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  
  // Pseudo-random number generator with seed
  const random = (min: number, max: number, offset: number) => {
    const x = Math.sin(seed + offset) * 10000
    const rand = x - Math.floor(x)
    return Math.floor(rand * (max - min + 1)) + min
  }
  
  // Generate 8 values for 4 corners (horizontal and vertical radius for each)
  const values = [
    random(40, 70, 1),  // top-left horizontal
    random(40, 70, 2),  // top-left vertical
    random(40, 70, 3),  // top-right horizontal
    random(40, 70, 4),  // top-right vertical
    random(40, 70, 5),  // bottom-right horizontal
    random(40, 70, 6),  // bottom-right vertical
    random(40, 70, 7),  // bottom-left horizontal
    random(40, 70, 8),  // bottom-left vertical
  ]
  
  return `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`
})

// Generate random border-radius for accent blob
const accentBlobRadius = computed(() => {
  const seed = props.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  
  const random = (min: number, max: number, offset: number) => {
    const x = Math.sin(seed + offset + 100) * 10000
    const rand = x - Math.floor(x)
    return Math.floor(rand * (max - min + 1)) + min
  }
  
  const values = [
    random(30, 70, 1),
    random(30, 70, 2),
    random(30, 70, 3),
    random(30, 70, 4),
    random(30, 70, 5),
    random(30, 70, 6),
    random(30, 70, 7),
    random(30, 70, 8),
  ]
  
  return `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`
})

// Determine if layout should be flipped (alternating between speakers)
const isFlipped = computed(() => {
  const seed = props.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return seed % 2 === 0
})
</script>

<template>
  <div class="w-full h-full relative overflow-hidden">
    <!-- Background with patterns -->
    <div 
      class="absolute inset-0 bg-theme-blue z-0"
      style="view-transition-name: background-layer"
    >
      <!-- Geometric patterns overlay -->
      <div class="absolute inset-0 opacity-50 bg-repeat" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255, 255, 255, 0.03) 50px, rgba(255, 255, 255, 0.03) 100px)"></div>
    </div>
    
    <!-- Main content container -->
    <div class="absolute inset-0 flex items-center justify-center z-1 p-12 pr-16">
      <div class="relative w-full h-full max-w-1350px max-h-750px">
        
        <!-- Large speaker photo - positioned dynamically -->
        <div 
          class="absolute top-1/2 transform -translate-y-1/2 z-20"
          :class="isFlipped ? 'right-20px' : 'left-20px'"
        >
          <div class="relative">
            <!-- Photo container with shadow -->
            <div 
              class="w-360px h-360px overflow-hidden border-6 border-black shadow-2xl bg-white p-3"
              :style="{ borderRadius: randomBorderRadius }"
              style="view-transition-name: speaker-photo-border"
 
            >
              <div 
                class="w-full h-full overflow-hidden"
                :style="{ borderRadius: randomBorderRadius }"
                style="view-transition-name: speaker-photo"
              >
                <img 
                  v-if="image" 
                  :src="image" 
                  :alt="name" 
                  class="w-full h-full object-cover"
                />
                <div 
                  v-else 
                  class="w-full h-full flex items-center justify-center bg-theme-blue text-white text-9xl font-bold"
                >
                  {{ name.charAt(0) }}
                </div>
              </div>
            </div>
            
            <!-- Green accent blob behind photo - position flips with layout -->
            <div 
              class="absolute -bottom-20px w-120px h-120px bg-theme-green -z-10"
              :class="isFlipped ? '-left-20px' : '-right-20px'"
              :style="{ borderRadius: accentBlobRadius }"
            ></div>
          </div>
        </div>

        <!-- Main white card with content - position flips -->
        <div 
          class="absolute top-1/2 transform -translate-y-1/2 h-480px"
          :class="isFlipped ? 'right-260px left-20px' : 'left-260px right-20px'"
        >
          <!-- Yellow card (bottom) -->
          <div 
            class="absolute w-full h-full top-30px left-30px bg-theme-yellow rounded-16px border-4 border-black shadow-xl z-1"
            style="view-transition-name: card-layer-yellow"
          ></div>
          
          <!-- Orange card (middle) -->
          <div 
            class="absolute w-full h-full top-15px left-15px bg-theme-orange rounded-16px border-4 border-black shadow-xl z-2"
            style="view-transition-name: card-layer-orange"
          ></div>
          
          <!-- White card (top) -->
          <div 
            class="absolute w-full h-full top-0 left-0 bg-white rounded-16px border-4 border-black shadow-2xl z-3 overflow-hidden"
            style="view-transition-name: card-layer-white"
          >
            <!-- Content area - padding flips based on layout direction -->
            <div 
              class="h-full flex flex-col justify-center gap-5 relative px-12 py-10"
              :class="isFlipped ? 'pr-150px pl-16' : 'pl-150px pr-16'"
            >
              
              <!-- Presenting badge - position flips -->
              <div 
                class="fixed -top-30px"
                :class="isFlipped ? 'left-40px' : 'right-40px'"
              >
                <div class="relative">
                  <div 
                    class="bg-theme-yellow px-8 py-3 rounded-full border-4 border-black shadow-lg transform"
                    :class="isFlipped ? '-rotate-3' : 'rotate-3'"
                  >
                    <span class="text-xl font-black text-black uppercase tracking-wide">Presenting</span>
                  </div>
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-theme-orange opacity-20 -z-10">
                    {{ isFlipped ? '←' : '→' }}
                  </div>
                </div>
              </div>

              <!-- Speaker name -->
              <h2 class="text-4xl font-black text-theme-blue leading-none mb-1">
                {{ name }}
              </h2>
              
              <!-- Company & Job Title -->
              <div class="space-y-1">                
                <span v-if="jobTitle" class="text-xl text-gray-400 font-medium">
                  {{ jobTitle }} @ 
                </span>
                <span v-if="company" class="text-xl font-bold text-theme-orange">
                  {{ company }}
                </span>
              </div>
              
              <!-- Divider -->
              <div class="w-80px h-4px bg-theme-yellow transform -skew-x-12 my-2"></div>
              
              <!-- Talk title -->
              <h1 class="text-4xl font-black text-gray-900 leading-tight">
                {{ talkTitle }}
              </h1>
              
              <!-- GitHub -->
              <div v-if="github" class="flex items-center gap-3 text-base text-gray-500 mt-auto pt-2">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/>
                </svg>
                <span class="font-mono font-medium">@{{ github }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations and effects */
</style>

