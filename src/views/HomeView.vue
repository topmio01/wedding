<template>
  <div>
    <HeroHeader />

    <section id="schedule" class="min-h-screen bg-amber-50/40 flex items-center justify-center px-6">
      <ScheduleSection />
    </section>

    <section class="min-h-screen py-20 bg-stone-100 px-6 text-center">
      <VenueSection />
    </section>

    <section id="schedule" class="min-h-screen bg-amber-50/40 flex items-center justify-center px-6">
      <RsvpSection />
      <!-- <GiftSection /> -->
    </section>

    <!-- <section class="py-20 px-6 bg-white shadow-inner">
      <WishesSection />
    </section> -->
    <section class="min-h-screen py-20 bg-stone-100 px-6 text-center">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl text-amber-700 mb-8 text-center">Gallery</h2>
        <!-- สำคัญ: ต้องกำหนดความสูงให้พ่อของ Gallery -->
        <div class="w-full h-[60vh] rounded-3xl overflow-hidden shadow-lg">
          <Gallery :items="[
            { image: PhotoUrl1, text: 'Moment 1' },
            { image: PhotoUrl2, text: 'Moment 2' },
            // { image: '/public/images/gallery/3.jpg', text: 'Moment 3' },
            // { image: '/public/images/gallery/4.jpg', text: 'Moment 4' }
          ]" :bend="3" textColor="#ffffff" :borderRadius="0.05" font="bold 30px Figtree" :scrollSpeed="2"
            :scrollEase="0.05" />
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup>
import PhotoUrl1 from '/src/assets/images/1.jpg'
import PhotoUrl2 from '/src/assets/images/2.jpg'
import HeroHeader from '../components/HeroHeader.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import VenueSection from '../components/VenueSection.vue'
import RsvpSection from '../components/RsvpSection.vue'
import GiftSection from '../components/GiftSection.vue'
import WishesSection from '../components/WishesSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import EnvelopeOverlay from '../components/EnvelopeOverlay.vue'
import Gallery from '../components/Gallery.vue'
</script>
