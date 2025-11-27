<template>
  <div class="flex items-center justify-center">
    <div class="relative">
      <!-- Spinning ring -->
      <div class="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
      
      <!-- Inner glow -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-6 h-6 bg-gold/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
