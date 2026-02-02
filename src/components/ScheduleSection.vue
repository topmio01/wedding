<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl text-amber-700 mb-12 text-center">กำหนดการพิธีการ</h2>

    <div ref="container" class="relative transition duration-1000 ease-out opacity-0 translate-y-10">
      <!-- Center vertical line (hidden on mobile) -->
      <div class="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-stone-400/70"></div>
      <!-- Line caps (hidden on mobile) -->
      <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-stone-500 bg-white"></div>
      <div class="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full border-2 border-stone-500 bg-white"></div>

      <div class="space-y-10">
        <!-- Items (3-column grid: left | center | right) -->
        <div v-for="(it, idx) in items" :key="idx" class="relative grid grid-cols-1 md:grid-cols-[1fr_2rem_1fr] items-center">
          <!-- Small screen single cell -->
          <div class="md:hidden py-6">
            <div class="inline-flex items-start gap-4">
              <div class="shrink-0 w-10 h-10 flex items-center justify-center text-stone-600">
                <component :is="it.icon" class="w-8 h-8" />
              </div>
              <div>
                <div class="text-lg font-bold text-rose-700">{{ it.time }}</div>
                <div class="text-stone-700 italic" v-if="it.caption">{{ it.caption }}</div>
              </div>
            </div>
          </div>

          <!-- Left cell (md+) -->
          <div class="hidden md:block py-6 md:pr-10 md:text-right" v-if="it.side === 'left'">
            <div class="inline-flex items-start gap-4 flex-row-reverse">
              <div class="shrink-0 w-12 h-12 flex items-center justify-center text-stone-600">
                <component :is="it.icon" class="w-10 h-10" />
              </div>
              <div>
                <div class="text-xl font-bold text-rose-700">{{ it.time }}</div>
                <div class="text-stone-700 italic" v-if="it.caption">{{ it.caption }}</div>
              </div>
            </div>
          </div>
          <div v-else class="hidden md:block"></div>

          <!-- Center cell: per-item dot -->
          <div class="hidden md:flex items-center justify-center">
            <div class="w-3 h-3 rounded-full border-2 border-stone-500 bg-white"></div>
          </div>

          <!-- Right cell (md+) -->
          <div class="hidden md:block py-6 md:pl-10 md:text-left" v-if="it.side === 'right'">
            <div class="inline-flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 flex items-center justify-center text-stone-600">
                <component :is="it.icon" class="w-10 h-10" />
              </div>
              <div>
                <div class="text-xl font-bold text-rose-700">{{ it.time }}</div>
                <div class="text-stone-700 italic" v-if="it.caption">{{ it.caption }}</div>
              </div>
            </div>
          </div>
          <div v-else class="hidden md:block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
const container = ref(null)

// simple inline icon components
const IconRings = { render: () => h('svg', { viewBox: '0 0 24 24', class: 'fill-none stroke-current' }, [
  h('circle', { cx: 9, cy: 12, r: 4, stroke: 'currentColor', 'stroke-width': 1.5 }),
  h('circle', { cx: 15, cy: 12, r: 4, stroke: 'currentColor', 'stroke-width': 1.5 })
])}
const IconCamera = { render: () => h('svg', { viewBox: '0 0 24 24', class: 'fill-none stroke-current' }, [
  h('rect', { x: 3, y: 7, width: 18, height: 12, rx: 2, stroke: 'currentColor', 'stroke-width': 1.5 }),
  h('circle', { cx: 12, cy: 13, r: 3.5, stroke: 'currentColor', 'stroke-width': 1.5 }),
  h('path', { d: 'M7 7l2-3h6l2 3', stroke: 'currentColor', 'stroke-width': 1.5 })
])}
const IconDinner = { render: () => h('svg', { viewBox: '0 0 24 24', class: 'fill-none stroke-current' }, [
  h('path', { d: 'M4 15h16M6 15a6 6 0 0012 0', stroke: 'currentColor', 'stroke-width': 1.5 }),
  h('path', { d: 'M18 12l2-3M16 9l1-2', stroke: 'currentColor', 'stroke-width': 1.5 })
])}
const IconMusic = { render: () => h('svg', { viewBox: '0 0 24 24', class: 'fill-none stroke-current' }, [
  h('path', { d: 'M9 5v10a2 2 0 11-2-2 2 2 0 012 2V7l8-2v8a2 2 0 11-2-2', stroke: 'currentColor', 'stroke-width': 1.5 })
])}

const items = [
  { time: '14:00 น.', caption: 'พิธีหมั้น/ประกาศพิธี', side: 'left', icon: IconRings },
  { time: '15:00 น.', caption: 'ถ่ายภาพความทรงจำ', side: 'right', icon: IconCamera },
  { time: '18:30 น.', caption: 'งานเลี้ยงฉลองมงคลสมรส', side: 'left', icon: IconDinner },
  { time: '20:00 น.', caption: 'ปาร์ตี้แสดงความยินดี', side: 'right', icon: IconMusic },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-10')
      }
    })
  }, { threshold: 0.1 })
  if (container.value) observer.observe(container.value)
})
</script>
