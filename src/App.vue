<template>
  <div>
    <EnvelopeOverlay v-if="showOverlay" @closed="showOverlay = false" />
    <router-view />
    <!-- Global mouse-trail cursor (desktop only) -->
    <div class="hidden md:block fixed inset-0 pointer-events-none z-[5]">
      <TextCursor text="🌸" :listenWindow="true" />
    </div>
  
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EnvelopeOverlay from './components/EnvelopeOverlay.vue'
import TextCursor from './components/TextCursor.vue'


const showOverlay = ref(true)
</script>
