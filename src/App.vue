<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView/>
    <Footer />
  </div>
</template>


<style>
body {
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #4b5563;
}
</style>

