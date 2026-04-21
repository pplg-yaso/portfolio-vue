<template>
  <Navbar />
  <main class="pt-5 mt-4">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.content {
    padding: 80px 20px;
}
</style>

<section id="contact">
  <!-- isi contact -->
</section>
