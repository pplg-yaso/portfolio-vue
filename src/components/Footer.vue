<script setup>
const socialLinks = [
  { icon: 'facebook', link: '#' },
  { icon: 'twitter', link: '#' },
  { icon: 'instagram', link: '#' },
  { icon: 'youtube', link: '#' },
  { icon: 'pinterest', link: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="socials">
      <a v-for="item in socialLinks" :key="item.icon" :href="item.link">
        <i :class="`fab fa-${item.icon}`"></i>
      </a>
    </div>

    <p class="footer-text">
      Elvora’s business concept is to offer modern design and quality at the
      best price in a sustainable way. MyIrgy has grown into a creative and
      innovative digital brand.
    </p>

    <div class="footer-logo">
      Elvora
    </div>

    <div class="footer-country">
      Indonesia | ID
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #111;
  color: #aaa;
  padding: 0 20px;
  text-align: center;
  width: 100%;
  left: 0;
  right: 0;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.socials a {
  color: white;
  font-size: 20px;
  transition: opacity 0.2s ease;
}

.socials a:hover {
  opacity: 0.7;
}

.footer-text {
  max-width: 700px;
  margin: 0 auto 32px;
  font-size: 14px;
  line-height: 1.6;
}

.footer-logo {
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  margin-bottom: 12px;
}

.footer-country {
  font-size: 13px;
  color: #888;
}

.content {
  flex: 0; 
}

</style>
