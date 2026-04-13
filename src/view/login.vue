<template>
  <div class="login d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
      <h3 class="text-center mb-4">Login Toko Pancing Jaya</h3>
      <form @submit.prevent="loginUser">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Masukkan email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Kata Sandi</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Masukkan kata sandi" required>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="rememberMe" v-model="rememberMe">
            <label class="form-check-label" for="rememberMe">Ingat saya</label>
          </div>
          <a href="#" class="text-decoration-none">Lupa kata sandi?</a>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
      <p class="text-center mt-3">
        Belum punya akun? <a href="#" class="text-decoration-none">Daftar</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false
    }
  },
  methods: {
    loginUser() {
      // Di sini bisa diintegrasikan dengan API backend atau Firebase Auth
      if(this.email && this.password) {
        alert(`Login berhasil!\nEmail: ${this.email}\nIngat saya: ${this.rememberMe ? 'Ya' : 'Tidak'}`);
        // Reset form
        this.email = "";
        this.password = "";
        this.rememberMe = false;
      } else {
        alert("Silakan isi email dan kata sandi");
      }
    }
  }
}
</script>

<style scoped>
.login {
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80') no-repeat center center;
  background-size: cover;
}

.card {
  border-radius: 10px;
}

.card:hover {
  transform: translateY(-3px);
  transition: 0.3s;
}
</style>
