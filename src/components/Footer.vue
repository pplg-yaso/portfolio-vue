<template>
  <footer class="starwars-footer">
    <div class="footer-content">
      <p class="mb-0">&copy; 2026 Star Wars. All rights reserved.</p>
      
      <!-- Optional: tambahan link legal -->
      <div class="footer-links">
        <a href="#" class="footer-link">Privacy Policy</a>
        <a href="#" class="footer-link">Terms of Service</a>
        <a href="#" class="footer-link">Contact Lucasfilm</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Composition API (Vue 3) - tidak perlu export default
</script>

<style scoped>
.starwars-footer {
  background-color: #0a0a0a;
  border-top: 3px solid #b8860b;           /* garis emas tipis di atas */
  padding: 2.5rem 0 2rem;
  width: 100%;                             /* full width */
  margin-top: auto;                        /* agar sticky di bawah jika pakai flex */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.footer-content p {
  color: #aaaaaa;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

/* Footer Links */
.footer-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  color: #d4af37;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #f0c040;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
}

/* Responsive */
@media (max-width: 576px) {
  .footer-links {
    gap: 1.2rem;
    font-size: 0.9rem;
  }
  
  .starwars-footer {
    padding: 2rem 0 1.5rem;
  }
}
</style>