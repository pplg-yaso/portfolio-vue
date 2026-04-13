<script setup></script>

<template>
  <nav class="navbar">
    <div class="wrapper">
      <div class="name">
        <h1 class="firstname">Alpha</h1>
        <h1 class="lastname">Beta</h1>
      </div>
      <ul class="option">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar, .wrapper, .name, h1, ul, li {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px; 
  border-bottom: solid black 2px;
  position: sticky;
  top: 0;
  background: #0f172a; 
  z-index: 1000;
  width: 100%; 
}

.name {
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  align-items: baseline; 
}

.firstname {
  font-weight: bolder;
  font-size: 50px;
  margin: 0; 
  margin-left: 20px;
  color: white;
}

.lastname {
  font-weight: bold;
  font-size: 45px;
  color: blue;
  margin: 0; 
  margin-left: 5px; 
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0; 
  margin: 0; 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.option li {
  list-style-type: none;
  padding: 8px; 
  margin: 0;
}

.option li:hover {
  border-radius: 8px;
}

.option a {
  text-decoration: none;
  color: white;
  padding: 20px 30px;
  font-size: 18px;
  display: block; 
  border-radius: 8px; 
  transition: background-color 0.3s; 
}

.option li:hover a {
  color: black;
  background-color: white;
}
</style>