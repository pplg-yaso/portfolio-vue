<script setup>
const menu = [
  { name: 'Home', link: '/home' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact', link: '/contact' }
]
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
       Elvora
      </div>

      <ul class="nav-menu">
        <li v-for="item in menu" :key="item.name">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>

     <router-link to="/login" class="nav-btn">
  Login
</router-link>

    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background: linear-gradient(90deg, #000000, #4b4b4b);
  padding: 12px 0;
  color: white;
  position: sticky;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.nav-menu a:hover {
  opacity: 0.8;
}

.nav-btn {
  background: white;
  color: #3a3a3a;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.nav-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
  