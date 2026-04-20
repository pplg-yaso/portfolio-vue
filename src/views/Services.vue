<script setup>
</script>

<template>
  <div class="services">

    <section class="hero-services">
      <h1>Layanan Bayern-Munchen</h1>
      <p class="tagline">Jelajahi semua yang ditawarkan klub 🔴⚪</p>
    </section>

    <section class="section">
      <div class="cards">
        <div class="card">
          <h3>Akademi Pemain</h3>
          <p>Tempat lahirnya talenta masa depan Bayern yang siap bersaing di level tertinggi.</p>
        </div>
        <div class="card">
          <h3>Tour Stadion</h3>
          <p>Rasakan pengalaman Allianz Arena, dari ruang ganti hingga museum klub, dalam tur eksklusif.</p>
        </div>
        <div class="card">
          <h3>Merchandise</h3>
          <p>Dapatkan jersey dan perlengkapan resmi Bayern langsung dari toko resmi klub.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.services {
  font-family: Arial, sans-serif;
  background-color: #fdf5f5;
}

.hero-services {
  background: linear-gradient(135deg, #c8102e, #9b0f24);
  color: white;
  text-align: center;
  padding: 60px 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.hero-services h1 {
  margin-bottom: 15px;
  font-size: 3rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.hero-services .tagline {
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.card {
  background-color: white;
  padding: 25px 15px;
  border-radius: 15px;
  text-align: center;
  max-width: 280px;
  margin: auto;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.2);
}

.card h3 {
  margin-bottom: 12px;
  color: #c8102e;
  font-size: 1.2rem;
}

.card p {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
