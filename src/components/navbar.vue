<template>
  <nav class="navbar">
    <div class="nav-container">
      
      <!-- Logo -->
      <div class="logo">
        <span class="logo-icon"><img src="/src/assets/vue.svg"></span>
        <span class="logo-text">FRL</span>
      </div>

      <!-- Menu -->
      <ul class="nav-links">
        <router-link to="/" class="nav-links">Home</router-link>
        <router-link to="/about" class="nav-links">about</router-link>
        <router-link to="/services" class="nav-links">services</router-link>
        <router-link to="/contact" class="nav-links">contact</router-link>
      </ul>

      <!-- Button -->
      <button class="btn-outline"><RouterLink to="/login" class="nav-links"> sign in</RouterLink></button>

    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  width: 100%;
  background: #f4f4f4;
  padding: 18px 0;
  display: flex;
  justify-content: center;
}

.nav-container {
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 18px;
}

.logo-icon {
  font-size: 16px;
}

/* Menu */
.nav-links {
  list-style: none;
  display: flex;
  gap: 40px;
  font-size: 15px;
  color: #000000;
  text-decoration: none;
}

.nav-links router-link {
  cursor: pointer;
  transition: 0.3s;
  color: #553737;
}

.nav-links router-link:hover {
  opacity: 0.6;
}

/* Button */
.btn-outline {
  background: transparent;
  border: 1px solid #000;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-outline:hover {
  background: #000;
  color: #fff;
}
</style>
