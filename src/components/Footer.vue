<script setup> 
  const links = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Services', path: '/services'},
    {name: 'Portfolio', path: '/Portfolio'},
    {name: 'Contact', path: '/contact'}
  ]
</script>

<template> 
  <footer class="footer">
    <div class="footer-container">
      <!-- brand section -->
      <div class="footer-brand">
        <h3 class="brand-name">MyPortfolio</h3>
        <p class="brand-desc">Personal portfolio showcasing projects, skills, and learning journey
          in web development.
        </p>
      </div>
    

  <!-- Quick LInks -->
      <div class="footer-links">
        <h4 class="footer-title">Quick Links</h4>
        <ul>
          <li v-for="item in links" :key="item.name">
            <RouterLink
            :to="item.path"
            class="item-link">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- contact / social -->
      <div class="footer-contact">
        <h4 class="footer-title">Contact</h4>
          <ul>
            <li>
              <a href="https://github.com/Ahmad-SHD07" class="footer-link">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ahmad-solehudin-402066352/?locale=en_US" class="footer-link">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/amadddd07_/" class="footer-link">Instagram</a>
            </li>
          </ul>
      </div>

      <!-- copyright -->
      <div class="footer-bottom">
        © 2026 MyPortfolio. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1f1833;
  color: #d6d6d6;
  padding: 48px 0 24px;
  font-size: 0.9rem;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.brand-name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.brand-desc {
  line-height: 1.6;
  color: #bfbfbf;
}

.footer-title {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 12px;
}

.footer-links ul, .footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li, .footer-contact li {
  margin-bottom: 8px;
}

.footer-link {
  color: #d6d6d6;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ff4d4d;
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 16px;
  text-align: center;
  font-size: 0.8rem;
  color: #a9a9a9;
  border-top: 1px solid rgba(255, 77, 77, 0.15);
}

</style>