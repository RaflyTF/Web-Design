<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isCartOpen"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        @click="toggleCart"
      ></div>
    </Transition>

    <!-- Cart Sidebar -->
    <Transition name="slide-right">
      <div
        v-if="isCartOpen"
        class="fixed right-0 top-0 h-full w-full md:w-[450px] bg-dark-lighter border-l border-gold/20 z-50 flex flex-col shadow-2xl"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gold/20">
          <h2 class="text-2xl font-serif text-gold">Shopping Cart</h2>
          <button
            @click="toggleCart"
            class="text-cream/60 hover:text-gold transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="cartItems.length === 0" class="text-center py-12">
            <svg class="w-24 h-24 mx-auto text-cream/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p class="text-cream/60 text-lg mb-4">Your cart is empty</p>
            <button
              @click="toggleCart"
              class="inline-block bg-champagne hover:bg-gold text-dark px-8 py-3 rounded-full font-normal transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>

          <div v-else class="space-y-4">
            <TransitionGroup name="cart-item">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="bg-dark rounded-2xl p-4 border border-gray-800/50 hover:border-gold/30 transition-all duration-300"
              >
                <div class="flex gap-4">
                  <!-- Product Image -->
                  <div class="w-20 h-20 bg-black rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img :src="item.image" :alt="item.name" class="max-w-full max-h-full object-contain" />
                  </div>

                  <!-- Product Info -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-gold font-serif text-sm mb-1 truncate">{{ item.name }}</h3>
                    <p class="text-cream text-base font-normal mb-3">{{ item.price }}</p>

                    <!-- Quantity Controls -->
                    <div class="flex items-center gap-3">
                      <button
                        @click="updateQuantity(item.id, item.quantity - 1)"
                        class="w-8 h-8 rounded-lg bg-dark-lighter border border-gold/20 text-gold hover:bg-gold hover:text-dark transition-all duration-200 flex items-center justify-center"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                      </button>
                      
                      <span class="text-cream font-medium min-w-[2ch] text-center">{{ item.quantity }}</span>
                      
                      <button
                        @click="updateQuantity(item.id, item.quantity + 1)"
                        class="w-8 h-8 rounded-lg bg-dark-lighter border border-gold/20 text-gold hover:bg-gold hover:text-dark transition-all duration-200 flex items-center justify-center"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>

                      <button
                        @click="removeFromCart(item.id)"
                        class="ml-auto text-red-400 hover:text-red-300 transition-colors"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartItems.length > 0" class="border-t border-gold/20 p-6 space-y-4">
          <!-- Subtotal -->
          <div class="flex items-center justify-between text-lg">
            <span class="text-cream/80">Subtotal:</span>
            <span class="text-gold font-serif text-2xl">{{ formatPrice(cartTotal) }}</span>
          </div>

          <!-- Buttons -->
          <div class="space-y-3">
            <router-link
              to="/cart"
              @click="toggleCart"
              class="block w-full bg-champagne hover:bg-gold text-dark text-center py-4 rounded-2xl font-normal transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              View Cart
            </router-link>
            <button
              @click="clearCart"
              class="w-full border border-red-400/50 text-red-400 hover:bg-red-400/10 py-3 rounded-2xl font-normal transition-all duration-300"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useCart } from '../stores/cart'

const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart()

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.cart-item-enter-active,
.cart-item-leave-active {
  transition: all 0.3s ease;
}

.cart-item-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.cart-item-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.cart-item-move {
  transition: transform 0.3s ease;
}
</style>
