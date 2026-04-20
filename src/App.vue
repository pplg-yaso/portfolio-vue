<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

</script>

<template>
<Navbar />
<router-view/>
<Footer />
</template>

