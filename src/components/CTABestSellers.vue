<template>
  <section class="py-24 px-6 bg-black reveal-section">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-serif font-normal text-gold mb-4">
          Best Sellers
        </h2>
        <p class="text-cream/70 text-base">
          Discover our most beloved fragrances, chosen by connoisseurs worldwide
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="bg-dark-lighter rounded-3xl overflow-hidden border border-gray-800/30 hover:border-gold/30 transition-all duration-300 group relative"
        >
          <!-- Badge -->
          <div class="absolute top-4 left-4 z-10 bg-gold text-dark px-4 py-1.5 rounded-full text-xs font-medium">
            {{ product.badge }}
          </div>

          <!-- Product Image -->
          <div class="relative h-[420px] overflow-hidden bg-black flex items-center justify-center p-12">
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            <!-- Quick View Overlay -->
            <div class="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                @click="openQuickView(product)"
                class="bg-gold hover:bg-champagne text-dark px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              >
                Quick View
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-8 border-t border-gray-800/30">
            <h3 class="text-2xl font-serif font-normal text-gold mb-2">
              {{ product.name }}
            </h3>
            
            <!-- Rating Stars -->
            <div class="flex items-center gap-1 mb-3">
              <svg v-for="i in 5" :key="i" class="h-4 w-4" :class="i <= product.rating ? 'text-gold' : 'text-gray-600'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-cream/60 text-sm ml-1">({{ product.reviews }})</span>
            </div>
            
            <p class="text-xl font-normal text-cream mb-6">
              {{ product.price }}
            </p>
            <button 
              @click="addToCart(product)"
              class="w-full bg-champagne hover:bg-gold text-dark py-3.5 rounded-2xl font-normal text-base flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95"
            >
              <span>Add to cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick View Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="quickViewProduct" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          @click="closeQuickView"
        >
          <div 
            class="bg-dark-lighter rounded-3xl max-w-4xl w-full overflow-hidden border border-gold/30"
            @click.stop
          >
            <div class="grid grid-cols-1 md:grid-cols-2">
              <!-- Product Image -->
              <div class="bg-black p-12 flex items-center justify-center">
                <img 
                  :src="quickViewProduct.image" 
                  :alt="quickViewProduct.name" 
                  class="w-full h-full max-h-[400px] object-contain"
                />
              </div>

              <!-- Product Details -->
              <div class="p-8 md:p-12">
                <div class="flex items-start justify-between mb-4">
                  <div class="bg-gold text-dark px-4 py-1.5 rounded-full text-xs font-medium">
                    {{ quickViewProduct.badge }}
                  </div>
                  <button 
                    @click="closeQuickView"
                    class="text-cream/60 hover:text-gold transition-colors"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <h3 class="text-3xl font-serif font-normal text-gold mb-3">
                  {{ quickViewProduct.name }}
                </h3>

                <!-- Rating -->
                <div class="flex items-center gap-1 mb-4">
                  <svg v-for="i in 5" :key="i" class="h-5 w-5" :class="i <= quickViewProduct.rating ? 'text-gold' : 'text-gray-600'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-cream/60 text-sm ml-1">({{ quickViewProduct.reviews }} reviews)</span>
                </div>

                <p class="text-2xl font-normal text-cream mb-6">
                  {{ quickViewProduct.price }}
                </p>

                <p class="text-cream/70 leading-relaxed mb-8 text-sm">
                  Experience the luxurious essence of {{ quickViewProduct.name }}. This exquisite fragrance captures the perfect balance of elegance and sophistication, making it ideal for any occasion.
                </p>

                <button 
                  @click="addToCartFromQuickView"
                  class="w-full bg-champagne hover:bg-gold text-dark py-4 rounded-2xl font-medium text-base flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95"
                >
                  <span>Add to Cart</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '../stores/cart'
import JPGLeMale from '../assets/JPGLeMale.png'
import KingSCE from '../assets/KingSCE.png'
import CalvingKlein from '../assets/CalvingKlein.png'
import SharafBlend from '../assets/SharafBlend.png'

const { addToCart } = useCart()
const quickViewProduct = ref(null)

const openQuickView = (product) => {
  quickViewProduct.value = product
  document.body.style.overflow = 'hidden'
}

const closeQuickView = () => {
  quickViewProduct.value = null
  document.body.style.overflow = ''
}

const addToCartFromQuickView = () => {
  addToCart(quickViewProduct.value)
  closeQuickView()
}

const products = [
  {
    id: 1,
    name: 'JPG Le Male EDP',
    price: 'Rp. 2.280.000',
    priceNum: 2280000,
    image: JPGLeMale,
    rating: 5,
    reviews: 342,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Supremacy Collection Edition',
    price: 'Rp. 750.000',
    priceNum: 750000,
    image: KingSCE,
    rating: 5,
    reviews: 289,
    badge: 'Popular'
  },
  {
    id: 3,
    name: 'Calvin Klein CK One',
    price: 'Rp. 1.250.000',
    priceNum: 1250000,
    image: CalvingKlein,
    rating: 4,
    reviews: 156,
    badge: 'Trending'
  },
  {
    id: 4,
    name: 'Sharaf Blend Intense',
    price: 'Rp. 980.000',
    priceNum: 980000,
    image: SharafBlend,
    rating: 5,
    reviews: 203,
    badge: 'New Arrival'
  }
]
</script>
