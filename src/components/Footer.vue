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
            <a href="#" class="text-gold hover:text-champagne transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="text-gold hover:text-champagne transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" class="text-gold hover:text-champagne transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gold hover:text-champagne transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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