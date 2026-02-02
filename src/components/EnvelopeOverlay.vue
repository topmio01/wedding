<template>
  <div
    v-show="visible"
    id="envelope-overlay"
    class="fixed inset-0 z-[100] flex items-center justify-center transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
    :style="{ ...overlayStyle, backgroundImage: bgStyle.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div id="envelope-content" class="relative w-full max-w-2xl px-6 text-center transition-all duration-700 ease-in-out transform"
      :class="contentClasses">
      <!-- Monogram / Logo -->
      <div class="mb-6 select-none">
        <div class="text-stone-900/90 tracking-wider" style="font-family: 'Charm', cursive;">
          <span class="text-6xl md:text-7xl font-bold">P</span><span class="text-6xl md:text-7xl font-bold">T</span>
        </div>
      </div>

      <!-- Envelope mockup card -->
      <div id="envelope-container" class="mb-6 cursor-pointer group" @click="openEnvelope">
        <div class="relative mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white/70 backdrop-blur-sm">
          <img
            class="w-full h-72 md:h-96 object-cover object-center"
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
            alt="Envelope"
          />
          <!-- Soft overlay text -->
          <div class="absolute inset-0 flex flex-col items-center justify-center text-stone-800/90">
            <p class="uppercase tracking-[0.35em] text-xs md:text-sm mb-2">Save the Date</p>
            <p class="font-wedding text-3xl md:text-4xl mb-1">Kwangdaw & Dean</p>
            <p class="text-xs md:text-sm">Sunday, 2 February 2026</p>
          </div>
        </div>
      </div>

      <!-- Pill button -->
      <button @click="openEnvelope"
        class="inline-flex items-center gap-3 bg-white/80 text-stone-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all backdrop-blur-sm">
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 ring-1 ring-amber-200">📖</span>
        <span class="font-semibold">คลิกเพื่อเปิดการ์ด</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const visible = ref(true)
const contentHidden = ref(false)
const overlayLifted = ref(false)

// Background illustration similar to reference (soft watercolor forest)
const bgStyle = computed(() => ({
  backgroundImage:
    "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')",
}))

const contentClasses = computed(() => ({
  'opacity-0 scale-90 translate-y-4': contentHidden.value,
}))

const overlayStyle = computed(() => ({
  transform: overlayLifted.value ? 'translateY(-100%)' : 'translateY(0)',
  opacity: overlayLifted.value ? '0' : '1',
}))

const emit = defineEmits(['closed'])

function openEnvelope() {
  contentHidden.value = true
  setTimeout(() => {
    overlayLifted.value = true
  }, 300)
  setTimeout(() => {
    visible.value = false
    emit('closed')
  }, 5000)
}
</script>
