<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import About from './views/About.vue'
</script>

<template>
<Navbar />
<router-view />
<Footer />
<About />
</template>

<style scoped>

</style>
