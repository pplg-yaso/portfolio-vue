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
      <li><router-link to="/trophy">Trophies</router-link></li>
      <li><router-link to="/player">Players</router-link></li>
      <li><router-link to="/history">History</router-link></li>
    </ul>

    <div class="nav-right">
      <a href="https://www.emirates.com" target="_blank" rel="noopener noreferrer" class="sponsor-link">
        <span class="sponsor">Emirates</span>
      </a>
      <a href="https://www.adidas.com" target="_blank" rel="noopener noreferrer" class="sponsor-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
          alt="Adidas"
          class="adidas"
        />
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  background: linear-gradient(90deg, #ffffff 0%, #f7f2e8 100%);
  border-bottom: 2px solid #d4af37;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  height: 42px;
}

.badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1a1a1a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 28px;
  padding: 0;
  margin: 0;
}

.nav-menu li a {
  text-decoration: none;
  color: #14213d;
  font-weight: 600;
  transition: 0.3s;
}

.nav-menu li a:hover {
  color: #d4af37;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sponsor-link {
  text-decoration: none;
}

.sponsor {
  font-weight: 700;
  color: #14213d;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.adidas {
  height: 24px;
}
</style>
