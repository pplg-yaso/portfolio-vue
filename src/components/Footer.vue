<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2026 Real Madrid CF Fan Landing Page</p>
      <p class="tagline">Hala Madrid • Siempre en el corazón</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #14213d 0%, #1f3b6d 100%);
  color: #f8f8f8;
  padding: 24px 20px;
  margin-top: 30px;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.tagline {
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .footer-content {
    justify-content: center;
    text-align: center;
  }
}
</style>
