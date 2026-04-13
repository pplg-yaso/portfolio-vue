<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const remember = ref(false)
const loading = ref(false)
const error = ref('')

const handleLogin = () => {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Email and password are required'
    return
  }

  if (!email.value.includes('@')) {
    error.value = 'Invalid email address'
    return
  }

  loading.value = true

  // simulasi API
  setTimeout(() => {
    loading.value = false

    if (remember.value) {
      localStorage.setItem('user_email', email.value)
    }

    router.push('/') // redirect setelah login
  }, 1500)
}
</script>

<template>
  <div class="login-wrapper d-flex justify-content-center align-items-center">
    <div class="login-card text-white animate-in">

      <div class="mb-4">
        <router-link to="/" class="btn btn-sm btn-outline-light rounded-pill">
          ← Back
        </router-link>
      </div>

      <div class="text-center mb-4">
        <div class="logo mx-auto mb-3"></div>
        <h3 class="fw-bold">Yooo, welcome back!</h3>
        <p class="text-secondary">
          First time here?
          <router-link to="/register" class="text-white fw-semibold">
            Sign up for free
          </router-link>
        </p>
      </div>

      <div v-if="error" class="alert alert-danger py-2 small">
        {{ error }}
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control form-dark"
            placeholder="Your email"
          />
        </div>

        <div class="mb-3">
          <input
            v-model="password"
            type="password"
            class="form-control form-dark"
            placeholder="••••••••"
          />
        </div>

        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="form-check">
            <input
              v-model="remember"
              class="form-check-input"
              type="checkbox"
              id="remember"
            />
            <label class="form-check-label text-secondary" for="remember">
              Remember me
            </label>
          </div>
          <a href="#" class="text-secondary small">Forgot password?</a>
        </div>

        <button
          class="btn btn-light w-100 rounded-pill fw-semibold mb-3"
          :disabled="loading"
        >
          <span v-if="!loading">Sign in</span>
          <span v-else class="spinner-border spinner-border-sm"></span>
        </button>
      </form>

      <small class="text-secondary d-block mb-3 text-center">
        Sign in using magic link
      </small>

      <div class="divider mb-3">or</div>

      <button class="btn btn-outline-light w-100 rounded-pill mb-4">
        Single sign-on (SSO)
      </button>

      <small class="text-secondary text-center d-block">
        By continuing, you agree to our
        <a href="#" class="text-white">Terms</a> &
        <a href="#" class="text-white">Privacy Policy</a>
      </small>

    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  background: radial-gradient(circle at top right, #555, #0b0b0b);
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 40px 32px;
  border-radius: 22px;
  background: rgba(20,20,20,0.75);
  backdrop-filter: blur(18px);
  box-shadow: 0 30px 80px rgba(0,0,0,0.7);
}

.animate-in {
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: conic-gradient(from 180deg, #aaa, #333);
}

.form-dark {
  background: rgba(30,30,30,0.9);
  border: 1px solid transparent;
  color: white;
  border-radius: 14px;
  padding: 12px 16px;
}

.form-dark:focus {
  border-color: #555;
  box-shadow: none;
}

.divider {
  display: flex;
  align-items: center;
  color: #777;
  font-size: 14px;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #333;
  margin: 0 10px;
}
</style>
