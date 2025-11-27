<template>
  <Teleport to="body">
    <div class="fixed top-24 right-6 z-[60] space-y-3 pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="bg-dark-lighter border rounded-2xl px-6 py-4 shadow-2xl shadow-black/50 pointer-events-auto max-w-sm"
          :class="[
            notification.type === 'success' ? 'border-gold/50' : 'border-red-400/50'
          ]"
        >
          <div class="flex items-center gap-3">
            <!-- Icon -->
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              :class="[
                notification.type === 'success' ? 'bg-gold/20 text-gold' : 'bg-red-400/20 text-red-400'
              ]"
            >
              <svg v-if="notification.type === 'success'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            <!-- Message -->
            <p class="text-cream text-sm flex-1">{{ notification.message }}</p>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { useNotifications } from '../stores/cart'

const { notifications } = useNotifications()
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease;
}

.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100px) scale(0.8);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
