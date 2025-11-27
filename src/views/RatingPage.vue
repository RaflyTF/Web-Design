<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="py-20 px-4 bg-dark min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="text-5xl md:text-6xl font-serif font-normal text-gold mb-6">Customer Reviews</h1>
          <p class="text-cream/80 text-xl max-w-2xl mx-auto">
            See what our customers are saying about Velixier fragrances
          </p>
        </div>

        <!-- Rating Summary -->
        <div class="bg-dark-lighter p-8 rounded-3xl border border-gray-800/30 mb-12">
          <div class="flex flex-col md:flex-row items-center justify-center gap-8">
            <div class="text-center">
              <div class="text-6xl font-serif font-normal text-gold mb-2">{{ averageRating.toFixed(1) }}</div>
              <div class="flex justify-center space-x-1 mb-2">
                <svg v-for="i in 5" :key="i" class="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="text-cream/70">Based on {{ totalReviews }} reviews</p>
            </div>
            
            <div class="w-full max-w-md space-y-2">
              <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center gap-3">
                <button
                  @click="filterByStar(star)"
                  class="text-gold w-8 hover:text-champagne transition-colors cursor-pointer"
                  :class="{ 'text-champagne font-bold': selectedRating === star }"
                >
                  {{ star }}★
                </button>
                <div class="flex-1 bg-dark h-3 rounded-full overflow-hidden cursor-pointer" @click="filterByStar(star)">
                  <div class="bg-gold h-full rounded-full transition-all duration-300" :style="{ width: `${getRatingPercentage(star)}%` }"></div>
                </div>
                <span class="text-cream/60 w-16 text-right">{{ getRatingCount(star) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Write Review Button -->
        <div class="text-center mb-8">
          <button 
            @click="openWriteReview"
            class="bg-champagne hover:bg-gold text-dark px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
          >
            ✍️ Write a Review
          </button>
        </div>

        <!-- Filter & Sort Controls -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <!-- Filter by Rating -->
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-cream/70 text-sm">Filter:</span>
            <button
              @click="selectedRating = null"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="selectedRating === null ? 'bg-gold text-dark' : 'bg-dark-lighter text-cream hover:bg-dark border border-gray-800'"
            >
              All ({{ allReviews.length }})
            </button>
            <button
              v-for="star in [5, 4, 3, 2, 1]"
              :key="star"
              @click="filterByStar(star)"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="selectedRating === star ? 'bg-gold text-dark' : 'bg-dark-lighter text-cream hover:bg-dark border border-gray-800'"
            >
              {{ star }}★ ({{ getRatingCount(star) }})
            </button>
          </div>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-2">
            <span class="text-cream/70 text-sm">Sort by:</span>
            <select
              v-model="sortBy"
              class="bg-dark-lighter text-cream px-4 py-2 rounded-xl border border-gray-800 focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="newest">Most Recent</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </div>

        <!-- Results Count -->
        <div class="text-cream/60 mb-6">
          Showing {{ displayedReviews.length }} of {{ filteredAndSortedReviews.length }} reviews
        </div>

        <!-- Reviews Grid -->
        <TransitionGroup name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div 
            v-for="(review, index) in displayedReviews" 
            :key="review.id"
            class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30 hover:border-gold/50 transition-all duration-300 reveal-section"
            :class="{ 'revealed': isRevealed }"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div 
                  class="w-12 h-12 rounded-full flex items-center justify-center text-dark font-bold text-lg"
                  :style="{ background: `linear-gradient(135deg, #d4af37 0%, #c9a961 100%)` }"
                >
                  {{ review.author.charAt(0) }}
                </div>
                <div>
                  <h4 class="text-gold font-medium">{{ review.author }}</h4>
                  <p class="text-cream/60 text-sm">{{ review.date }}</p>
                </div>
              </div>
              <div class="flex space-x-1">
                <svg v-for="i in review.rating" :key="i" class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg v-for="i in (5 - review.rating)" :key="'empty-' + i" class="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            <p class="text-cream/80 leading-relaxed mb-4">{{ review.comment }}</p>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-800">
              <p class="text-gold/80 text-sm font-medium">{{ review.product }}</p>
              
              <!-- Helpful Button -->
              <button
                @click="toggleHelpful(review.id)"
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300"
                :class="review.isHelpful ? 'bg-gold/20 text-gold' : 'bg-dark hover:bg-dark-lighter text-cream/70 hover:text-cream'"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span class="text-xs font-medium">{{ review.helpful }}</span>
              </button>
            </div>
          </div>
        </TransitionGroup>

        <!-- Load More Button -->
        <div v-if="hasMore" class="text-center">
          <button
            @click="loadMore"
            class="bg-dark-lighter hover:bg-dark border border-gold/30 hover:border-gold/50 text-gold px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Load More Reviews
          </button>
        </div>

        <!-- No Reviews Message -->
        <div v-if="filteredAndSortedReviews.length === 0" class="text-center py-16">
          <div class="text-6xl mb-4">📝</div>
          <p class="text-cream/70 text-lg mb-2">No reviews found for this filter</p>
          <button
            @click="selectedRating = null"
            class="text-gold hover:text-champagne transition-colors"
          >
            Clear filters
          </button>
        </div>
      </div>
    </main>

    <Footer />

    <!-- Write Review Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="showWriteReview"
          class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          @click.self="closeWriteReview"
        >
          <div class="bg-dark-lighter rounded-3xl border border-gray-800/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-dark-lighter border-b border-gray-800 p-6 flex items-center justify-between">
              <h2 class="text-3xl font-serif text-gold">Write a Review</h2>
              <button 
                @click="closeWriteReview"
                class="text-cream/70 hover:text-cream transition-colors"
              >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form @submit.prevent="submitReview" class="p-6 space-y-6">
              <!-- Rating Stars -->
              <div>
                <label class="block text-gold mb-3 font-medium">Your Rating *</label>
                <div class="flex gap-2">
                  <button
                    v-for="star in 5"
                    :key="star"
                    type="button"
                    @click="newReview.rating = star"
                    @mouseenter="hoverRating = star"
                    @mouseleave="hoverRating = 0"
                    class="transition-transform duration-200 hover:scale-125"
                  >
                    <svg 
                      class="w-10 h-10 transition-colors duration-200" 
                      :class="star <= (hoverRating || newReview.rating) ? 'text-gold' : 'text-gray-600'"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                </div>
                <p v-if="reviewErrors.rating" class="text-red-500 text-xs mt-1">{{ reviewErrors.rating }}</p>
              </div>

              <!-- Name -->
              <div>
                <label class="block text-gold mb-2 font-medium">Your Name *</label>
                <input
                  v-model="newReview.author"
                  type="text"
                  placeholder="John Doe"
                  class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                  :class="{ 'border-red-500': reviewErrors.author }"
                />
                <p v-if="reviewErrors.author" class="text-red-500 text-xs mt-1">{{ reviewErrors.author }}</p>
              </div>

              <!-- Product -->
              <div>
                <label class="block text-gold mb-2 font-medium">Product *</label>
                <select
                  v-model="newReview.product"
                  class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors cursor-pointer"
                  :class="{ 'border-red-500': reviewErrors.product }"
                >
                  <option value="">Select a product</option>
                  <option value="JPG Le Male EDP">JPG Le Male EDP</option>
                  <option value="Supremacy Collection">Supremacy Collection</option>
                  <option value="Calvin Klein">Calvin Klein</option>
                  <option value="Sharaf Blend">Sharaf Blend</option>
                  <option value="Chanel Bleu de Chanel">Chanel Bleu de Chanel</option>
                  <option value="Creed Aventus">Creed Aventus</option>
                  <option value="Eilish by Billie Eilish">Eilish by Billie Eilish</option>
                  <option value="French Avenue">French Avenue</option>
                  <option value="Giorgio Armani">Giorgio Armani</option>
                  <option value="Gucci Bloom">Gucci Bloom</option>
                  <option value="La Vie Est Belle">La Vie Est Belle</option>
                  <option value="Tom Ford Noir">Tom Ford Noir</option>
                </select>
                <p v-if="reviewErrors.product" class="text-red-500 text-xs mt-1">{{ reviewErrors.product }}</p>
              </div>

              <!-- Review Text -->
              <div>
                <label class="block text-gold mb-2 font-medium">Your Review *</label>
                <textarea
                  v-model="newReview.comment"
                  rows="6"
                  placeholder="Share your experience with this product..."
                  class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none"
                  :class="{ 'border-red-500': reviewErrors.comment }"
                ></textarea>
                <p v-if="reviewErrors.comment" class="text-red-500 text-xs mt-1">{{ reviewErrors.comment }}</p>
                <p class="text-cream/60 text-xs mt-1">Minimum 20 characters ({{ newReview.comment.length }}/20)</p>
              </div>

              <!-- Submit Button -->
              <div class="flex gap-4">
                <button
                  type="submit"
                  :disabled="isSubmittingReview"
                  class="flex-1 bg-champagne hover:bg-gold text-dark py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {{ isSubmittingReview ? 'Submitting...' : 'Submit Review' }}
                </button>
                <button
                  type="button"
                  @click="closeWriteReview"
                  class="px-6 bg-dark border border-gray-700 hover:border-gold/50 text-cream py-3 rounded-2xl font-medium transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCart } from '../stores/cart'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const { showNotification } = useCart()

const selectedRating = ref(null)
const sortBy = ref('newest')
const displayCount = ref(6)
const isRevealed = ref(false)
const showWriteReview = ref(false)
const isSubmittingReview = ref(false)
const hoverRating = ref(0)

const newReview = ref({
  rating: 0,
  author: '',
  product: '',
  comment: ''
})

const reviewErrors = ref({})

const allReviews = ref([
  {
    id: 1,
    author: 'Sophia Anderson',
    date: 'November 15, 2025',
    rating: 5,
    product: 'JPG Le Male EDP',
    comment: 'Absolutely love this fragrance! The scent is long-lasting and receives compliments everywhere I go. The packaging is also luxurious and elegant.',
    helpful: 24,
    isHelpful: false
  },
  {
    id: 2,
    author: 'Marcus Chen',
    date: 'November 10, 2025',
    rating: 5,
    product: 'Supremacy Collection',
    comment: 'One of the best purchases I\'ve made. The quality is exceptional and the scent profile is exactly what I was looking for. Highly recommended!',
    helpful: 18,
    isHelpful: false
  },
  {
    id: 3,
    author: 'Isabella Rodriguez',
    date: 'November 5, 2025',
    rating: 5,
    product: 'Chanel Bleu de Chanel',
    comment: 'Perfect for everyday wear. The scent is sophisticated yet not overpowering. Fast delivery and excellent customer service too!',
    helpful: 32,
    isHelpful: false
  },
  {
    id: 4,
    author: 'James Thompson',
    date: 'October 28, 2025',
    rating: 4,
    product: 'Supremacy Collection',
    comment: 'Great fragrance at a reasonable price. The only reason I\'m giving 4 stars instead of 5 is that I wish the longevity was a bit better.',
    helpful: 15,
    isHelpful: false
  },
  {
    id: 5,
    author: 'Emma Wilson',
    date: 'October 20, 2025',
    rating: 5,
    product: 'Tom Ford Noir',
    comment: 'This is luxury in a bottle! The oud note is perfectly balanced and not overwhelming. Worth every penny.',
    helpful: 41,
    isHelpful: false
  },
  {
    id: 6,
    author: 'David Park',
    date: 'October 15, 2025',
    rating: 5,
    product: 'Giorgio Armani',
    comment: 'My new signature scent! The mysterious and seductive notes make it perfect for evening wear. Can\'t stop using it!',
    helpful: 28,
    isHelpful: false
  },
  {
    id: 7,
    author: 'Olivia Martinez',
    date: 'October 10, 2025',
    rating: 4,
    product: 'Gucci Bloom',
    comment: 'Beautiful floral scent that\'s perfect for spring and summer. Lasts most of the day. Would definitely repurchase!',
    helpful: 19,
    isHelpful: false
  },
  {
    id: 8,
    author: 'Liam Johnson',
    date: 'October 5, 2025',
    rating: 5,
    product: 'Creed Aventus',
    comment: 'Absolutely phenomenal! The pineapple and birch notes are incredible. This is what luxury smells like.',
    helpful: 52,
    isHelpful: false
  },
  {
    id: 9,
    author: 'Ava Williams',
    date: 'September 28, 2025',
    rating: 5,
    product: 'La Vie Est Belle',
    comment: 'Elegant and feminine without being overpowering. The iris and patchouli blend beautifully. Love it!',
    helpful: 36,
    isHelpful: false
  },
  {
    id: 10,
    author: 'Noah Brown',
    date: 'September 20, 2025',
    rating: 4,
    product: 'Calvin Klein',
    comment: 'Good everyday fragrance. Fresh and clean scent. Great value for money. Bottle design is sleek too.',
    helpful: 14,
    isHelpful: false
  },
  {
    id: 11,
    author: 'Mia Davis',
    date: 'September 15, 2025',
    rating: 3,
    product: 'Sharaf Blend',
    comment: 'Nice scent but fades quicker than I expected. Good for the price but not as long-lasting as advertised.',
    helpful: 8,
    isHelpful: false
  },
  {
    id: 12,
    author: 'Ethan Garcia',
    date: 'September 10, 2025',
    rating: 5,
    product: 'French Avenue',
    comment: 'Sophisticated and classy. Perfect for formal occasions. The bottle is stunning and makes a great gift!',
    helpful: 22,
    isHelpful: false
  },
  {
    id: 13,
    author: 'Charlotte Miller',
    date: 'September 5, 2025',
    rating: 5,
    product: 'Eilish by Billie Eilish',
    comment: 'Unique and captivating! The amber vanilla notes are incredible. Gets so many compliments. Highly recommend!',
    helpful: 45,
    isHelpful: false
  },
  {
    id: 14,
    author: 'Alexander Lee',
    date: 'August 28, 2025',
    rating: 4,
    product: 'JPG Le Male EDP',
    comment: 'Classic masculine scent. The lavender and vanilla combination works really well. Good sillage.',
    helpful: 17,
    isHelpful: false
  },
  {
    id: 15,
    author: 'Amelia Taylor',
    date: 'August 20, 2025',
    rating: 5,
    product: 'Chanel Bleu de Chanel',
    comment: 'Bought this for my husband and he absolutely loves it! Smells amazing and lasts all day. Will buy again!',
    helpful: 29,
    isHelpful: false
  }
])

const totalReviews = computed(() => allReviews.value.length)

const averageRating = computed(() => {
  const sum = allReviews.value.reduce((acc, review) => acc + review.rating, 0)
  return sum / allReviews.value.length
})

const getRatingCount = (rating) => {
  return allReviews.value.filter(r => r.rating === rating).length
}

const getRatingPercentage = (rating) => {
  const count = getRatingCount(rating)
  return (count / totalReviews.value) * 100
}

const filteredAndSortedReviews = computed(() => {
  let filtered = allReviews.value

  // Filter by rating
  if (selectedRating.value !== null) {
    filtered = filtered.filter(r => r.rating === selectedRating.value)
  }

  // Sort
  const sorted = [...filtered]
  switch (sortBy.value) {
    case 'newest':
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
    case 'highest':
      sorted.sort((a, b) => b.rating - a.rating)
      break
    case 'lowest':
      sorted.sort((a, b) => a.rating - b.rating)
      break
    case 'helpful':
      sorted.sort((a, b) => b.helpful - a.helpful)
      break
  }

  return sorted
})

const displayedReviews = computed(() => {
  return filteredAndSortedReviews.value.slice(0, displayCount.value)
})

const hasMore = computed(() => {
  return displayCount.value < filteredAndSortedReviews.value.length
})

const filterByStar = (star) => {
  selectedRating.value = selectedRating.value === star ? null : star
}

const loadMore = () => {
  displayCount.value += 6
}

const toggleHelpful = (reviewId) => {
  const review = allReviews.value.find(r => r.id === reviewId)
  if (review) {
    if (review.isHelpful) {
      review.helpful--
      review.isHelpful = false
    } else {
      review.helpful++
      review.isHelpful = true
    }
  }
}

const openWriteReview = () => {
  showWriteReview.value = true
  document.body.style.overflow = 'hidden'
}

const closeWriteReview = () => {
  showWriteReview.value = false
  document.body.style.overflow = ''
  reviewErrors.value = {}
  newReview.value = {
    rating: 0,
    author: '',
    product: '',
    comment: ''
  }
}

const validateReview = () => {
  reviewErrors.value = {}

  if (newReview.value.rating === 0) {
    reviewErrors.value.rating = 'Please select a rating'
  }

  if (!newReview.value.author.trim()) {
    reviewErrors.value.author = 'Name is required'
  }

  if (!newReview.value.product) {
    reviewErrors.value.product = 'Please select a product'
  }

  if (!newReview.value.comment.trim()) {
    reviewErrors.value.comment = 'Review text is required'
  } else if (newReview.value.comment.trim().length < 20) {
    reviewErrors.value.comment = 'Review must be at least 20 characters'
  }

  return Object.keys(reviewErrors.value).length === 0
}

const submitReview = async () => {
  if (!validateReview()) return

  isSubmittingReview.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Add new review
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    const newId = Math.max(...allReviews.value.map(r => r.id)) + 1

    allReviews.value.unshift({
      id: newId,
      author: newReview.value.author,
      date: today,
      rating: newReview.value.rating,
      product: newReview.value.product,
      comment: newReview.value.comment,
      helpful: 0,
      isHelpful: false
    })

    showNotification('Review submitted successfully! Thank you for your feedback.')
    closeWriteReview()
  } catch (error) {
    showNotification('Failed to submit review. Please try again.')
  } finally {
    isSubmittingReview.value = false
  }
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
  setTimeout(handleScroll, 100)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.reveal-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-section.revealed {
  opacity: 1;
  transform: translateY(0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
