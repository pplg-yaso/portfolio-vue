<template>
  <div class="about">
    <section class="hero">
      <h1>🎬 Tentang MovieApp</h1>
      <p>
        Platform rekomendasi film terbaik untuk menemukan tontonan favoritmu.
      </p>
    </section>

    <section class="content">
      <div class="card">
        <h2>Apa itu MovieApp?</h2>
        <p>
          MovieApp adalah aplikasi berbasis Vue yang menampilkan daftar film
          populer dari berbagai genre seperti Action, Drama, Sci-Fi, Fantasy,
          dan banyak lagi.
        </p>
        <p>
          Kami membantu pengguna menemukan film terbaik berdasarkan rating,
          genre, dan popularitas.
        </p>
      </div>

      <div class="stats">
        <div class="stat-box">
          <h3>🎥 1000+</h3>
          <p>Film Tersedia</p>
        </div>
        <div class="stat-box">
          <h3>⭐ 9.0+</h3>
          <p>Rating Tertinggi</p>
        </div>
        <div class="stat-box">
          <h3>🌎 Global</h3>
          <p>Film dari Seluruh Dunia</p>
        </div>
      </div>

      <div class="card">
        <h2>Visi & Misi</h2>
        <p><strong>Visi:</strong> Menjadi platform film terbaik dan terlengkap.</p>
        <p>
          <strong>Misi:</strong>
          Memberikan informasi film yang akurat, cepat, dan mudah diakses oleh semua pengguna.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding-top: 100px;
  padding-bottom: 80px;
  min-height: 100vh;
  background: #0f172a;
  font-family: "Inter", sans-serif;
  color: #fff; 
  font-weight: bold; 
}


.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: bold;
}

.hero p {
  color: #fff;
  font-weight: bold;
  max-width: 600px;
  margin: auto;
}


.content {
  padding: 0 2rem;
  max-width: 1000px;
  margin: auto;
}


.card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  color: #fff; /* teks putih */
  font-weight: bold; /* teks tebal */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.stat-box {
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
  color: #fff;
  font-weight: bold;
}

.stat-box:hover {
  background: #334155;
  transform: scale(1.05);
}

.stat-box h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: bold;
}

.stat-box p {
  color: #fff;
  font-weight: bold;
}
</style>
