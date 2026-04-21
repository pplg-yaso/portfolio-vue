<template>
  <section class="services">
    <h1 class="title">Our Services</h1>
    <p class="subtitle">Kami menyediakan layanan terbaik untuk dessert favoritmu 🍓</p>

    <div class="services-container">

      <div class="service-card">
        <div class="icon">🍰</div>
        <h3>Custom Dessert</h3>
        <p>Buat dessert sesuai request untuk ulang tahun, acara, atau gift spesial.</p>
      </div>

      <div class="service-card">
        <div class="icon">🚚</div>
        <h3>Delivery Service</h3>
        <p>Kami antar pesanan langsung ke rumah kamu dengan aman dan cepat.</p>
      </div>

      <div class="service-card">
        <div class="icon">🎂</div>
        <h3>Event Catering</h3>
        <p>Layanan dessert untuk acara besar seperti wedding, party, dan meeting.</p>
      </div>

      <div class="service-card">
        <div class="icon">💖</div>
        <h3>Premium Quality</h3>
        <p>Semua dibuat dari bahan premium dengan rasa yang lembut dan fresh.</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>
.services {
  padding: 60px 10%;
  text-align: center;
  background: #fffafc;
}

.title {
  font-size: 36px;
  color: #5a3e36;
}

.subtitle {
  color: #888;
  margin-bottom: 40px;
}

/* container */
.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}

/* card */
.service-card {
  width: 260px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
}

/* icon */
.icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.service-card h3 {
  margin-bottom: 10px;
  color: #d2691e;
}

.service-card p {
  font-size: 14px;
  color: #666;
}
</style>