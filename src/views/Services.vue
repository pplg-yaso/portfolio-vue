<template>
  <section id="Services" class="Services">
    <div class="container">

      <!-- TITLE -->
      <div class="title">
        <p class="subtitle">LAYANAN</p>
        <h1>Apa yang Saya Tawarkan</h1>
      </div>

      <!-- GRID -->
      <div class="grid">

        <div class="card">
          <h3>Web Development</h3>
          <p>Membuat website modern, cepat, dan responsive sesuai kebutuhan.</p>
        </div>

        <div class="card">
          <h3>UI/UX Design</h3>
          <p>Mendesain tampilan website yang menarik dan mudah digunakan.</p>
        </div>

        <div class="card">
          <h3>Landing Page</h3>
          <p>Membuat halaman khusus untuk meningkatkan konversi dan promosi.</p>
        </div>

        <div class="card">
          <h3>Maintenance</h3>
          <p>Perawatan dan update website agar tetap optimal dan aman.</p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.Services {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
  padding: 60px 20px;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1100px;
  margin: auto;
  width: 100%;
}

/* TITLE */
.title {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  color: #22c55e;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.title h1 {
  font-size: 32px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* CARD */
.card {
  background: #020617;
  padding: 25px;
  border-radius: 15px;
  transition: 0.3s;
  border: 1px solid #1e293b;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  color: #94a3b8;
  line-height: 1.5;
}

/* HOVER */
.card:hover {
  transform: translateY(-5px);
  border-color: #22c55e;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .title h1 {
    font-size: 26px;
  }
}
</style>