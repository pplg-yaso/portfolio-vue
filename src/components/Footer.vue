<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© {{ year }} MyWebsite.Whatever you do never run back to what broke you.</p>

      <nav class="footer-links">
        <a href="https://www.google.com/search?q=wa&oq=wa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCDE1MThqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8">Whatsapp</a>
        <a href="https://www.google.com/search?q=ins&oq=ins&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCDE4MjNqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8">Instagram</a>
        <a href="https://www.google.com/search?q=tw&oq=tw&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCDQ5OTlqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8">Twitter</a>
        <a href="https://www.google.com/search?q=facebook&oq=face&gs_lcrp=EgZjaHJvbWUqBwgBEAAYjwIyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBCDIyODZqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&sei=Rz6AafHMOtWSseMPw_i-4Qw">Facebook</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color:rgb(0, 0, 0);
  color: #f9fafb;
  padding: 20px 0;
  bottom: 0;
  width: 1450px;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
}

.footer-links a:hover {
  color: #ffffff;
}
</style>
