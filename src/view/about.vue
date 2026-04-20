<template>
  <div class="about container mt-5">
    <!-- Hero Banner About -->
    <div class="hero-about text-center text-white d-flex flex-column justify-content-center align-items-center mb-5">
      <h1 class="display-4">Tentang Toko Pancing Jaya</h1>
      <p class="lead">Kami menyediakan perlengkapan memancing berkualitas untuk semua level pemancing</p>
    </div>

    <!-- Content -->
    <div class="row align-items-center">
      <!-- Gambar About -->
      <div class="col-md-6 mb-4">
        <img src="https://img.freepik.com/foto-premium/hobi-memancing-dan-akhir-pekan-musim-panas-pria-berjanggut-pemancing-dengan-joran-dan-jaring-pria-menarik-joran_265223-170237.jpg?semt=ais_hybrid&w=740&q=80" 
             alt="Tentang Kami" 
             class="img-fluid rounded shadow">
      </div>

      <!-- Teks About -->
      <div class="col-md-6">
        <h2>Misi Kami</h2>
        <p>
          Toko Pancing Jaya berdiri sejak 2010 dengan tujuan menyediakan perlengkapan memancing berkualitas tinggi 
          dan harga terjangkau untuk semua pemancing, baik pemula maupun profesional.
        </p>

        <h2>Visi Kami</h2>
        <p>
          Menjadi toko perlengkapan memancing terbaik di Indonesia dengan layanan pelanggan yang ramah, 
          produk terpercaya, dan pengalaman belanja yang menyenangkan.
        </p>

        <h2>Nilai Kami</h2>
        <ul>
          <li>Kualitas: Produk terbaik untuk setiap pemancing.</li>
          <li>Layanan: Pelanggan adalah prioritas utama.</li>
          <li>Kepercayaan: Transparansi dan kejujuran dalam setiap transaksi.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.hero-about {
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80') no-repeat center center;
  background-size: cover;
  height: 250px;
  text-shadow: 2px 2px 4px #000;
  border-radius: 10px;
}

/* Sedikit padding untuk teks dan list */
.about h2 {
  margin-top: 20px;
}

.about ul {
  padding-left: 20px;
}
</style>
