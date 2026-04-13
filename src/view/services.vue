<template>
  <div class="services container mt-5">
    <!-- Hero Banner -->
    <div class="hero-services text-center text-white d-flex flex-column justify-content-center align-items-center mb-5">
      <h1 class="display-4">Layanan Toko Pancing Jaya</h1>
      <p class="lead">Kami menyediakan berbagai layanan untuk memudahkan pengalaman memancing Anda</p>
    </div>

    <!-- Services Cards -->
    <div class="row text-center">
      <div class="col-md-4 mb-4" v-for="service in services" :key="service.id">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <div class="mb-3">
              <i :class="service.icon" style="font-size: 3rem; color: #1e90ff;"></i>
            </div>
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Penjualan Perlengkapan Memancing",
          description: "Menjual joran, reel, umpan, dan semua perlengkapan memancing berkualitas.",
          icon: "bi bi-basket"
        },
        {
          id: 2,
          title: "Konsultasi Memancing",
          description: "Tim ahli kami siap memberikan tips dan trik memancing untuk pemula maupun profesional.",
          icon: "bi bi-chat-left-text"
        },
        {
          id: 3,
          title: "Pengiriman Cepat",
          description: "Kami menyediakan layanan pengiriman cepat ke seluruh Indonesia dengan packing aman.",
          icon: "bi bi-truck"
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-services {
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
.card:hover {
  transform: translateY(-5px);
  transition: 0.3s;
}
</style>
