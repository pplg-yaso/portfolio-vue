<script setup>
</script>

<template>
  <nav class="navbar">
    <h1 class="logo">MyPortfolio</h1>

    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  z-index: 1000;
}

/* LOGO */
.logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* MENU */
ul {
  display: flex;
  gap: 25px;
  list-style: none;
}

a {
  color: #cbd5f5;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

/* HOVER */
a:hover {
  color: #22c55e;
}
</style>