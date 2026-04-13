<template>
  <div class="login-page">
    <form class="login-card" @submit.prevent="handleLogin">
      <h2>Login</h2>

      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          v-model="form.email"
          placeholder="Masukkan email"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="form.password"
          placeholder="Masukkan password"
          required
        />
      </div>

      <button type="submit">Login</button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  email: "",
  password: ""
});

const error = ref("");

const handleLogin = () => {
  if (form.email === "admin@mail.com" && form.password === "123456") {
    alert("Login berhasil!");
    error.value = "";
    // redirect bisa ditambahkan di sini
  } else {
    error.value = "Email atau password salah";
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: #fff;
  width: 350px;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.login-card h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #667eea;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #5a67d8;
}

.error {
  margin-top: 10px;
  color: red;
  font-size: 14px;
  text-align: center;
}
</style>
