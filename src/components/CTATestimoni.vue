<template>
  <section class="py-24 px-6 bg-black reveal-section">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-serif font-normal text-gold">
          What our customer says
        </h2>
      </div>

      <!-- Testimonial Slider -->
      <div class="relative max-w-6xl mx-auto">
        <div 
          class="overflow-hidden"
          @mouseenter="pauseAutoPlay"
          @mouseleave="resumeAutoPlay"
        >
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="w-full shrink-0"
            >
              <div class="bg-dark-lighter rounded-3xl p-8 md:p-12 border border-gray-800/30 mx-2">
                <!-- Header with Avatar and Stars -->
                <div class="flex items-start justify-between mb-6">
                  <div class="flex items-center gap-4">
                    <div class="w-20 h-20 rounded-full bg-linear-to-br from-champagne to-gold flex items-center justify-center text-dark font-bold text-3xl font-serif shrink-0">
                      {{ testimonial.name.charAt(0) }}
                    </div>
                    <div>
                      <p class="text-gold font-serif text-xl">{{ testimonial.name }}</p>
                      <p class="text-cream/50 text-sm">{{ testimonial.role }}</p>
                    </div>
                  </div>
                  <div class="flex gap-0.5">
                    <svg v-for="i in 5" :key="i" class="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <!-- Testimonial Text -->
                <p class="text-cream/70 leading-relaxed text-lg">
                  "{{ testimonial.text }}"
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Dots -->
        <div class="flex justify-center gap-3 mt-8">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="goToSlide(index)"
            class="transition-all duration-300"
            :class="[
              currentIndex === index 
                ? 'w-12 h-3 bg-gold rounded-full' 
                : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-dark-lighter hover:bg-gold text-gold hover:text-dark border border-gold/30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-dark-lighter hover:bg-gold text-gold hover:text-dark border border-gold/30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
let intervalId = null

const testimonials = [
  {
    text: "Beautifully packaged, authentic fragrance, and such a pleasant aroma that lasts all day. Shopping here was an amazing experience!",
    name: "Zann",
    role: "Yapper"
  },
  {
    text: "The perfume arrived quickly and was exactly as described — the scent is elegant and long-lasting, truly exceeded my expectations",
    name: "Black Daniel",
    role: "Vtuber"
  },
  {
    text: "Velixier's attention to detail is remarkable. Every fragrance tells a unique story and the quality is simply outstanding. Highly recommended!",
    name: "Sarah Chen",
    role: "Perfume Collector"
  },
  {
    text: "The customer service is excellent and the products are authentic. I've been buying from Velixier for years and never been disappointed.",
    name: "Marcus Williams",
    role: "Loyal Customer"
  }
]

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoPlay()
}

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 5000)
}

const pauseAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
  }
}

const resumeAutoPlay = () => {
  startAutoPlay()
}

const resetAutoPlay = () => {
  pauseAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
