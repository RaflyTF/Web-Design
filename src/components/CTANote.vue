<template>
  <section class="py-24 px-6 bg-black reveal-section">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-serif font-normal text-gold">
          Best Note For Fragrance
        </h2>
      </div>

      <!-- Note Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div 
          v-for="note in notes" 
          :key="note.name"
          class="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/20"
        >
          <!-- Background Image -->
          <div class="absolute inset-0">
            <img 
              :src="note.image" 
              :alt="note.name" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="relative h-full flex items-end p-8">
            <h3 class="text-3xl md:text-4xl font-serif font-normal text-white">
              {{ note.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CitrusNote from '../assets/CitrusNote.png'
import FloralNote from '../assets/FloralNote.png'
import WoodyNote from '../assets/WoodyNote.png'

const notes = [
  {
    name: 'Citrus Note',
    image: CitrusNote
  },
  {
    name: 'Floral Note',
    image: FloralNote
  },
  {
    name: 'Woody Note',
    image: WoodyNote
  }
]
</script>
