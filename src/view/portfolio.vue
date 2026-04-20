<template>
  <div class="portfolio container mt-5">
    <!-- Hero Banner -->
    <div class="hero-portfolio text-center text-white d-flex flex-column justify-content-center align-items-center mb-5">
      <h1 class="display-4">Portfolio Toko Pancing Jaya</h1>
      <p class="lead">Lihat koleksi produk dan hasil memancing pelanggan kami</p>
    </div>

    <!-- Portfolio Grid -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="item in portfolioItems" :key="item.id">
        <div class="card shadow-sm border-0 portfolio-card h-100">
          <img :src="item.img" :alt="item.title" class="card-img-top" style="height:200px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      portfolioItems: [
        {
          id: 1,
          title: "Joran Terbaik 2026",
          description: "Joran kualitas tinggi yang cocok untuk pemancing pemula maupun profesional.",
          img: "https://filebroker-cdn.lazada.co.id/kf/Sa1c47e50fb264d909176d7273bd5f522Y.jpg"
        },
        {
          id: 2,
          title: "Reel Modern",
          description: "Reel anti karat dengan desain modern dan nyaman digunakan.",
          img: "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m0fc9hnjtibw7e"
        },
        {
          id: 3,
          title: "Perlengkapan Umpan",
          description: "Umpan alami dan sintetis yang efektif untuk berbagai jenis ikan.",
          img: "https://images.unsplash.com/photo-1621661611258-93c5d1d7653f?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 4,
          title: "Event Memancing",
          description: "Hasil foto kegiatan komunitas memancing yang kami sponsori.",
          img: "https://cdn.antaranews.com/cache/1200x800/2019/06/30/mancing-mania.jpg"
        },
        {
          id: 5,
          title: "Tas Pancing Premium",
          description: "Tas pancing nyaman dan tahan lama untuk menyimpan semua perlengkapan.",
          img: "https://images.unsplash.com/photo-1587825140708-c92b01f3e39b?auto=format&fit=crop&w=500&q=80"
        },
        {
          id: 6,
          title: "Aksesori Lengkap",
          description: "Berbagai aksesori tambahan untuk pengalaman memancing yang maksimal.",
          img: "https://images.unsplash.com/photo-1581091870621-cf61ab55df7d?auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-portfolio {
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80') no-repeat center center;
  background-size: cover;
  height: 250px;
  text-shadow: 2px 2px 4px #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Card hover effect */
.portfolio-card:hover {
  transform: translateY(-5px) scale(1.02);
  transition: 0.3s;
}
</style>
