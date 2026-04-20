<template>
  <footer class="footer">
    <div class="footer-top">
      <!-- Jika mau, bisa tambahkan logo partner di sini -->
    </div>

    <div class="footer-bottom">
      <p>© 2026 portofolio. All rights reserved.</p>

      <div class="footer-links">
        <span>Privacy</span>
        <span>Terms</span>
        <span>Support</span>
      </div>

      <div class="footer-socials">
        <a href="https://instagram.com" target="_blank">📸 Instagram</a>
        <a href="https://twitter.com" target="_blank">🐦 Twitter</a>
        <a href="https://linkedin.com" target="_blank">💼 LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #0d0d0d;
  color: #aaa;
  padding: 60px 10%;
  margin-top: 120px;
}

.footer-top {
  text-align: center;
  margin-bottom: 40px;
}

.partners {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  font-weight: 600;
  color: #777;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center; /* supaya vertikal center */
  border-top: 1px solid #222;
  padding-top: 30px;
  font-size: 14px;
  flex-wrap: wrap; /* supaya responsif */
  gap: 15px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-socials {
  display: flex;
  gap: 15px;
}

.footer-socials a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-socials a:hover {
  color: #fff;
}
</style>
