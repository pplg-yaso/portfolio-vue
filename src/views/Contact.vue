<script setup>
</script>

<template>
      <section class="contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions about our services or process?</p>
        <a href="mailto:info@homah.com" class="contact-link">Contact Our Team →</a>
      </section>
</template>

<style scoped>
.contact-section {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  margin-bottom: 60px;
}

.contact-section h2 {
  font-size: 32px;
  color: black;
  margin-bottom: 15px;
}

.contact-section p {
  color: black;
  margin-bottom: 25px;
  font-size: 18px;
}

.contact-link {
  display: inline-block;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 24px;
  border: 2px solid white;
  border-radius: 50px;
  transition: all 0.3s;
}

.contact-link:hover {
  background: #667eea;
  color: white;
}
</style>
