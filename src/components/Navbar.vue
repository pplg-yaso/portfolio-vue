<template>
  <nav class="navbar">
    <div class="nav-left">
      <span class="user-icon">👤</span>
      <h1 class="brand-name">Antoinette Élysée</h1>
    </div>
    
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/clothes">Dresses</router-link>
      <router-link to="/food">High Heels</router-link>
      
      <div class="dropdown">
  <button class="dropbtn">Dropdown ▼</button>
  <div class="dropdown-content">
    <router-link to="/skincare">Skincare</router-link>
    <router-link to="/perfume">Perfume</router-link>
    <router-link to="/makeup">Make Up</router-link>
  </div>
</div>
      <router-link to="/jewelry">Jewelry</router-link>
    </div>

    <div class="nav-right">
      <span class="cart-icon">🛒</span>
      <input type="text" placeholder="Search" class="search-input" />
      <button class="search-btn">Search</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #f4f9ff; /* Warna biru muda sesuai foto */
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  font-family: Arial, sans-serif;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}

.nav-links a:hover {
  color: #B9D9EB; /* Warna pink coquette saat di-hover */
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-input {
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
}

.search-btn {
  padding: 8px 15px;
  background-color: transparent;
  border: 1px solid #3ca581; /* Hijau sesuai foto */
  color: #3ca581;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.search-btn:hover {
  background-color: #3ca581;
  color: white;
}

/* Container Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Tombol Dropdown */
.dropbtn {
  background: none;
  color: #333;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

/* Kotak menu yang sembunyi */
.dropdown-content {
  display: none; /* Sembunyi secara default */
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
  z-index: 1000;
  border-radius: 8px;
  overflow: hidden;
  top: 100%; /* Muncul tepat di bawah tombol */
  left: 0;
}

/* Link di dalam dropdown */
.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  transition: 0.3s;
}

/* Warna saat link di-hover */
.dropdown-content a:hover {
  background-color: #f4f9ff;
  color: #4b8cd9;
}

/* Tampilkan menu saat tombol/container di-hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Opsional: Ubah warna tombol saat di-hover */
.dropdown:hover .dropbtn {
  color: #4b8cd9;
}
</style>

