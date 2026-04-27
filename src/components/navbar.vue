<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <div class="navbar__container">
      <!-- Logo -->
      <div class="navbar__logo">
        <router-link to="/" class="logo-link">
          <span class="logo-text">HYBE</span>
          <span class="logo-labels">LABELS</span>
        </router-link>
      </div>

      <!-- Desktop Nav -->
      <div class="navbar__links">
        <router-link to="/about" class="nav-link">COMPANY</router-link>
        <router-link to="/artist" class="nav-link">ARTISTS</router-link>
        <router-link to="/service" class="nav-link">BUSINESS</router-link>
      </div>

      <!-- Mobile Hamburger -->
      <button class="hamburger" @click="toggleMobileMenu" aria-label="Menu">
        <span :class="['bar', { 'bar--open': isMobileMenuOpen }]"></span>
        <span :class="['bar', { 'bar--open': isMobileMenuOpen }]"></span>
        <span :class="['bar', { 'bar--open': isMobileMenuOpen }]"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { 'mobile-menu--open': isMobileMenuOpen }]">
      <router-link to="/about" class="mobile-link" @click="isMobileMenuOpen = false">COMPANY</router-link>
      <router-link to="/artist" class="mobile-link" @click="isMobileMenuOpen = false">ARTISTS</router-link>
      <router-link to="/service" class="mobile-link" @click="isMobileMenuOpen = false">BUSINESS</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  background: transparent;
}

.navbar--scrolled {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar__container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: baseline;
  text-decoration: none;
  color: #fff;
  gap: 4px;
}

.logo-text {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 2px;
}

.logo-labels {
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 4px;
  opacity: 0.8;
}

.navbar__links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 8px 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.router-link-active {
  font-weight: 600;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

.bar--open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar--open:nth-child(2) {
  opacity: 0;
}

.bar--open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.98);
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu--open {
  display: flex;
}

.mobile-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .navbar__links {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
