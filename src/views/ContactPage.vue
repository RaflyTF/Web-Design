<template>
  <div class="min-h-screen">
    <Navbar />
    
    <main class="py-20 px-4 bg-dark min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-serif font-normal text-gold mb-6">Contact Us</h1>
          <p class="text-cream/80 text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- Contact Info & Social Media -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Business Hours -->
            <div class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <h3 class="text-gold font-medium text-lg">{{ businessStatus }}</h3>
              </div>
              <div class="space-y-2 text-sm">
                <div v-for="(hours, day) in businessHours" :key="day" class="flex justify-between text-cream/70">
                  <span :class="{ 'text-gold font-medium': isToday(day) }">{{ day }}</span>
                  <span>{{ hours }}</span>
                </div>
              </div>
              <div v-if="!isOpen" class="mt-4 text-champagne text-sm">
                Opens in {{ timeUntilOpen }}
              </div>
            </div>

            <!-- Contact Cards -->
            <div class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30 hover:border-gold/30 transition-colors">
              <div class="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 class="text-gold font-medium mb-2">Email</h3>
                  <a href="mailto:contact@velixier.com" class="text-cream/80 hover:text-gold transition-colors block">contact@velixier.com</a>
                  <a href="mailto:support@velixier.com" class="text-cream/80 hover:text-gold transition-colors block">support@velixier.com</a>
                </div>
              </div>
            </div>

            <div class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30 hover:border-gold/30 transition-colors">
              <div class="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 class="text-gold font-medium mb-2">Phone & WhatsApp</h3>
                  <a href="tel:+6285248502721" class="text-cream/80 hover:text-gold transition-colors block">+62 852-4850-2721</a>
                  <p class="text-cream/60 text-sm mt-1">Mon - Fri, 9AM - 6PM</p>
                </div>
              </div>
            </div>

            <div class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30 hover:border-gold/30 transition-colors">
              <div class="flex items-start space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 class="text-gold font-medium mb-2">Address</h3>
                  <p class="text-cream/80">Grand City Mall</p>
                  <p class="text-cream/80">Balikpapan, Indonesia</p>
                </div>
              </div>
            </div>

            <!-- Social Media Links -->
            <div class="bg-dark-lighter p-6 rounded-2xl border border-gray-800/30">
              <h3 class="text-gold font-medium mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a 
                  href="https://instagram.com/simplyrafly" 
                  target="_blank"
                  class="group w-12 h-12 bg-dark hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="Instagram"
                >
                  <svg class="w-6 h-6 text-gold group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a 
                  href="https://wa.me/6285248502721" 
                  target="_blank"
                  class="group w-12 h-12 bg-dark hover:bg-green-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="WhatsApp"
                >
                  <svg class="w-6 h-6 text-gold group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>

                <a 
                  href="https://facebook.com/velixier" 
                  target="_blank"
                  class="group w-12 h-12 bg-dark hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  title="Facebook"
                >
                  <svg class="w-6 h-6 text-gold group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2 bg-dark-lighter p-8 rounded-2xl border border-gray-800/30">
            <h2 class="text-3xl font-serif text-gold mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gold mb-2 font-medium">Name *</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                    :class="{ 'border-red-500': errors.name }"
                    placeholder="Your name"
                  />
                  <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label class="block text-gold mb-2 font-medium">Email *</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                    :class="{ 'border-red-500': errors.email }"
                    placeholder="your.email@example.com"
                  />
                  <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label class="block text-gold mb-2 font-medium">Subject *</label>
                <input 
                  v-model="form.subject"
                  type="text" 
                  class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                  :class="{ 'border-red-500': errors.subject }"
                  placeholder="What is this about?"
                />
                <p v-if="errors.subject" class="text-red-500 text-xs mt-1">{{ errors.subject }}</p>
              </div>
              
              <div>
                <label class="block text-gold mb-2 font-medium">Message *</label>
                <textarea 
                  v-model="form.message"
                  rows="6"
                  class="w-full bg-dark border border-gray-700 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none"
                  :class="{ 'border-red-500': errors.message }"
                  placeholder="Your message..."
                ></textarea>
                <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
              </div>
              
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-champagne hover:bg-gold text-dark py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <Transition name="fade">
              <div v-if="successMessage" class="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p class="text-green-400 text-center">{{ successMessage }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mb-16">
          <h2 class="text-4xl font-serif text-gold text-center mb-12">Frequently Asked Questions</h2>
          <div class="max-w-4xl mx-auto space-y-4">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="bg-dark-lighter rounded-2xl border border-gray-800/30 overflow-hidden"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-dark/50 transition-colors"
              >
                <span class="text-cream font-medium text-lg pr-4">{{ faq.question }}</span>
                <svg 
                  class="w-6 h-6 text-gold transform transition-transform duration-300 shrink-0"
                  :class="{ 'rotate-180': openFaqIndex === index }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Transition name="accordion">
                <div v-if="openFaqIndex === index" class="px-8 pb-6">
                  <p class="text-cream/70 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="mb-16">
          <h2 class="text-4xl font-serif text-gold text-center mb-12">Visit Our Store</h2>
          <div class="rounded-2xl overflow-hidden border border-gray-800/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.90355817219!2d116.87000147477737!3d-1.226940398761358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14617402c3d49%3A0xad3a18aebd23b445!2sGrand%20city!5e0!3m2!1sid!2sid!4v1764196377142!5m2!1sid!2sid" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>

    <Footer />

    <!-- Floating Chat Button -->
    <Transition name="scale">
      <button 
        v-if="showChatButton"
        @click="openChat"
        class="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-gold to-champagne text-dark rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group z-50"
        title="Chat with us"
      >
        <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span class="absolute -top-12 right-0 bg-dark-lighter text-cream px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
        </span>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCart } from '../stores/cart'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const { showNotification } = useCart()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const successMessage = ref('')
const openFaqIndex = ref(null)
const showChatButton = ref(false)

// Business Hours
const businessHours = {
  'Monday': '9:00 AM - 6:00 PM',
  'Tuesday': '9:00 AM - 6:00 PM',
  'Wednesday': '9:00 AM - 6:00 PM',
  'Thursday': '9:00 AM - 6:00 PM',
  'Friday': '9:00 AM - 6:00 PM',
  'Saturday': '10:00 AM - 4:00 PM',
  'Sunday': 'Closed'
}

const isOpen = computed(() => {
  const now = new Date()
  const day = now.toLocaleDateString('en-US', { weekday: 'long' })
  const hour = now.getHours()
  
  if (day === 'Sunday') return false
  if (day === 'Saturday') return hour >= 10 && hour < 16
  return hour >= 9 && hour < 18
})

const businessStatus = computed(() => {
  return isOpen.value ? 'Open Now' : 'Closed'
})

const timeUntilOpen = computed(() => {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
  const hour = now.getHours()
  
  if (day === 0) return 'Monday at 9:00 AM'
  if (day === 6 && hour >= 16) return 'Monday at 9:00 AM'
  if (day === 6 && hour < 10) return `${10 - hour} hours`
  if (hour < 9) return `${9 - hour} hours`
  if (hour >= 18) return 'tomorrow at 9:00 AM'
  
  return '9:00 AM tomorrow'
})

const isToday = (day) => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  return today === day
}

// FAQs
const faqs = [
  {
    question: 'What are your shipping options and delivery times?',
    answer: 'We offer standard shipping (5-7 business days) and express shipping (2-3 business days). All orders are processed within 24 hours. Free shipping is available for orders over Rp 1,000,000.'
  },
  {
    question: 'What is your return and refund policy?',
    answer: 'We accept returns within 30 days of purchase for unopened products in original packaging. Refunds are processed within 5-7 business days after we receive the returned item. Please contact our support team to initiate a return.'
  },
  {
    question: 'Are your perfumes authentic?',
    answer: 'Absolutely! All Velixier fragrances are 100% authentic and crafted by our master perfumers using premium ingredients. Each bottle comes with a certificate of authenticity.'
  },
  {
    question: 'Do you offer sample sizes?',
    answer: 'Yes! We offer 5ml sample sizes for most of our fragrances. This is a great way to try our scents before committing to a full bottle. Sample sets are also available.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards (Visa, Mastercard, AMEX), bank transfers, e-wallets (GoPay, OVO, Dana, ShopeePay), and cash on delivery (COD) for select areas.'
  },
  {
    question: 'How should I store my perfume?',
    answer: 'Store your perfume in a cool, dry place away from direct sunlight and heat. Keep the bottle tightly closed when not in use. Proper storage can help maintain the fragrance quality for years.'
  }
]

// Form validation
const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Invalid email format'
  }
  
  if (!form.value.subject.trim()) {
    errors.value.subject = 'Subject is required'
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters'
  }
  
  return Object.keys(errors.value).length === 0
}

// Form submission
const handleSubmit = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    successMessage.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
    showNotification('Message sent successfully!')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (error) {
    showNotification('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// FAQ toggle
const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

// Chat button
const openChat = () => {
  showNotification('Live chat will be available soon!')
  // In production, this would open a chat widget
}

onMounted(() => {
  // Show chat button after delay
  setTimeout(() => {
    showChatButton.value = true
  }, 2000)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.accordion-enter-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.accordion-leave-active {
  transition: all 0.3s ease-in;
  overflow: hidden;
}

.accordion-enter-from {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to {
  opacity: 1;
  max-height: 500px;
}

.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
}

.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.scale-enter-active, .scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
