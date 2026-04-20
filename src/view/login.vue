<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Logo / Brand -->
      <div class="logo text-center mb-4">
        <router-link to="/" class="brand-logo">FRL</router-link>
      </div>

      <!-- Form Card -->
      <div class="login-card">
        <h1 class="text-center mb-4">Sign in to FRL</h1>

        <form @submit.prevent="handleLogin">
          <!-- Username / Email -->
          <div class="form-group mb-3">
            <label for="username" class="form-label">Username or email address</label>
            <input
              type="text"
              id="username"
              v-model="form.username"
              class="form-control"
              required
              autofocus
              placeholder="your-username or email@example.com"
            />
          </div>

          <!-- Password -->
          <div class="form-group mb-3">
            <div class="d-flex justify-content-between align-items-center">
              <label for="password" class="form-label">Password</label>
              <router-link to="/forgot-password" class="small text-muted">
                Forgot password?
              </router-link>
            </div>
            <input
              type="password"
              id="password"
              v-model="form.password"
              class="form-control"
              required
              placeholder="••••••••"
            />
          </div>

          <!-- Remember me -->
          <div class="form-check mb-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="remember"
              v-model="form.remember"
            />
            <label class="form-check-label" for="remember">
              Remember me
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn btn-primary w-100"
            :disabled="loading"
          >
            {{ loading ? 'Signing in...' : 'Sign in' }}
          </button>
        </form>

        <!-- New to FRL? -->
        <div class="text-center mt-4">
          <p class="text-muted small">
            New to FRL? 
            <router-link to="/register" class="text-primary">
              Create an account
            </router-link>
          </p>
        </div>
      </div>

      <!-- Footer links (mirip GitHub) -->
      <div class="footer-links text-center mt-5 small text-muted">
        <a href="#" class="mx-2">Terms</a>
        <a href="#" class="mx-2">Privacy</a>
        <a href="#" class="mx-2">Security</a>
        <span class="mx-2">© 2026 FRL, Inc.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useAuthStore } from '@/stores/auth' // uncomment kalau pakai Pinia

const router = useRouter()
// const auth = useAuthStore() // kalau pakai store

const form = ref({
  username: '',
  password: '',
  remember: false
})

const loading = ref(false)

const handleLogin = () => {
  loading.value = true
  
  // Simulasi login (ganti dengan API call asli nanti)
  setTimeout(() => {
    console.log('Login attempt:', form.value)
    
    // Contoh sukses:
    // auth.login({ username: form.value.username })
    // router.push('/dashboard')
    
    // Contoh gagal:
    alert('Login demo: gunakan username apa saja & password apa saja')
    
    loading.value = false
  }, 1500)
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background-color: #f6f8fa; /* warna background GitHub-ish */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.login-container {
  width: 100%;
  max-width: 340px; /* mirip lebar form GitHub */
}

.brand-logo {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e40af;
  text-decoration: none;
  letter-spacing: -0.05em;
}

.login-card {
  background: white;
  border: 1px solid #d0d7de; /* border GitHub style */
  border-radius: 8px;
  padding: 2.5rem 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

h1 {
  font-size: 1.6rem;
  font-weight: 600;
  color: #24292e;
}

.form-label {
  font-weight: 600;
  color: #24292e;
  margin-bottom: 0.5rem;
}

.form-control {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-control:focus {
  border-color: #1e40af;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.15);
  outline: none;
}

.btn-primary {
  background-color: #1e40af;
  border-color: #1e40af;
  border-radius: 6px;
  padding: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
}

.btn-primary:hover {
  background-color: #1e3a8a;
  border-color: #1e3a8a;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.footer-links a {
  color: #57606a;
  text-decoration: none;
}

.footer-links a:hover {
  color: #1e40af;
  text-decoration: underline;
}

@media (max-width: 576px) {
  .login-card {
    padding: 2rem 1.5rem;
  }
}
</style>