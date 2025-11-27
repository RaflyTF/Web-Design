<template>
  <nav 
    class="border-b sticky top-0 z-50 backdrop-blur-md transition-all duration-300"
    :class="[
      scrolled ? 'bg-dark-lighter/95 border-gold/20 shadow-lg shadow-black/20' : 'bg-dark-lighter/80 border-gold/10'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="text-2xl font-serif font-normal text-gold tracking-[0.2em] hover:text-champagne transition-all duration-300 hover:scale-105"
        >
          VELIXIER
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-10">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="text-base text-cream/80 hover:text-gold transition-all duration-300 font-light relative group"
            active-class="text-gold font-normal"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </div>

        <!-- Right Icons -->
        <div class="flex items-center gap-6">
          <!-- Theme Toggle with Font Awesome -->
          <button 
            @click="handleToggleTheme" 
            class="text-gold hover:text-champagne transition-all duration-300 hover:scale-110 text-lg"
            title="Toggle theme"
          >
            <i v-if="isDark" class="fas fa-sun"></i>
            <i v-else class="fas fa-moon"></i>
          </button>

          <!-- Cart with Font Awesome -->
          <button 
            @click="toggleCart" 
            class="text-gold hover:text-champagne transition-all duration-300 hover:scale-110 relative text-lg"
          >
            <i class="fas fa-shopping-cart"></i>
            <Transition name="scale">
              <span 
                v-if="cartCount > 0" 
                class="absolute -top-2 -right-2 bg-gold text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ cartCount }}
              </span>
            </Transition>
          </button>
          
          <!-- Mobile Menu Button with Font Awesome -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden text-gold hover:text-champagne transition-all duration-300 text-xl"
          >
            <i v-if="!mobileMenuOpen" class="fas fa-bars"></i>
            <i v-else class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gold/10">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block py-3 text-cream/80 hover:text-gold transition-colors font-light"
            active-class="text-gold font-normal"
          >
            {{ item.name }}
          </router-link>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useCart } from '../stores/cart'
import { useTheme } from '../stores/theme'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const cart = useCart()
const { toggleCart, cartCount } = cart
const theme = useTheme()
const isDark = computed(() => theme.isDark)

const handleToggleTheme = () => {
  theme.toggleTheme()
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Rating', path: '/rating' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

.slide-down-enter-active {
  transition: all 0.3s ease;
}

.slide-down-leave-active {
  transition: all 0.2s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>