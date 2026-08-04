<script setup>
import Navbar from './components/Navbar.vue' 
import Footer from './components/Footer.vue'
</script>

<template>
<Navbar />
<transition name="page" mode="out-in">
  <router-view />
</transition>
<Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 300ms ease, transform 300ms ease;
}
</style>
