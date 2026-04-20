<template>
  <nav class="navbar navbar-expand-lg navbar-dark starwars-navbar fixed-top">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="#">
 
        <h1 class="navbar-brand starwars-title">STAR WARS</h1>
      </a>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <router-link class="nav-link starwars-link" :to="item.link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <!-- Search -->
        <form class="d-flex ms-4" role="search">
          <input
            class="form-control me-2 starwars-search"
            type="search"
            placeholder="Search the galaxy..."
            aria-label="Search"
          />
          <button class="btn btn-outline-warning" type="submit">Search</button>
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
        { name: "Movies", link: "/About" },
        { name: "Shop", link: "/series" },
        { name: "Characters", link: "/characters" },
        { name: "Galaxy", link: "/galaxy" },
      ],
    };
  },
};
</script>

<style scoped>
/* Import Font Star Wars (tambahkan di index.html atau main.js) */
.starwars-navbar {
  background-color: #0a0a0a !important;
  border-bottom: 2px solid #facc15;
  box-shadow: 0 8px 25px rgba(250, 204, 21, 0.25);
  padding: 0.8rem 0;
  transition: all 0.4s ease;
}

/* Font Star Wars epik */
.starwars-title {
  font-family: 'Star Wars', 'Orbitron', sans-serif;
  color: #facc15 !important;
  font-size: 2.1rem;
  font-weight: 900;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-shadow: 
    0 0 10px #facc15,
    0 0 20px #facc15,
    0 0 30px #eab308;
  margin: 0;
}

/* Links */
.starwars-link {
  color: #e5e5e5 !important;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.6rem 1.2rem !important;
  transition: all 0.3s ease;
  position: relative;
}

.starwars-link:hover {
  color: #facc15 !important;
  text-shadow: 0 0 12px #facc15;
  transform: translateY(-2px);
}

/* Search input style */
.starwars-search {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #facc15;
  color: white;
  font-size: 1rem;
}

.starwars-search::placeholder {
  color: #aaa;
}

.starwars-search:focus {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.3);
  color: white;
}

/* Efek saat scroll (shadow lebih kuat) */
.starwars-navbar.scrolled {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  background-color: rgba(10, 10, 10, 0.98) !important;
  padding: 0.6rem 0;
}
.navbar-brand {
  display: flex;
  padding: 10px 15px;
}
</style>