<template>
  <header class="hero-bg h-screen flex flex-col items-center justify-center text-white text-center px-4">
    <div class="fade-in">
      <h2 class="text-2xl mb-4 font-wedding tracking-widest">THE WEDDING OF</h2>
      <!-- <h1 class="text-6xl md:text-8xl font-wedding mb-6">... & ...</h1> -->
      <!-- <p class="text-xl mb-8">ขอเชิญร่วมเป็นเกียรติและฉลองเนื่องในพิธีมงคลสมรส</p> -->

      <div id="countdown" class="flex gap-3 md:gap-4 justify-center text-2xl md:text-3xl font-bold mb-10">
        <div class="bg-white/20 p-3 md:p-4 rounded-xl backdrop-blur-md border border-white/30 shadow-lg w-20 md:w-24">
          <span class="block">{{ dd }}</span>
          <p class="text-[10px] md:text-xs uppercase tracking-widest font-light mt-1">วัน</p>
        </div>
        <div class="bg-white/20 p-3 md:p-4 rounded-xl backdrop-blur-md border border-white/30 shadow-lg w-20 md:w-24">
          <span class="block">{{ hh }}</span>
          <p class="text-[10px] md:text-xs uppercase tracking-widest font-light mt-1">ชม.</p>
        </div>
        <div class="bg-white/20 p-3 md:p-4 rounded-xl backdrop-blur-md border border-white/30 shadow-lg w-20 md:w-24">
          <span class="block">{{ mm }}</span>
          <p class="text-[10px] md:text-xs uppercase tracking-widest font-light mt-1">นาที</p>
        </div>
        <div class="bg-amber-500/40 p-3 md:p-4 rounded-xl backdrop-blur-md border border-white/50 shadow-lg w-20 md:w-24 border-amber-200">
          <span class="block text-amber-100">{{ ss }}</span>
          <p class="text-[10px] md:text-xs uppercase tracking-widest font-light mt-1 text-amber-100">วินาที</p>
        </div>
      </div>

      <a href="#" @click.prevent="scrollToSchedule" class="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-800 transition">รายละเอียดงาน</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dd = ref('00')
const hh = ref('00')
const mm = ref('00')
const ss = ref('00')

const targetDate = new Date('August 02, 2026 07:07:00').getTime()
let timer

function updateCountdown() {
  const now = Date.now()
  const distance = targetDate - now
  if (distance < 0) {
    dd.value = hh.value = mm.value = ss.value = '00'
    if (timer) clearInterval(timer)
    return
  }
  const d = Math.floor(distance / (1000 * 60 * 60 * 24))
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((distance % (1000 * 60)) / 1000)
  dd.value = d < 10 ? '0' + d : String(d)
  hh.value = h < 10 ? '0' + h : String(h)
  mm.value = m < 10 ? '0' + m : String(m)
  ss.value = s < 10 ? '0' + s : String(s)
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

function scrollToSchedule() {
  const el = document.getElementById('schedule')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
