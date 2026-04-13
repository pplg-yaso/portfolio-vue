<template>
  <footer class="footer">
    <p>© {{ year }} MyWebsite. All rights reserved.</p>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background:#ecbde4;
  color: #fff;
  padding: 15px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}

.footer nav {
  margin-top: 10px;
}

.footer a {
  color: #ddd;
  margin: 0 10px;
  text-decoration: none;
}

.footer a:hover {
  color: #fff;
}
</style>
