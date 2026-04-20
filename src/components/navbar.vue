<template>
<nav class="navbar">
<h1>Company Profile</h1>
<ul>
<li><router-link to="/">Home</router-link></li>
<li><router-link to="/about">About</router-link></li>
<li><router-link to="/services">Services</router-link></li>
<li><router-link to="/portfolio">Portfolio</router-link></li>
<li><router-link to="/contact">Contact</router-link></li>
</ul>
</nav>
</template>
<style scoped>
.navbar {
display: flex;
justify-content: space-between;
padding: 16px;
background: #1f2937;
color: white;
}
ul {
display: flex;
gap: 16px;
list-style: none;
}
a { color: white; text-decoration: none; }
</style>