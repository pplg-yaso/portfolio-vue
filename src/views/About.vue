<template>
  <div class="about">
    <div class="glow-bg"></div>

    <section class="hero">
      <div class="badge">🎬 Discover Our Story</div>
      <h1>Tentang <span>MovieApp</span></h1>
      <p>
        Lebih dari sekadar daftar film. Kami adalah jembatan antara kamu dan pengalaman sinematik yang tak terlupakan.
      </p>
    </section>

    <section class="content">
      <div class="card main-info">
        <div class="card-icon">🚀</div>
        <h2>Apa itu MovieApp?</h2>
        <p>
          MovieApp adalah platform modern berbasis <strong>Vue 3</strong> yang dirancang khusus untuk para pecinta sinema. Kami mengkurasi film-film terbaik dari berbagai dekade dan genre.
        </p>
        <p>
          Dengan teknologi pencarian cerdas, kami memastikan kamu tidak akan menghabiskan waktu hanya untuk memilih tontonan.
        </p>
      </div>

      <div class="stats">
        <div class="stat-box">
          <div class="stat-circle">
            <h3>1000+</h3>
          </div>
          <p>Film Tersedia</p>
        </div>
        <div class="stat-box">
          <div class="stat-circle">
            <h3>9.0+</h3>
          </div>
          <p>Rating Tertinggi</p>
        </div>
        <div class="stat-box">
          <div class="stat-circle">
            <h3>Global</h3>
          </div>
          <p>Akses Dunia</p>
        </div>
      </div>

      <div class="vision-mission-grid">
        <div class="card glass-card">
          <h3>👁️ Visi</h3>
          <p>Menjadi panduan utama bagi setiap orang dalam mengeksplorasi dunia perfilman global dengan cara yang paling menyenangkan.</p>
        </div>
        <div class="card glass-card">
          <h3>🎯 Misi</h3>
          <p>Menyediakan data film yang akurat, antarmuka yang responsif, dan rekomendasi yang dipersonalisasi untuk setiap pengguna.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Container & Background */
.about {
  padding-top: 120px;
  padding-bottom: 100px;
  min-height: 100vh;
  background: #020617; /* Navy yang lebih gelap */
  color: #f8fafc;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow: hidden;
}

.glow-bg {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* Hero Section */
.hero {
  text-align: center;
  margin-bottom: 5rem;
  padding: 0 1rem;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 100px;
  color: #38bdf8;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero h1 span {
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  color: #94a3b8;
  font-size: 1.2rem;
  max-width: 700px;
  margin: auto;
  line-height: 1.6;
}

/* Content & Cards */
.content {
  padding: 0 2rem;
  max-width: 1100px;
  margin: auto;
  z-index: 2;
  position: relative;
}

.card {
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 24px;
  margin-bottom: 2rem;
  transition: all 0.4s ease;
}

.main-info {
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.main-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* Stats Section */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.stat-box {
  background: rgba(30, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-10px);
  background: rgba(30, 41, 59, 0.8);
  border-color: #38bdf8;
}

.stat-circle {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #38bdf8;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
}

.stat-box h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

/* Vision & Mission Grid */
.vision-mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-card h3 {
  color: #38bdf8;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

/* Responsif */
@media (max-width: 768px) {
  .vision-mission-grid {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>