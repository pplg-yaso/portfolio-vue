<template>
  <div class="contact container mt-5 mb-5">
    <!-- Hero Banner -->
    <div class="hero-contact text-center text-white d-flex flex-column justify-content-center align-items-center mb-5">
      <h1 class="display-4">Hubungi Toko Pancing Jaya</h1>
      <p class="lead">Kami siap membantu pertanyaan dan pesanan Anda</p>
    </div>

    <div class="row">
      <!-- Form Kontak -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm border-0 p-4">
          <h4 class="mb-4">Kirim Pesan</h4>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Nama</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Pesan</label>
              <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Kirim</button>
          </form>
        </div>
      </div>

      <!-- Info Toko -->
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm border-0 p-4 h-100">
          <h4 class="mb-4">Info Toko</h4>
          <p><strong>Alamat:</strong> Jl. Memancing No. 123, Jakarta, Indonesia</p>
          <p><strong>Telepon:</strong> +62 812 3456 7890</p>
          <p><strong>Email:</strong> info@tokopancingjaya.com</p>
          <p><strong>Jam Operasional:</strong> Senin - Sabtu, 08:00 - 17:00</p>

          <!-- Google Maps Embed -->
          <div class="mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126923.987654321!2d106.700!3d-6.200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e2f0f0f0f1%3A0x123456789abcdef!2sJakarta!5e0!3m2!1sid!2sid!4v1610000000000!5m2!1sid!2sid"
              width="100%"
              height="250"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    submitForm() {
      // Di sini bisa ditambahkan logic kirim ke API atau email
      alert(`Terima kasih, ${this.form.name}! Pesan Anda telah dikirim.`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
}
</script>

<style scoped>
.hero-contact {
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

.card:hover {
  transform: translateY(-3px);
  transition: 0.3s;
}
</style>
