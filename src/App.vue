<template>
  <div class="app-wrapper">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>


<style>
 html, body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-wrapper > *:nth-child(2) {
  flex: 1;
}
</style>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
