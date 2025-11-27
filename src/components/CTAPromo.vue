<template>
  <section class="py-24 px-6 bg-black reveal-section">
    <div class="max-w-7xl mx-auto">
      <!-- Promo Banner -->
      <div class="bg-linear-to-r from-champagne via-gold to-champagne rounded-3xl p-12 md:p-16 text-center">
        <h3 class="text-3xl md:text-5xl font-serif font-normal text-dark mb-5">
          Exclusive Holiday Collection
        </h3>
        <p class="text-base md:text-lg text-dark/80 mb-8 max-w-3xl mx-auto">
          Limited edition fragrances crafted for special moments. Available for a limited time only.
        </p>
        <div class="inline-block bg-dark px-8 py-3 rounded-full mb-6">
          <p class="text-sm font-normal text-gold tracking-wide">
            20% Off - Use Code: <strong>LUXURY20</strong>
          </p>
        </div>
        <div>
          <button
            @click="copyPromoCode"
            class="inline-flex items-center gap-2 bg-dark hover:bg-dark/90 text-gold border border-gold/30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <svg 
              v-if="!copied" 
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <svg 
              v-else 
              class="w-5 h-5 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{{ copied ? 'Copied!' : 'Copy Promo Code' }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '@/stores/cart'

const { showNotification } = useCart()
const copied = ref(false)

const copyPromoCode = async () => {
  try {
    await navigator.clipboard.writeText('LUXURY20')
    copied.value = true
    showNotification('Promo code copied to clipboard!', 'success')
    
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    showNotification('Failed to copy promo code', 'error')
  }
}
</script>
