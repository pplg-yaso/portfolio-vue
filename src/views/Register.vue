<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const loading = ref(false)
const error = ref('')

const strength = computed(() => {
  let s = 0
  if (password.value.length >= 8) s++
  if (/[A-Z]/.test(password.value)) s++
  if (/[0-9]/.test(password.value)) s++
  if (/[^A-Za-z0-9]/.test(password.value)) s++
  return s
})

const strengthText = computed(() =>
  ['Very weak', 'Weak', 'Okay', 'Strong', 'Very strong'][strength.value]
)

const strengthClass = computed(() =>
  ['bg-danger', 'bg-warning', 'bg-info', 'bg-success', 'bg-success'][strength.value]
)

const handleRegister = () => {
  error.value = ''

  if (!name.value || !email.value || !password.value || !confirm.value) {
    error.value = 'All fields are required'
    return
  }
  if (!email.value.includes('@')) {
    error.value = 'Invalid email address'
    return
  }
  if (password.value !== confirm.value) {
    error.value = 'Passwords do not match'
    return
  }

  loading.value = true

  // simulasi API
  setTimeout(() => {
    loading.value = false
    router.push('/login')
  }, 1500)
}
</script>

<template>
  <div class="register-page d-flex align-items-center justify-content-center">
    <div class="glass-card p-4 p-md-5 text-white animate-in">

      <div class="text-center mb-4">
        <div class="logo mb-3"></div>
        <h2 class="fw-bold">Create your account</h2>
        <p class="text-secondary">Join us and build something great</p>
      </div>

      <div v-if="error" class="alert alert-danger py-2 small">
        {{ error }}
      </div>

      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <input v-model="name" class="form-control form-dark" placeholder="Full name" />
        </div>

        <div class="mb-3">
          <input v-model="email" type="email" class="form-control form-dark" placeholder="Email address" />
        </div>

        <div class="mb-2">
          <input v-model="password" type="password" class="form-control form-dark" placeholder="Password" />
        </div>

        <!-- strength meter -->
        <div class="mb-3">
          <div class="progress" style="height:6px">
            <div
              class="progress-bar"
              :class="strengthClass"
              :style="{ width: (strength * 25) + '%' }"
            ></div>
          </div>
          <small class="text-secondary">{{ strengthText }}</small>
        </div>

        <div class="mb-4">
          <input v-model="confirm" type="password" class="form-control form-dark" placeholder="Confirm password" />
        </div>

        <button class="btn btn-light w-100 rounded-pill fw-semibold" :disabled="loading">
          <span v-if="!loading">Create account</span>
          <span v-else class="spinner-border spinner-border-sm"></span>
        </button>
      </form>

      <div class="text-center mt-4">
        <small class="text-secondary">
          Already have an account?
          <router-link to="/login" class="text-white fw-semibold text-decoration-none">
            Sign in
          </router-link>
        </small>
      </div>

    </div>
  </div>
</template>

<style scoped>
.register-page {
  min-height: 100vh;
  background: radial-gradient(circle at top right, #444, #0b0b0b);
}

.glass-card {
  width: 100%;
  max-width: 420px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 30px 80px rgba(0,0,0,0.7);
}

.animate-in {
  animation: fadeUp .8s ease forwards;
}

@keyframes fadeUp {
  from { opacity:0; transform: translateY(30px); }
  to { opacity:1; transform: translateY(0); }
}

.logo {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff44, #ffffff11);
  margin: auto;
}

.form-dark {
  background: rgba(255,255,255,0.08);
  border: none;
  color: white;
  padding: 12px 16px;
  border-radius: 14px;
}

.form-dark::placeholder { color:#aaa; }
.form-dark:focus {
  background: rgba(255,255,255,0.12);
  box-shadow: none;
  color:white;
}
</style>
