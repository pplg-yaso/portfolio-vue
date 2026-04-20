<template>
  <nav class="navbar">

    <div class="nav-left">
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
        alt="Real Madrid" 
        class="logo"
      />
      <div class="badge">15</div>
    </div>


   <ul class="nav-menu">
  <li><router-link to="/home">Home</router-link></li>
  <li><router-link to="/about">About</router-link></li>
  <li><router-link to="/tour">Tropy</router-link></li>
  <li><router-link to="/shop">Shop</router-link></li>
  <li><router-link to="/play">RM Play</router-link></li>
</ul>
    <!-- Kanan -->
    <div class="nav-right">
      <span class="sponsor">Emirates</span>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" 
        alt="Adidas" 
        class="adidas"
      />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  font-family: Arial, sans-serif;
}

/* LEFT */
.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  height: 40px;
}

.badge {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

/* CENTER */
.nav-menu {
  list-style: none;
  display: flex;
  gap: 30px;
  padding: 0;
  margin: 0;
}

.nav-menu li a {
  text-decoration: none;
  color: #1d3557;
  font-weight: 500;
  transition: 0.3s;
}

.nav-menu li a:hover {
  color: #0056b3;
}

/* RIGHT */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.sponsor {
  font-weight: bold;
  color: #000;
}

.adidas {
  height: 25px;
}
</style>
  