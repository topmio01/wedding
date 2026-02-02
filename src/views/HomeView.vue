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

    <SiteFooter />
  </div>
</template>

<script setup>
import HeroHeader from '../components/HeroHeader.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import VenueSection from '../components/VenueSection.vue'
import RsvpSection from '../components/RsvpSection.vue'
import GiftSection from '../components/GiftSection.vue'
import WishesSection from '../components/WishesSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import EnvelopeOverlay from '../components/EnvelopeOverlay.vue'
</script>
