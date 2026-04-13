<script setup>
  const menu = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Services', path: '/services'},
    {name: 'Portfolio', path: '/Portfolio'},
    {name: 'Contact', path: '/contact'}
  ]
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">MyPortfolio</div>

      <ul class="nav-links">
        <li v-for="item in menu" :key="item.name">
          <RouterLink
          :to="item.path"
          class="nav-link"
          active-class="active"
          >
          {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background-color: #1f1833;
    height: 64px;
    display: flex;
    align-items: center;
  }

  .navbar-container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: #f1f1f1;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .nav-links {
    display: flex;
    gap: 28px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    position: relative;
    color: #d6d6d6;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 4px 0;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: #ff4d4d;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background-color: #ff4d4d;
    transition: width 0.25s ease;
  }

  .nav-link:hover::after, .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    color: #ffffff;
  }
</style>