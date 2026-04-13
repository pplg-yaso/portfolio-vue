<template>
  <nav
  class="navbar navbar-expand-lg fixed-top custom-navbar px-4"
  :class="{ scrolled: isScrolled }"
>


    <!-- BRAND -->
    <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9DT0zSrO6z_N6lsx1lF9YRCfw1JcG2ap_l1j4cwnwWbVDvZGECEeIWIyQWMkT4JvVcfxKgFTrajxASmNi3YgORGjk_PsbIzIoL6Dm2pinzFDOfEuGQsio1tUXMbb2S2_Hc7zML84Bid8NhZDTsqs8rGBNHEICWmJzFZUQVCCzLnLYmkSpcKyj0KaTDQ/w400-h269/fc%20barcelona%20logo.jpg"
        class="rounded-circle"
        width="40"
        height="40"
      />
      <div class="brand-text">
        <small class="fw-bold">FC</small>
        <div class="fw-bold">Barcelona</div>
      </div>
    </router-link>

    <!-- TOGGLER -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- MENU -->
    <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav ms-auto align-items-center gap-4">

  <li class="nav-item">
    <router-link class="nav-link" to="/">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/about">About</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/services">Shop</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/contact">Contact</router-link>
  </li>

  <!-- SEARCH -->
  <li class="nav-item">
    <input
      class="nav-search"
      type="search"
      placeholder="Search"
    />
  </li>

  <!-- LOGIN -->
  <li class="nav-item">
    <router-link class="btn-login" to="/login">
      Login
    </router-link>
  </li>

</ul>
    </div>


  </nav>
</template>

<style scoped>

/* NAVBAR UTAMA */
.custom-navbar {
  background: linear-gradient(90deg, rgba(10,31,68,0.95), rgba(139,0,0,0.95));
  backdrop-filter: blur(6px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  padding-top: 12px;
  padding-bottom: 12px;
}

/* BRAND */
.navbar-brand {
  color: white !important;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

/* LOGO */
.navbar-brand img {
  border: 2px solid #0723de;
  padding: 2px;
  transition: 0.3s ease;
}

.navbar-brand:hover img {
  box-shadow: 0 0 10px #980202;
}

/* TEXT BRAND */
.brand-text small {
  font-size: 17px;
  opacity: 0.85;
  color: #ffffffcc;
}

.brand-text div {
  font-size: 18px;
  color: white;
}

/* NAV LINK */
.nav-link {
  color: #ffffffcc !important;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  padding: 6px 10px;
}

.nav-link {
  color: #ffffffcc !important;
  font-weight: 500;
  position: relative;
  transition: 0.3s ease;
  padding: 6px 0;
}

/* Underline hover effect */
.nav-link {
  color: #ffffffcc !important;
  font-weight: 500;
  transition: 0.3s ease;
  padding: 6px 0;
}

/* Hover simple */
.nav-link:hover {
  color: #f4c430 !important; /* gold Barça */
}

/* Active */
.router-link-active {
  color: white !important;
  font-weight: 600;
}

/* Active clean */
.router-link-active {
  color: rgb(1, 15, 107) !important;
}

.nav-search {
  width: 160px;
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  font-size: 13px;
}

.nav-search:focus {
  outline: none;
  box-shadow: 0 0 6px rgba(255,255,255,0.4);
}

/* LOGIN BUTTON */
.btn-login {
  padding: 6px 18px;
  border-radius: 20px;
  background: linear-gradient(90deg, #0723de, #980202);
  color: white !important;
  font-weight: 600;
  transition: 0.3s ease;
  text-decoration: none;
}

.btn-login:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  background: linear-gradient(90deg, #980202, #0723de);
}

</style>

<script>
export default {
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 110
    }
  }
}
</script>
