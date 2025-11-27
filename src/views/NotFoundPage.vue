<template>
  <div class="min-h-screen flex items-center justify-center bg-dark px-4">
    <div class="text-center max-w-2xl mx-auto">
      <!-- 404 Icon -->
      <div class="mb-8 animate-bounce">
        <div class="text-9xl font-serif text-gold mb-4">404</div>
        <div class="text-6xl mb-6">🔍</div>
      </div>

      <!-- Message -->
      <h1 class="text-4xl md:text-5xl font-serif text-gold mb-6">Page Not Found</h1>
      <p class="text-cream/80 text-lg mb-8 leading-relaxed">
        Oops! The fragrance you're looking for seems to have evaporated. 
        The page you requested doesn't exist or has been moved.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link 
          to="/"
          class="bg-champagne hover:bg-gold text-dark px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
        >
          Back to Home
        </router-link>
        <router-link 
          to="/products"
          class="bg-dark-lighter hover:bg-dark border border-gold/30 hover:border-gold text-gold px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
        >
          Browse Products
        </router-link>
      </div>

      <!-- Popular Links -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <p class="text-cream/60 text-sm mb-4">You might be looking for:</p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/about" class="text-gold hover:text-champagne transition-colors text-sm">About Us</router-link>
          <router-link to="/contact" class="text-gold hover:text-champagne transition-colors text-sm">Contact</router-link>
          <router-link to="/rating" class="text-gold hover:text-champagne transition-colors text-sm">Reviews</router-link>
          <router-link to="/cart" class="text-gold hover:text-champagne transition-colors text-sm">Shopping Cart</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Set page title
  document.title = '404 - Page Not Found | Velixier'
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
