<script setup>
import { BaselineChecker } from '@baseline-banner/vue'
import '@baseline-banner/vue/style.css'

const props = defineProps({
  featureName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <BaselineChecker :feature-name="featureName" />
</template>