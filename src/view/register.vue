<template>
  <section class="auth">
    <div class="container">

      <div class="auth-card">
        <h1>Sign Up</h1>
        <p class="subtitle">Buat akun baru</p>

        <form @submit.prevent="handleRegister">
          <input
            type="text"
            v-model="form.name"
            placeholder="Nama"
            required
          />

          <input
            type="email"
            v-model="form.email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            v-model="form.password"
            placeholder="Password"
            required
          />

          <button type="submit">Daftar</button>
        </form>

        <p class="footer">
          Sudah punya akun?
          <span @click="goLogin">Login</span>
        </p>

        <button class="google-btn" @click="loginWithGoogle">
          🔵 Daftar dengan Google
        </button>

      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  email: "",
  password: ""
});

const handleRegister = () => {
  alert("Register berhasil (dummy)");
  router.push("/login");
};

const goLogin = () => {
  router.push("/login");
};

const loginWithGoogle = () => {
  alert("Google Register (nanti pakai Firebase)");
};
</script>

<style scoped>
.auth {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
}

.container {
  width: 100%;
  max-width: 420px;
}

.auth-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  text-align: center;
}

h1 {
  color: #1e3a8a;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.google-btn {
  margin-top: 10px;
  background: white;
  color: black;
  border: 1px solid #ddd;
}

.footer {
  margin-top: 15px;
}

.footer span {
  color: #2563eb;
  cursor: pointer;
}
</style>