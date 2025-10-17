<template>
  <div>
    <AudienceReactions 
        v-if="reactionsEnabled"
        :host="REACTIONS_HOST"
        :show-controls="false"
        :show-status="false"
        :show-animation-selector="false"
        default-animation="random"
        style="position: fixed; inset: 0; pointer-events: none; z-index: 9999;"
    />
  </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import AudienceReactions from './components/audience/AudienceReactions.vue'

const REACTIONS_HOST = 'slidev-audience.s4ndeep1203.workers.dev'

// Use the same storage key as custom-nav-controls.vue
const reactionsEnabled = useStorage('slidev-reactions-enabled', true)
</script>
