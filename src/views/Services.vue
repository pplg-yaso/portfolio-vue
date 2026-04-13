<script setup></script>
<template>
    <section class="services">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🏠</div>
          <h3>Home Construction</h3>
          <p>Full-service residential construction from ground up</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🛠️</div>
          <h3>Renovation</h3>
          <p>Transform your existing space with expert renovation</p>
        </div>
        <div class="service-card">
          <div class="service-icon">🎨</div>
          <h3>Interior Design</h3>
          <p>Modern interior design tailored to your style</p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.services {
  padding: 100px 40px;
  background: #f8f9fa;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;
  color: #2c3e50;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.service-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #2c3e50;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}
</style>