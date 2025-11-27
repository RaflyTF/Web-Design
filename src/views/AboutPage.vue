<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="py-20 px-4 bg-dark min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16 reveal-section" :class="{ 'revealed': isRevealed }">
          <h1 class="text-5xl md:text-6xl font-serif font-normal text-gold mb-6">About Velixier</h1>
          <p class="text-cream/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Welcome to <span class="text-gold font-semibold">Velixier</span>, where luxury meets artistry in every bottle. We are passionate about creating exceptional fragrances that tell stories and evoke emotions.
          </p>
        </div>

        <!-- Stats Counter Section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="bg-dark-lighter p-8 rounded-2xl border border-gray-800/30 text-center reveal-section"
            :class="{ 'revealed': isRevealed }"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-4xl md:text-5xl font-serif text-gold mb-2">
              <span v-if="stat.prefix">{{ stat.prefix }}</span>
              <span>{{ animatedCounts[index] }}</span>
              <span v-if="stat.suffix">{{ stat.suffix }}</span>
            </div>
            <p class="text-cream/70 text-sm md:text-base">{{ stat.label }}</p>
          </div>
        </div>

        <!-- Brand Values/Pillars -->
        <div class="mb-20">
          <h2 class="text-4xl font-serif text-gold text-center mb-12 reveal-section" :class="{ 'revealed': isRevealed }">Our Core Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="(value, index) in values" 
              :key="index"
              class="group bg-dark-lighter p-8 rounded-2xl border border-gray-800/30 hover:border-gold/50 transition-all duration-300 hover:scale-105 reveal-section"
              :class="{ 'revealed': isRevealed }"
              :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
            >
              <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {{ value.icon }}
              </div>
              <h3 class="text-xl font-serif text-gold mb-3">{{ value.title }}</h3>
              <p class="text-cream/70 text-sm leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>

        <!-- Timeline Section -->
        <div class="mb-20">
          <h2 class="text-4xl font-serif text-gold text-center mb-12 reveal-section" :class="{ 'revealed': isRevealed }">Our Journey</h2>
          <div class="max-w-4xl mx-auto">
            <div 
              v-for="(milestone, index) in timeline" 
              :key="index"
              class="relative pl-8 pb-12 border-l-2 border-gold/30 last:pb-0 reveal-section"
              :class="{ 'revealed': isRevealed }"
              :style="{ animationDelay: `${0.6 + index * 0.15}s` }"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-[-9px] top-0 w-4 h-4 bg-gold rounded-full ring-4 ring-dark"></div>
              
              <div class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30 hover:border-gold/30 transition-colors">
                <div class="flex items-center gap-4 mb-3">
                  <span class="text-3xl font-serif text-gold">{{ milestone.year }}</span>
                  <span class="text-2xl">{{ milestone.icon }}</span>
                </div>
                <h3 class="text-xl text-cream font-medium mb-2">{{ milestone.title }}</h3>
                <p class="text-cream/70 text-sm leading-relaxed">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Section -->
        <div class="mb-20">
          <h2 class="text-4xl font-serif text-gold text-center mb-4 reveal-section" :class="{ 'revealed': isRevealed }">Meet Our Team</h2>
          <p class="text-cream/70 text-center mb-12 max-w-2xl mx-auto">The passionate individuals behind Velixier's exceptional fragrances</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="(member, index) in team" 
              :key="index"
              class="group reveal-section"
              :class="{ 'revealed': isRevealed }"
              :style="{ animationDelay: `${0.8 + index * 0.1}s` }"
            >
              <div class="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                <!-- Avatar with gradient background -->
                <div 
                  class="w-full h-full flex items-center justify-center text-6xl font-serif text-white"
                  :style="{ background: member.gradient }"
                >
                  {{ member.initials }}
                </div>
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p class="text-cream/90 text-sm leading-relaxed">{{ member.bio }}</p>
                </div>
              </div>
              <h3 class="text-xl font-serif text-gold mb-1">{{ member.name }}</h3>
              <p class="text-cream/60 text-sm">{{ member.role }}</p>
            </div>
          </div>
        </div>

        <!-- Behind the Scenes Gallery -->
        <div class="mb-20">
          <h2 class="text-4xl font-serif text-gold text-center mb-4 reveal-section" :class="{ 'revealed': isRevealed }">Behind The Scenes</h2>
          <p class="text-cream/70 text-center mb-12 max-w-2xl mx-auto">Glimpse into our perfume crafting process</p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div 
              v-for="(image, index) in gallery" 
              :key="index"
              class="group relative aspect-square rounded-2xl overflow-hidden reveal-section cursor-pointer"
              :class="{ 'revealed': isRevealed }"
              :style="{ animationDelay: `${1 + index * 0.1}s` }"
            >
              <div 
                class="w-full h-full flex items-center justify-center text-4xl"
                :style="{ background: image.gradient }"
              >
                {{ image.icon }}
              </div>
              <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p class="text-cream text-center px-4 font-medium">{{ image.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Story Sections -->
        <div class="max-w-4xl mx-auto space-y-8 mb-20">
          <div class="bg-dark-lighter p-8 rounded-3xl border border-gray-800 reveal-section" :class="{ 'revealed': isRevealed }">
            <h2 class="text-3xl font-serif font-normal text-gold mb-4">Our Story</h2>
            <p class="text-cream/80 leading-relaxed">
              Founded with a vision to revolutionize the fragrance industry, Velixier combines traditional perfumery techniques with modern innovation. Each scent in our collection is meticulously crafted by master perfumers using the finest ingredients sourced from around the world.
            </p>
          </div>

          <div class="bg-dark-lighter p-8 rounded-3xl border border-gray-800 reveal-section" :class="{ 'revealed': isRevealed }">
            <h2 class="text-3xl font-serif font-normal text-gold mb-4">Our Philosophy</h2>
            <p class="text-cream/80 leading-relaxed">
              We believe that fragrance is more than just a scent—it's an expression of identity, a memory captured in a bottle, and an art form that deserves to be celebrated. Every Velixier fragrance is designed to be timeless, elegant, and unforgettable.
            </p>
          </div>

          <div class="bg-dark-lighter p-8 rounded-3xl border border-gray-800 reveal-section" :class="{ 'revealed': isRevealed }">
            <h2 class="text-3xl font-serif font-normal text-gold mb-4">Quality & Craftsmanship</h2>
            <p class="text-cream/80 leading-relaxed">
              Our commitment to excellence is unwavering. We use only premium ingredients and sustainable practices to create fragrances that not only smell divine but also respect our planet. Each bottle is a testament to our dedication to quality and artisanal craftsmanship.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center pt-8">
          <router-link 
            to="/products"
            class="inline-block bg-champagne hover:bg-gold text-dark px-12 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
          >
            Explore Our Collection
          </router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const isRevealed = ref(false)
const animatedCounts = ref([0, 0, 0, 0])

const stats = [
  { value: 500, suffix: '+', label: 'Products Sold', prefix: '' },
  { value: 50, suffix: '+', label: 'Countries', prefix: '' },
  { value: 10, suffix: '+', label: 'Master Perfumers', prefix: '' },
  { value: 5, suffix: '', label: 'Years Excellence', prefix: '' }
]

const values = [
  {
    icon: '🌿',
    title: 'Sustainability',
    description: 'We source ingredients responsibly and prioritize eco-friendly practices in every step of our process.'
  },
  {
    icon: '💎',
    title: 'Quality',
    description: 'Only the finest materials and meticulous attention to detail go into every Velixier fragrance.'
  },
  {
    icon: '✨',
    title: 'Innovation',
    description: 'Blending traditional techniques with cutting-edge technology to create unique scents.'
  },
  {
    icon: '🎨',
    title: 'Artistry',
    description: 'Each fragrance is a masterpiece, carefully composed by our expert perfumers.'
  }
]

const timeline = [
  {
    year: '2020',
    icon: '🌱',
    title: 'The Beginning',
    description: 'Velixier was founded with a dream to create luxury fragrances that tell stories and evoke emotions.'
  },
  {
    year: '2021',
    icon: '🎭',
    title: 'First Collection',
    description: 'Launched our signature collection featuring 8 unique fragrances, each crafted with premium ingredients.'
  },
  {
    year: '2022',
    icon: '🌍',
    title: 'Global Expansion',
    description: 'Expanded to 50+ countries worldwide, bringing Velixier\'s luxury to fragrance lovers globally.'
  },
  {
    year: '2023',
    icon: '🏆',
    title: 'Award Recognition',
    description: 'Received multiple industry awards for excellence in perfumery and sustainable practices.'
  },
  {
    year: '2024',
    icon: '🚀',
    title: 'Innovation Hub',
    description: 'Opened our state-of-the-art laboratory for developing next-generation fragrances.'
  },
  {
    year: '2025',
    icon: '💫',
    title: 'Today',
    description: 'Continuing to push boundaries in luxury perfumery with over 500 products sold worldwide.'
  }
]

const team = [
  {
    name: 'Alexandre Dubois',
    role: 'Founder & Master Perfumer',
    initials: 'AD',
    gradient: 'linear-gradient(135deg, #d4af37 0%, #c9a961 100%)',
    bio: 'With 20+ years in perfumery, Alexandre brings unparalleled expertise and passion to every creation.'
  },
  {
    name: 'Sophie Laurent',
    role: 'Creative Director',
    initials: 'SL',
    gradient: 'linear-gradient(135deg, #c9a961 0%, #8b7355 100%)',
    bio: 'Sophie\'s artistic vision shapes the aesthetic and storytelling behind each Velixier fragrance.'
  },
  {
    name: 'Marco Rossi',
    role: 'Head of Innovation',
    initials: 'MR',
    gradient: 'linear-gradient(135deg, #8b7355 0%, #d4af37 100%)',
    bio: 'Marco pioneers new techniques and sustainable practices in modern perfumery.'
  },
  {
    name: 'Amara Chen',
    role: 'Quality Director',
    initials: 'AC',
    gradient: 'linear-gradient(135deg, #b8964f 0%, #d4af37 100%)',
    bio: 'Amara ensures every bottle meets Velixier\'s rigorous standards of excellence.'
  }
]

const gallery = [
  { icon: '🧪', label: 'Laboratory', gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' },
  { icon: '🌺', label: 'Ingredients', gradient: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)' },
  { icon: '⚗️', label: 'Distillation', gradient: 'linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 100%)' },
  { icon: '🎨', label: 'Composition', gradient: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)' },
  { icon: '💧', label: 'Testing', gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' },
  { icon: '✨', label: 'Bottling', gradient: 'linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%)' }
]

// Counter Animation
const animateCounters = () => {
  stats.forEach((stat, index) => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        animatedCounts.value[index] = stat.value
        clearInterval(timer)
      } else {
        animatedCounts.value[index] = Math.floor(current)
      }
    }, duration / steps)
  })
}

// Scroll reveal animation
const handleScroll = () => {
  const sections = document.querySelectorAll('.reveal-section')
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight * 0.85
    if (isVisible) {
      section.classList.add('revealed')
    }
  })
}

onMounted(() => {
  isRevealed.value = true
  animateCounters()
  
  // Initial check
  setTimeout(handleScroll, 100)
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-section.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
