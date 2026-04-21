<template>
  <section id="about" class="about">
    <div class="container">

      <!-- FOTO -->
      <div class="about-image">
        <img :src="profile" alt="Profile" />
      </div>

      <!-- TEKS -->
      <div class="about-text">
        <p class="subtitle">ABOUT ME</p>
        <h1>Tentang Saya</h1>

        <p class="description">
          Saya adalah seorang yang memiliki minat pada bagian Frontend .
        </p>

        <p class="description">
          Saya senang belajar hal baru dan terus mengembangkan kemampuan
          untuk menciptakan website yang menarik dan fungsional.
        </p>

        <!-- DATA DIRI -->
        <div class="info">
          <div><strong>Nama:</strong> Muhamad Zaina Muktafabillah</div>
          <div><strong>Umur:</strong> 16</div>
          <div><strong>Hobi:</strong> Menggambar, Membuat content, Bersepedah</div>
          <div><strong>Cita-cita:</strong> Membuat animasi sendiri</div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0f172a, #020617); /* sama kayak home */
  color: white;
  padding: 50px 20px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  gap: 50px;
}

/* FOTO */
.about-image img {
  width: 320px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* TEKS */
.about-text {
  max-width: 500px;
}

.subtitle {
  color: #22c55e;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.about-text h1 {
  font-size: 34px;
  margin-bottom: 15px;
}

.description {
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 15px;
}

/* DATA DIRI */
.info {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  color: #cbd5f5;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .about-image img {
    width: 220px;
  }

  .info {
    grid-template-columns: 1fr;
  }
}
</style>