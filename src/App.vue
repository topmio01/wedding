<template>
  <div>
    <EnvelopeOverlay v-if="showOverlay" @closed="showOverlay = false" />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EnvelopeOverlay from './components/EnvelopeOverlay.vue'

const showOverlay = ref(true)
</script>
