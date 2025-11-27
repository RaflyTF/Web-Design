<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="py-20 px-6 bg-black min-h-screen">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-serif font-normal text-gold mb-12 text-center">Shopping Cart</h1>
        
        <!-- Empty Cart State -->
        <div v-if="cartItems.length === 0" class="text-center py-20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gold/30 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 class="text-2xl font-serif text-gold mb-4">Your cart is empty</h2>
          <p class="text-cream/70 mb-8">Discover our exquisite collection of luxury fragrances</p>
          <router-link 
            to="/products"
            class="inline-block bg-champagne hover:bg-gold text-dark px-12 py-4 rounded-full font-normal transition-all duration-300 hover:scale-105"
          >
            Start Shopping
          </router-link>
        </div>

        <!-- Cart Items -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cart Items List -->
          <div class="lg:col-span-2 space-y-4">
            <TransitionGroup name="cart-item">
              <div 
                v-for="item in cartItems" 
                :key="item.id"
                class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30 hover:border-gold/20 transition-all duration-300"
              >
                <div class="flex items-center gap-6">
                  <!-- Product Image -->
                  <div class="w-24 h-24 flex-shrink-0 bg-black rounded-xl overflow-hidden p-2">
                    <img 
                      :src="item.image" 
                      :alt="item.name" 
                      class="w-full h-full object-contain"
                    />
                  </div>

                  <!-- Product Info -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-serif text-gold mb-1 truncate">{{ item.name }}</h3>
                    <p class="text-cream/70 text-sm mb-2">{{ item.price }}</p>
                    
                    <!-- Quantity Controls -->
                    <div class="flex items-center gap-3">
                      <button 
                        @click="updateQuantity(item.id, item.quantity - 1)"
                        class="w-8 h-8 bg-dark border border-gold/20 rounded-lg text-gold hover:bg-gold/10 transition-colors flex items-center justify-center"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <span class="text-cream w-8 text-center font-medium">{{ item.quantity }}</span>
                      <button 
                        @click="updateQuantity(item.id, item.quantity + 1)"
                        class="w-8 h-8 bg-dark border border-gold/20 rounded-lg text-gold hover:bg-gold/10 transition-colors flex items-center justify-center"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Item Total & Remove -->
                  <div class="flex flex-col items-end gap-4">
                    <p class="text-lg font-medium text-cream">
                      {{ formatPrice((item.priceNum || parseFloat(item.price.replace(/\D/g, ''))) * item.quantity) }}
                    </p>
                    <button 
                      @click="removeFromCart(item.id)"
                      class="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-colors"
                      title="Remove from cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </TransitionGroup>

            <!-- Clear Cart Button -->
            <button 
              @click="handleClearCart"
              class="w-full bg-dark-lighter hover:bg-dark border border-red-400/30 text-red-400 py-3 rounded-xl transition-all duration-300 hover:border-red-400/50"
            >
              Clear Cart
            </button>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-dark-lighter p-8 rounded-2xl border border-gray-800/30 sticky top-24">
              <h3 class="text-2xl font-serif text-gold mb-6">Order Summary</h3>
              
              <div class="space-y-3 mb-6">
                <div class="flex justify-between text-cream/80">
                  <span>Subtotal ({{ cartCount }} items)</span>
                  <span>{{ formatPrice(cartTotal) }}</span>
                </div>
                <div class="flex justify-between text-cream/80">
                  <span>Shipping</span>
                  <span>{{ formatPrice(50000) }}</span>
                </div>
                <div class="flex justify-between text-cream/80">
                  <span>Tax (10%)</span>
                  <span>{{ formatPrice(cartTotal * 0.1) }}</span>
                </div>
                <div class="border-t border-gray-800 pt-3 flex justify-between text-xl font-normal text-gold">
                  <span>Total</span>
                  <span>{{ formatPrice(cartTotal + 50000 + (cartTotal * 0.1)) }}</span>
                </div>
              </div>

              <router-link 
                to="/checkout"
                class="block w-full text-center bg-champagne hover:bg-gold text-dark py-4 rounded-2xl font-medium text-base mb-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
              >
                Proceed to Checkout
              </router-link>

              <router-link 
                to="/products"
                class="block w-full text-center bg-dark border border-gold/20 hover:border-gold/50 text-gold py-4 rounded-2xl font-normal text-base transition-all duration-300"
              >
                Continue Shopping
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { useCart } from '../stores/cart'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart()

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const handleClearCart = () => {
  if (confirm('Are you sure you want to clear your cart?')) {
    clearCart()
  }
}
</script>

<style scoped>
.cart-item-enter-active,
.cart-item-leave-active {
  transition: all 0.3s ease;
}

.cart-item-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.cart-item-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.cart-item-move {
  transition: transform 0.3s ease;
}
</style>
