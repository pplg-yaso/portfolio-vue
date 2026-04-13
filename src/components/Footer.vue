<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright">© 2026 AlphaBeta. All rights reserved.</p>
      <div class="footer-links">
        <li><router-link to="/privacy" class="footer-link">Privacy</router-link></li>
        <li><router-link to="/terms" class="footer-link">Terms</router-link></li>
        <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0f172a;
  color: white;
  padding: 20px 0;
  border-top: 2px solid black;
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
}

.footer-content {
  margin-left: 150px;
  margin-right: 150px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.copyright {
  margin: 0;
  font-size: 13px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 13px;
}

.footer-link:hover {
  color: #3498db;
}
</style>