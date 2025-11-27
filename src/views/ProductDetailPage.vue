<template>
  <div class="min-h-screen bg-black">
    <Navbar />
    
    <main class="py-20 px-6 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Back Button -->
        <button 
          @click="$router.back()"
          class="mb-8 flex items-center gap-2 text-gold hover:text-champagne transition-colors"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Back to Products</span>
        </button>

        <!-- Loading State -->
        <div v-if="!product" class="text-center py-20">
          <LoadingSpinner />
          <p class="text-cream/60 mt-4">Loading product details...</p>
        </div>

        <!-- Product Not Found -->
        <div v-else-if="product === 'not-found'" class="text-center py-20">
          <i class="fas fa-exclamation-circle text-6xl text-gold/30 mb-6"></i>
          <h2 class="text-3xl font-serif text-gold mb-4">Product Not Found</h2>
          <p class="text-cream/70 mb-8">The product you're looking for doesn't exist.</p>
          <router-link 
            to="/products"
            class="inline-block bg-gold hover:bg-champagne text-dark px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Browse All Products
          </router-link>
        </div>

        <!-- Product Detail -->
        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Product Image -->
          <div class="bg-dark-lighter rounded-3xl p-8 border border-gray-800/30 sticky top-24 self-start">
            <div class="relative">
              <!-- Badge -->
              <div class="absolute top-0 left-0 z-10 bg-gold text-dark px-4 py-2 rounded-full text-sm font-medium">
                <i class="fas fa-award mr-2"></i>{{ product.badge }}
              </div>

              <!-- Image -->
              <div class="flex items-center justify-center h-96 lg:h-[500px]">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <!-- Image Gallery Thumbnails (Optional Enhancement) -->
            <div class="flex gap-4 mt-6 justify-center">
              <div 
                v-for="i in 3" 
                :key="i"
                class="w-20 h-20 bg-black rounded-xl border border-gold/20 flex items-center justify-center cursor-pointer hover:border-gold/50 transition-colors"
              >
                <img :src="product.image" :alt="`${product.name} view ${i}`" class="max-w-full max-h-full object-contain p-2" />
              </div>
            </div>
          </div>

          <!-- Product Info -->
          <div>
            <!-- Title & Category -->
            <div class="mb-6">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-champagne text-sm uppercase tracking-wider font-medium">
                  <i class="fas fa-tag mr-2"></i>{{ product.category }}
                </span>
              </div>
              <h1 class="text-4xl md:text-5xl font-serif text-gold mb-4">{{ product.name }}</h1>
              
              <!-- Rating -->
              <div class="flex items-center gap-3 mb-4">
                <div class="flex items-center gap-1">
                  <i v-for="i in 5" :key="i" class="fas fa-star text-sm" :class="i <= product.rating ? 'text-gold' : 'text-gray-600'"></i>
                </div>
                <span class="text-cream/70 text-sm">{{ product.rating }}.0 ({{ product.reviews }} reviews)</span>
              </div>
            </div>

            <!-- Price -->
            <div class="mb-8 p-6 bg-dark-lighter rounded-2xl border border-gold/20">
              <div class="flex items-center justify-between">
                <span class="text-cream/70 text-sm uppercase tracking-wider">Price</span>
                <span class="text-3xl font-serif text-gold">{{ product.price }}</span>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h3 class="text-xl font-serif text-gold mb-3 flex items-center gap-2">
                <i class="fas fa-info-circle"></i>
                Description
              </h3>
              <p class="text-cream/70 leading-relaxed mb-4">{{ product.description }}</p>
              <p class="text-cream/60 text-sm">
                This exquisite fragrance is crafted with the finest ingredients, designed to leave a lasting impression. 
                Perfect for both day and evening wear, it combines sophistication with timeless elegance.
              </p>
            </div>

            <!-- Product Features -->
            <div class="mb-8">
              <h3 class="text-xl font-serif text-gold mb-4 flex items-center gap-2">
                <i class="fas fa-list-check"></i>
                Key Features
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-dark-lighter p-4 rounded-xl border border-gray-800/30">
                  <i class="fas fa-flask text-gold text-2xl mb-2"></i>
                  <p class="text-cream text-sm font-medium">100ml Premium</p>
                  <p class="text-cream/60 text-xs">Eau de Parfum</p>
                </div>
                <div class="bg-dark-lighter p-4 rounded-xl border border-gray-800/30">
                  <i class="fas fa-clock text-gold text-2xl mb-2"></i>
                  <p class="text-cream text-sm font-medium">Long Lasting</p>
                  <p class="text-cream/60 text-xs">8-12 Hours</p>
                </div>
                <div class="bg-dark-lighter p-4 rounded-xl border border-gray-800/30">
                  <i class="fas fa-leaf text-gold text-2xl mb-2"></i>
                  <p class="text-cream text-sm font-medium">Natural</p>
                  <p class="text-cream/60 text-xs">Organic Ingredients</p>
                </div>
                <div class="bg-dark-lighter p-4 rounded-xl border border-gray-800/30">
                  <i class="fas fa-certificate text-gold text-2xl mb-2"></i>
                  <p class="text-cream text-sm font-medium">Authentic</p>
                  <p class="text-cream/60 text-xs">100% Original</p>
                </div>
              </div>
            </div>

            <!-- Quantity Selector -->
            <div class="mb-8">
              <label class="text-cream text-sm mb-3 block flex items-center gap-2">
                <i class="fas fa-cart-plus"></i>
                Quantity
              </label>
              <div class="flex items-center gap-4">
                <div class="flex items-center border border-gold/20 rounded-full overflow-hidden">
                  <button 
                    @click="decreaseQuantity"
                    class="px-6 py-3 bg-dark-lighter hover:bg-gold hover:text-dark text-cream transition-colors"
                    :disabled="quantity <= 1"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="px-8 py-3 bg-dark text-cream font-medium">{{ quantity }}</span>
                  <button 
                    @click="increaseQuantity"
                    class="px-6 py-3 bg-dark-lighter hover:bg-gold hover:text-dark text-cream transition-colors"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <span class="text-cream/60 text-sm">
                  <i class="fas fa-box mr-2"></i>In Stock
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                @click="handleAddToCart"
                class="flex-1 bg-gold hover:bg-champagne text-dark py-4 rounded-full font-medium text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:scale-105 active:scale-95"
              >
                <i class="fas fa-shopping-cart"></i>
                <span>Add to Cart</span>
              </button>
              <button 
                class="sm:w-16 bg-dark-lighter hover:bg-gold hover:text-dark text-gold border border-gold/20 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <i class="fas fa-heart"></i>
              </button>
            </div>

            <!-- Additional Info -->
            <div class="border-t border-gray-800/30 pt-8">
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <i class="fas fa-truck text-gold mt-1"></i>
                  <div>
                    <p class="text-cream font-medium">Free Shipping</p>
                    <p class="text-cream/60 text-sm">On orders over Rp 1.000.000</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-shield-alt text-gold mt-1"></i>
                  <div>
                    <p class="text-cream font-medium">Authentic Guarantee</p>
                    <p class="text-cream/60 text-sm">100% original products</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i class="fas fa-undo text-gold mt-1"></i>
                  <div>
                    <p class="text-cream font-medium">Easy Returns</p>
                    <p class="text-cream/60 text-sm">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products -->
        <div v-if="product && product !== 'not-found'" class="mt-20">
          <h2 class="text-3xl font-serif text-gold mb-8 text-center flex items-center justify-center gap-3">
            <i class="fas fa-sparkles"></i>
            You May Also Like
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div 
              v-for="relatedProduct in relatedProducts" 
              :key="relatedProduct.id"
              class="bg-dark-lighter rounded-2xl overflow-hidden border border-gray-800/30 hover:border-gold/30 transition-all duration-300 group cursor-pointer"
              @click="navigateToProduct(relatedProduct.id)"
            >
              <div class="h-48 flex items-center justify-center bg-black p-4">
                <img 
                  :src="relatedProduct.image" 
                  :alt="relatedProduct.name"
                  class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-serif text-gold mb-2">{{ relatedProduct.name }}</h3>
                <div class="flex items-center justify-between">
                  <span class="text-champagne font-medium">{{ relatedProduct.price }}</span>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-star text-gold text-xs"></i>
                    <span class="text-cream/60 text-xs">{{ relatedProduct.rating }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useCart } from '../stores/cart'

// Import all product images
import JPGLeMale from '../assets/JPGLeMale.png'
import KingSCE from '../assets/KingSCE.png'
import CalvingKlein from '../assets/CalvingKlein.png'
import SharafBlend from '../assets/SharafBlend.png'
import ChanelBleu from '../assets/Chanel Bleu de Chanel.jpg'
import CreedAventus from '../assets/Creed Aventus.webp'
import EilishPerfume from '../assets/Eilish Perfume by Billie Eilish.webp'
import FrenchAvenue from '../assets/french avenue.jpg'
import GiorgioArmani from '../assets/Giorgio Armani Acqua di Giò Profumo.webp'
import GucciBloom from '../assets/Gucci Bloom.webp'
import LaVieBelle from '../assets/La Vie Est Belle by Lancôme.webp'
import TomFordNoir from '../assets/Tom Ford Noir Extreme.webp'

const route = useRoute()
const router = useRouter()
const { addToCart, showNotification } = useCart()

const quantity = ref(1)
const product = ref(null)

// All products data (same as ProductsPage)
const allProducts = [
  {
    id: 1,
    name: 'JPG Le Male EDP',
    description: 'A bold and captivating masculine scent with notes of vanilla, mint, and lavender. Perfect for the confident modern man.',
    price: 'Rp. 2.280.000',
    priceNum: 2280000,
    image: JPGLeMale,
    rating: 5,
    reviews: 342,
    badge: 'Best Seller',
    category: 'men'
  },
  {
    id: 2,
    name: 'Supremacy Collection Edition',
    description: 'Elegant and sophisticated with woody undertones and hints of bergamot. A signature scent for special occasions.',
    price: 'Rp. 750.000',
    priceNum: 750000,
    image: KingSCE,
    rating: 5,
    reviews: 289,
    badge: 'Popular',
    category: 'men'
  },
  {
    id: 3,
    name: 'Calvin Klein CK One',
    description: 'Fresh and clean unisex fragrance with citrus and green tea notes. Timeless and versatile for everyday wear.',
    price: 'Rp. 1.250.000',
    priceNum: 1250000,
    image: CalvingKlein,
    rating: 4,
    reviews: 156,
    badge: 'Trending',
    category: 'unisex'
  },
  {
    id: 4,
    name: 'Sharaf Blend Intense',
    description: 'Rich oriental fragrance with warm spices and exotic oud. A luxurious choice for evening affairs.',
    price: 'Rp. 980.000',
    priceNum: 980000,
    image: SharafBlend,
    rating: 5,
    reviews: 203,
    badge: 'New Arrival',
    category: 'unisex'
  },
  {
    id: 5,
    name: 'Chanel Bleu de Chanel',
    description: 'Sophisticated woody aromatic with citrus freshness and cedar depth. The epitome of masculine elegance.',
    price: 'Rp. 2.890.000',
    priceNum: 2890000,
    image: ChanelBleu,
    rating: 5,
    reviews: 521,
    badge: 'Best Seller',
    category: 'men'
  },
  {
    id: 6,
    name: 'Creed Aventus',
    description: 'Legendary fragrance with pineapple, birch, and musk. The ultimate power scent for ambitious individuals.',
    price: 'Rp. 4.500.000',
    priceNum: 4500000,
    image: CreedAventus,
    rating: 5,
    reviews: 892,
    badge: 'Luxury',
    category: 'men'
  },
  {
    id: 7,
    name: 'Eilish by Billie Eilish',
    description: 'Warm and inviting with vanilla, amber, and cocoa. A modern gourmand fragrance for the bold and creative.',
    price: 'Rp. 1.180.000',
    priceNum: 1180000,
    image: EilishPerfume,
    rating: 4,
    reviews: 267,
    badge: 'Trending',
    category: 'women'
  },
  {
    id: 8,
    name: 'French Avenue Elegance',
    description: 'Parisian-inspired floral bouquet with rose, jasmine, and white musk. Pure sophistication in a bottle.',
    price: 'Rp. 1.850.000',
    priceNum: 1850000,
    image: FrenchAvenue,
    rating: 5,
    reviews: 456,
    badge: 'Popular',
    category: 'women'
  },
  {
    id: 9,
    name: 'Giorgio Armani Acqua di Giò Profumo',
    description: 'Aquatic aromatic with marine notes and incense. Fresh yet intense, perfect for the modern gentleman.',
    price: 'Rp. 2.650.000',
    priceNum: 2650000,
    image: GiorgioArmani,
    rating: 5,
    reviews: 634,
    badge: 'Best Seller',
    category: 'men'
  },
  {
    id: 10,
    name: 'Gucci Bloom',
    description: 'White floral garden with tuberose, jasmine, and rangoon creeper. Celebrates femininity and authenticity.',
    price: 'Rp. 2.450.000',
    priceNum: 2450000,
    image: GucciBloom,
    rating: 5,
    reviews: 523,
    badge: 'Luxury',
    category: 'women'
  },
  {
    id: 11,
    name: 'La Vie Est Belle by Lancôme',
    description: 'Sweet iris, patchouli, and gourmand notes. Embodies happiness and the beauty of life.',
    price: 'Rp. 2.780.000',
    priceNum: 2780000,
    image: LaVieBelle,
    rating: 5,
    reviews: 789,
    badge: 'Best Seller',
    category: 'women'
  },
  {
    id: 12,
    name: 'Tom Ford Noir Extreme',
    description: 'Rich oriental with cardamom, vanilla, and amber. Seductive and refined for evening sophistication.',
    price: 'Rp. 3.200.000',
    priceNum: 3200000,
    image: TomFordNoir,
    rating: 5,
    reviews: 412,
    badge: 'Luxury',
    category: 'men'
  }
]

// Related products (exclude current product, show 4 random)
const relatedProducts = computed(() => {
  if (!product.value || product.value === 'not-found') return []
  
  const filtered = allProducts
    .filter(p => p.id !== product.value.id && p.category === product.value.category)
    .slice(0, 4)
  
  // If less than 4, fill with other products
  if (filtered.length < 4) {
    const remaining = allProducts
      .filter(p => p.id !== product.value.id && !filtered.includes(p))
      .slice(0, 4 - filtered.length)
    return [...filtered, ...remaining]
  }
  
  return filtered
})

// Load product data
const loadProduct = () => {
  const productId = parseInt(route.params.id)
  const foundProduct = allProducts.find(p => p.id === productId)
  
  if (foundProduct) {
    product.value = foundProduct
    // Update page title
    document.title = `${foundProduct.name} - Velixier`
  } else {
    product.value = 'not-found'
    document.title = 'Product Not Found - Velixier'
  }
}

// Quantity controls
const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// Add to cart with quantity
const handleAddToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    addToCart(product.value)
  }
  showNotification(`Added ${quantity.value}x ${product.value.name} to cart!`, 'success')
  quantity.value = 1 // Reset quantity
}

// Navigate to another product
const navigateToProduct = (productId) => {
  router.push(`/products/${productId}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Watch route changes
watch(() => route.params.id, () => {
  if (route.name === 'product-detail') {
    loadProduct()
    quantity.value = 1
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

onMounted(() => {
  loadProduct()
})
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #d4af37;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c9a961;
}
</style>
