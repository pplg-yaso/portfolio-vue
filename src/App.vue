<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app"">
  <Navbar />
  <main class="main-content">
  <router-view />
  </main>
  <Footer />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
