<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black starwars-navbar">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt="Logo"
          width="120"
          height="100"
          class="me-2 justify-center"
        />
        <h1 class="navbar-brand starwars-title">Star Wars</h1>
      </a>

      <!-- Brand Title -->

      <!-- Navbar links -->
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <router-link class="nav-link starwars-link" :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>

        <!-- Search -->
        <form class="d-flex ms-3" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "StarWarsNavbar",
  data() {
    return {
      menuItems: [
        { name: "Home", link: "/" },
        { name: "Movies", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Contact", link: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
/* Navbar dasar */
.starwars-navbar {
  background-color: black !important;
  font-family: "Arial", sans-serif;
}

/* Teks brand */
.starwars-title {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  margin-left: 0.5rem;
}

/* Links */
.starwars-link {
  color: rgb(255, 255, 255) !important;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* Hover efek glowing Star Wars */
.starwars-link:hover {
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  transform: scale(1.1);
}

/* Logo animasi spin */
.logo-spin {
  animation: spin 5s linear infinite;
  border: 2px solid yellow; /* opsional, biar lebih sci-fi */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
