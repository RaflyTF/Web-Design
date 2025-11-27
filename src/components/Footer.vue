<template>
  <footer class="bg-dark-lighter py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="space-y-3">
          <h3 class="text-xl font-serif font-normal text-gold tracking-[0.2em]">VELIXIER</h3>
          <p class="text-cream/60 text-sm leading-relaxed">
            Crafting luxury fragrances with artisanal precision and timeless elegance.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-3">
          <h4 class="text-base font-normal text-gold mb-4">Quick Links</h4>
          <nav class="flex flex-col gap-2">
            <router-link to="/products" class="text-cream/60 hover:text-gold transition-colors text-sm">Shop All</router-link>
            <router-link to="/about" class="text-cream/60 hover:text-gold transition-colors text-sm">About Us</router-link>
            <router-link to="/contact" class="text-cream/60 hover:text-gold transition-colors text-sm">Contact</router-link>
          </nav>
        </div>

        <!-- Customer Service -->
        <div class="space-y-3">
          <h4 class="text-base font-normal text-gold mb-4">Customer Service</h4>
          <nav class="flex flex-col gap-2">
            <a href="#" class="text-cream/60 hover:text-gold transition-colors text-sm">Shipping & Returns</a>
            <a href="#" class="text-cream/60 hover:text-gold transition-colors text-sm">FAQ</a>
            <a href="#" class="text-cream/60 hover:text-gold transition-colors text-sm">Privacy Policy</a>
          </nav>
        </div>

        <!-- Newsletter -->
        <div class="space-y-3">
          <h4 class="text-base font-normal text-gold mb-4">Stay Connected</h4>
          <p class="text-cream/60 text-sm leading-relaxed mb-4">
            Subscribe to receive exclusive offers and updates
          </p>
          <form @submit.prevent="handleSubmit" class="space-y-3">
            <div class="relative">
              <input
                v-model="email"
                type="email"
                placeholder="Your email address"
                :disabled="isSubmitting"
                class="w-full bg-dark border border-gold/20 rounded-full px-4 py-2.5 text-cream text-sm focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
                :class="{ 'border-red-500': emailError }"
              />
              <p v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</p>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gold hover:bg-champagne text-dark font-medium text-sm py-2.5 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
          <div class="flex gap-4 mt-6">
            <a href="https://instagram.com" target="_blank" class="text-gold hover:text-champagne transition-colors text-lg">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" class="text-gold hover:text-champagne transition-colors text-lg">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-gold hover:text-champagne transition-colors text-lg">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="mailto:contact@velixier.com" class="text-gold hover:text-champagne transition-colors text-lg">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-gold/10">
        <p class="text-center text-cream/40 text-sm">
          © 2025 VELIXIER. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '@/stores/cart'

const { showNotification } = useCart()
const email = ref('')
const emailError = ref('')
const isSubmitting = ref(false)

const validateEmail = (emailValue) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(emailValue)
}

const handleSubmit = async () => {
  // Reset error
  emailError.value = ''

  // Validate email
  if (!email.value) {
    emailError.value = 'Email is required'
    return
  }

  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return
  }

  // Simulate submission
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    showNotification('Successfully subscribed to newsletter!', 'success')
    email.value = '' // Clear form
  } catch (error) {
    showNotification('Failed to subscribe. Please try again.', 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>