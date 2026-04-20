<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './views/Contact.vue'
import Services from './views/Services.vue'
</script>

<template>
  <Navbar />

  <Home />
  <About />
  <Services />
  <Portfolio />
  <Contact />

  <Footer />
</template>