<script setup lang="ts">
import CardLayers from '../components/CardLayers.vue'

// Define props that will be populated from frontmatter
const props = defineProps<{
  photo?: string
  caption?: string
}>()
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
    <CardLayers size="large" no-padding>
      <div class="layout-default h-full flex items-center justify-center p-0 relative">
        <!-- Display image if photo prop is provided -->
        <img 
          v-if="photo" 
          :src="photo" 
          alt="Slide Image" 
          class="w-full h-full object-cover"
        />
        <p v-if="caption" class="fixed border-4 border-black rounded-lg p-4 bg-white shadow-2xl bottom-4 right-4 text-sm text-gray-500 z-10">
          {{ caption }}
        </p>
      </div>
    </CardLayers>
  </div>
</template>
