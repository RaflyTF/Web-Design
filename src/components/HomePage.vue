<template>
  <div class="min-h-screen">
    <Navbar />
    <HeroHome />
    <CTANote />
    <CTABestSellers />
    <CTAPromo />
    <CTATestimoni />
    <Footer />
    
    <!-- Scroll to Top Button -->
    <Transition name="fade-scale">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 bg-gold hover:bg-champagne text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-gold/30 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './Navbar.vue'
import HeroHome from './HeroHome.vue'
import CTANote from './CTANote.vue'
import CTABestSellers from './CTABestSellers.vue'
import CTAPromo from './CTAPromo.vue'
import CTATestimoni from './CTATestimoni.vue'
import Footer from './Footer.vue'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
  
  // Reveal sections on scroll
  const revealSections = document.querySelectorAll('.reveal-section')
  revealSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    
    if (sectionTop < windowHeight * 0.85) {
      section.classList.add('revealed')
    }
  })
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
