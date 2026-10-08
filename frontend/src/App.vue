<script setup>
import { ref } from 'vue'
import Desktop from './components/desktop/Desktop.vue'
import SplashScreen from './components/splashscreen/splashscreen.vue'

const loading = ref(true)

const handleLoaded = () => {
  loading.value = false
}

</script>

<template>

  <Transition name="splash">
    <SplashScreen v-if="loading" @loaded="handleLoaded" />
  </Transition>

  <Desktop v-if="!loading" />
</template>


<style scoped>
.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.6s ease;
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}
</style>