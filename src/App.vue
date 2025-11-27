<template>
  <div id="app">
    <!-- Loading Overlay -->
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center">
        <div class="text-center">
          <LoadingSpinner />
          <p class="text-gold mt-4 text-sm font-medium">Loading...</p>
        </div>
      </div>
    </Transition>

    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    <CartSidebar />
    <NotificationToast />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CartSidebar from './components/CartSidebar.vue'
import NotificationToast from './components/NotificationToast.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const router = useRouter()
const isLoading = ref(false)

// Show loading on route change
router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<style>
#app {
  min-height: 100vh;
}
</style>
