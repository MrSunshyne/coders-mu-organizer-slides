<script setup lang="ts">
import { computed } from 'vue'
import CardLayers from '../components/CardLayers.vue'

// Define props for organizers data
const props = defineProps<{
  community?: string
  organizers?: Array<{
    name: string
    title: string
    company: string
    image: string
  }>
}>()

// Generate unique blob shapes for each organizer
const getBlobShape = (index: number) => {
  const seed = index * 123
  const random = (min: number, max: number, offset: number) => {
    const x = Math.sin(seed + offset) * 10000
    const rand = x - Math.floor(x)
    return Math.floor(rand * (max - min + 1)) + min
  }
  
  const values = [
    random(35, 65, 1),
    random(35, 65, 2),
    random(35, 65, 3),
    random(35, 65, 4),
    random(35, 65, 5),
    random(35, 65, 6),
    random(35, 65, 7),
    random(35, 65, 8),
  ]
  
  return `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`
}

// Border colors for variety
const borderColors = ['#0080FF', '#FFD700', '#FF6B4A']
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
    
    <!-- Layered cards component -->
    <CardLayers size="default">
      <div class="layout-default h-full flex flex-col">
        
        <!-- Header -->
        <div class="absolute top-6 left-8 z-10">
          <p v-if="community" class="text-xs font-bold text-gray-500 mb-1">
            {{ community }} Organizers
          </p>
        </div>
        
        <!-- Organizers Grid -->
        <div v-if="organizers && organizers.length > 0" class="flex flex-1 text-center justify-between relative pt-16 ">
          <!-- Organizer 1 - Left -->
          <div 
            v-if="organizers[0]"
          >
            <div class="relative w-200px" >
              <!-- Photo with blob shape -->
              <div 
                class="bg-white p-2 shadow-xl"
                :style="{ 
                  borderRadius: getBlobShape(0),
                  border: `6px solid ${borderColors[0]}`
                }"
              >
                <div 
                  class="w-full h-full overflow-hidden"
                  :style="{ borderRadius: getBlobShape(0) }"
                >
                  <img 
                    :src="organizers[0].image" 
                    :alt="organizers[0].name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              
            </div>
            
            <!-- Info below photo -->
            <div class="mt-4 max-w-140px">
              <p class="text-base font-black  mb-0 leading-tight text-white">
                {{ organizers[0].name }}
              </p>
              <p class="text-xs text-gray-600 font-medium leading-tight">
                {{ organizers[0].title }}
              </p>
              <p class="text-xs text-gray-500 italic">
                {{ organizers[0].company }}
              </p>
            </div>
          </div>
          
          <!-- Organizer 2 - Right -->
          <div 
            v-if="organizers[1]"
          >
            <div class="relative w-200px" >
              <!-- Photo with blob shape -->
              <div 
                class=" bg-white p-2 shadow-xl"
                :style="{ 
                  borderRadius: getBlobShape(1),
                  border: `6px solid ${borderColors[2]}`
                }"
              >
                <div 
                  class="w-full h-full overflow-hidden"
                  :style="{ borderRadius: getBlobShape(1) }"
                >
                  <img 
                    :src="organizers[1].image" 
                    :alt="organizers[1].name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              
            </div>

            <!-- Info below photo -->
            <div class="mt-4 max-w-140px">
              <p class="text-base font-black  mb-0 leading-tight text-white">
                {{ organizers[1].name }}
              </p>
              <p class="text-xs text-gray-600 font-medium leading-tight">
                {{ organizers[1].title }}
              </p>
              <p class="text-xs text-gray-500 italic">
                {{ organizers[1].company }}
              </p>
            </div>
          </div>
          
          
          <!-- Organizer 3 - Bottom left (if exists) -->
          <div 
            v-if="organizers[2]"
          >
            <div class="relative w-200px" >
              <!-- Photo with blob shape -->
              <div 
                
                :style="{ 
                  borderRadius: getBlobShape(2),
                  border: `4px solid ${borderColors[1]}`
                }"
              >
                <div 
                  class="w-full h-full overflow-hidden"
                  :style="{ borderRadius: getBlobShape(2) }"
                >
                  <img 
                    :src="organizers[2].image" 
                    :alt="organizers[2].name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              
                <!-- Info below photo -->
                <div class="mt-4 max-w-140px">
                <p class="text-base font-black  mb-0 leading-tight text-white">
                    {{ organizers[2].name }}
                </p>
                <p class="text-xs text-gray-600 font-medium leading-tight">
                    {{ organizers[2].title }}
                </p>
                <p class="text-xs text-gray-500 italic">
                    {{ organizers[2].company }}
                </p>
                </div>
            </div>
          </div>
        </div>
        
        <!-- Fallback to slot content -->
        <div v-else class="flex-1">
          <slot />
        </div>
        
      </div>
    </CardLayers>
  </div>
</template>

