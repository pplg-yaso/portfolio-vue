<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
<nav class="navbar">
<h1>nguseup</h1>
<ul>
<li><router-link to="/">Home</router-link></li>
<li><router-link to="/about">About</router-link></li>
<li><router-link to="/services">Services</router-link></li>
<li><router-link to="/portfolio">Portfolio</router-link></li>
<li><router-link to="/contact">Contact</router-link></li>
</ul>

<router-link to="/login" class="nav-btn">
   login
</router-link>
</nav>
</template>


<style scoped>
.navbar {
display: flex;
justify-content: space-between;
padding: 16px;
background: #1f2937;
color: white;
position: sticky;
 top: 0;           
  z-index: 1000; 
}

ul {
display: flex;
gap: 16px;
list-style: none;
}

a:hover {
   color:blue;
}
a { color: white; text-decoration: none; }

.nav-btn {
   background-color: white;
   color: blue;
   border: none;
   padding: 8px 16px;
   border-radius: 6px;
   font-weight: 600;
   cursor: pointer;
   transition: transfrom 0.2s ease, box-shadow 0.2s ease;
   text-decoration: none;
}
</style>