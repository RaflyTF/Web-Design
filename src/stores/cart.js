import { ref, computed } from 'vue'

// Cart state
const cartItems = ref([])
const isCartOpen = ref(false)

// Cart functions
export function useCart() {
  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
    
    // Show notification
    showNotification(`${product.name} added to cart!`)
  }

  const removeFromCart = (productId) => {
    const index = cartItems.value.findIndex(item => item.id === productId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      // Use priceNum if available, otherwise parse from price string
      const price = item.priceNum || parseFloat(item.price.replace(/\D/g, ''))
      return total + (price * item.quantity)
    }, 0)
  })

  const cartCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0)
  })

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    cartTotal,
    cartCount,
    showNotification
  }
}

// Notification state
const notifications = ref([])

function showNotification(message, type = 'success') {
  const id = Date.now()
  notifications.value.push({ id, message, type })
  
  setTimeout(() => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }, 3000)
}

export function useNotifications() {
  return {
    notifications,
    showNotification
  }
}
