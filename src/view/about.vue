<template>
  <section class="about-section">
    <div class="container">
      <!-- Hero / Intro -->
      <div class="about-header text-center">
        <h1>Tentang Kami</h1>
        <p class="lead">
          FRL adalah platform inovatif yang membantu individu dan bisnis mencapai potensi maksimal melalui layanan terpercaya dan teknologi terkini.
        </p>
      </div>

      <!-- Visi & Misi -->
      <div class="row mission-vision mt-5">
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <h3>Visi Kami</h3>
              <p>
                Menjadi pemimpin di bidang [industri Anda, misal: teknologi / pendidikan / e-commerce] di Indonesia dan Asia Tenggara pada tahun 2030, dengan memberikan dampak positif bagi jutaan pengguna.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
              <h3>Misi Kami</h3>
              <p>
                Memberikan solusi berkualitas tinggi, mudah diakses, dan terjangkau sambil terus berinovasi untuk memenuhi kebutuhan masa kini dan masa depan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tim / Values -->
      <div class="values mt-5">
        <h2 class="text-center mb-5">Nilai Inti Kami</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="value in coreValues" :key="value.title">
            <div class="value-card text-center p-4">
              <div class="icon mb-3">{{ value.icon }}</div>
              <h4>{{ value.title }}</h4>
              <p>{{ value.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta text-center mt-5 py-5">
        <h3>Mari Bergabung Bersama Kami!</h3>
        <p class="mb-4">Jadilah bagian dari perjalanan kami untuk menciptakan masa depan yang lebih baik.</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">
          Hubungi Kami
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Data nilai inti (bisa diganti sesuai brand kamu)
const coreValues = ref([
  {
    title: 'Integritas',
    desc: 'Kami selalu jujur, transparan, dan bertanggung jawab dalam setiap tindakan.',
    icon: '⭐'
  },
  {
    title: 'Inovasi',
    desc: 'Terus belajar dan menciptakan solusi baru untuk masalah yang ada.',
    icon: '🚀'
  },
  {
    title: 'Kolaborasi',
    desc: 'Bekerja sama dengan pelanggan, mitra, dan tim untuk hasil terbaik.',
    icon: '🤝'
  }
])
</script>

<style scoped>
.about-section {
  padding: 6rem 0 4rem;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  min-height: 100vh;
}

.about-header h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1e40af;
}

.lead {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}

.card {
  border: none;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.value-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.icon {
  font-size: 3.5rem;
  height: 80px;
  line-height: 80px;
}

.btn-primary {
  background-color: #1e40af;
  border-color: #1e40af;
  padding: 0.8rem 2rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s;
}

.btn-primary:hover {
  background-color: #facc15;
  border-color: #facc15;
  color: #1e40af;
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2.8rem;
  }
}
</style>