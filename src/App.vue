<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app-layout">
    <Navbar />
    <main>
      <RouterView /> </main>
    <Footer />
  </div>
</template>

<style>
/* CSS Global agar tidak ada margin di pinggir layar */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
</style>