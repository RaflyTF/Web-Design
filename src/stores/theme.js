import { ref, watch } from 'vue'

const isDark = ref(true)

// Check localStorage on init
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  }
}

// Watch for changes and update localStorage + document class
watch(isDark, (newValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    document.documentElement.classList.toggle('light', !newValue)
  }
})

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme
  }
}
