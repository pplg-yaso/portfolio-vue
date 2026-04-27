<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <div class="footer__brand">
          <h3 class="footer__logo">HYBE <span>LABELS</span></h3>
          <p class="footer__tagline">We Believe In Music</p>
        </div>
        <div class="footer__links">
          <div class="footer__column">
            <h4>COMPANY</h4>
            <router-link to="/about">About Us</router-link>
            <router-link to="/about">History</router-link>
            <router-link to="/about">Leadership</router-link>
          </div>
          <div class="footer__column">
            <h4>ARTISTS</h4>
            <router-link to="/artist">All Artists</router-link>
            <router-link to="/artist">Labels</router-link>
            <router-link to="/artist">Audition</router-link>
          </div>
          <div class="footer__column">
            <h4>BUSINESS</h4>
            <router-link to="/service">Music</router-link>
            <router-link to="/service">Platform</router-link>
            <router-link to="/service">IP Business</router-link>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© 2024 HYBE. All Rights Reserved.</p>
        <div class="footer__social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="Facebook">FB</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 60px 40px 30px;
}

.footer__container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
  flex-wrap: wrap;
  gap: 40px;
}

.footer__brand {
  flex-shrink: 0;
}

.footer__logo {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.footer__logo span {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 4px;
  opacity: 0.8;
}

.footer__tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  letter-spacing: 1px;
}

.footer__links {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__column h4 {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.4);
}

.footer__column a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  transition: color 0.3s ease;
}

.footer__column a:hover {
  color: #fff;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 20px;
}

.footer__copyright {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer__social {
  display: flex;
  gap: 20px;
}

.footer__social a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.footer__social a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px 20px;
  }

  .footer__top {
    flex-direction: column;
    gap: 30px;
  }

  .footer__links {
    gap: 40px;
  }
}
</style>
