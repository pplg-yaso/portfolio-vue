<script setup>
</script>

<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Europäische Herrscher</div>

            <ul class="nav-menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/portofolio">Portofolio</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style>
.navbar {
  width: 100%;
  background-color:  #9b0f24;
}


.nav-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 24px;
}


.logo {
  font-size: 50px;
  font-weight: 700;
  color: white;
}


.nav-menu {
  list-style: none;
  display: flex;
  gap: 24px;
  margin-left: auto;
  padding: 0;
}

.nav-menu a {
  text-decoration: none;
  color: #e5e7eb;
  transition: color 0.2s ease;
}

.nav-menu a:hover {
  color: #38bdf8;
}

</style>
