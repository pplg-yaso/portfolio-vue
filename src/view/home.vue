<template>
  <div class="home">
    <!-- Hero Banner -->
    <div class="hero text-center text-white d-flex flex-column justify-content-center align-items-center">
      <h1 class="display-4">Selamat Datang di Toko Pancing Jaya</h1>
      <p class="lead">Temukan semua perlengkapan memancing terbaik di sini!</p>
      <a href="#products" class="btn btn-light btn-lg mt-3">Lihat Produk</a>
    </div>

    <!-- Daftar Produk -->
    <div id="products" class="container mt-5">
      <div class="row">
        <div 
          class="col-md-3 mb-4"
          v-for="product in products" 
          :key="product.id"
        >
          <div class="card h-100 shadow-sm">
            <img :src="product.img" class="card-img-top" :alt="product.name" style="height:200px; object-fit:cover;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Harga: Rp{{ product.price.toLocaleString() }}</p>
              <button class="btn btn-primary mt-auto" @click="addToCart(product)">Tambah ke Keranjang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      products: [
        { id: 1, name: "Joran Pancing", price: 250000, img: "https://down-id.img.susercontent.com/file/3c2dab762344468530828b8e63c63ac1" },
        { id: 2, name: "Reel Pancing", price: 300000, img: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lp29bbkrysmr83" },
        { id: 3, name: "Umpan Pancing", price: 50000, img: "https://img.lazcdn.com/g/p/911c3c8b16eaacdc9f04945a523f4ed3.jpg_720x720q80.jpg" },
        { id: 4, name: "Tas Pancing", price: 150000, img: "https://www.megah.co.id/cdn/shop/products/TA054copy.jpg?v=1638761950" },
      ]
    }
  },
  methods: {
    addToCart(product) {
      alert(`Produk "${product.name}" berhasil ditambahkan ke keranjang!`)
    }
  }
}
</script>

<style scoped>
/* Background halaman */
.home {
  background: url('https://www.apasih.web.id/wp-content/uploads/2018/08/mancing-di-danau-1148x574.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding-bottom: 50px;
}

/* Hero banner */
.hero {
  background: rgba(0, 0, 0, 0.5); /* semi-transparent overlay */
  height: 300px;
  margin-bottom: 40px;
}

/* Card hover effect */
.card:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
</style>
