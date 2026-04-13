<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  company: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const sendMessage = () => {
  alert("Pesan berhasil dikirim 🚀")
}
</script>

<template>
  <section class="contact-section">
    <div class="container py-5">

      <!-- HERO TEXT -->
      <div class="text-center text-white mb-5">
        <h1 class="fw-bold display-5">Contact Us</h1>
        <p class="opacity-75">We are ready to provide the right solution for you</p>
      </div>

      <!-- CARD -->
      <div class="contact-card row g-0">

        <!-- LEFT SIDE -->
        <div class="col-lg-5 left-side p-5">
          <h3 class="fw-bold mb-4">Get in touch</h3>
          <p class="text-muted mb-4">
            Feel free to contact us for any question or partnership.
          </p>

          <div class="info-item">
            <div class="icon"><i class="bi bi-geo-alt"></i></div>
            <div>
              <h6>Head Office</h6>
              <p>Jakarta - Indonesia</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon"><i class="bi bi-envelope"></i></div>
            <div>
              <h6>Email Us</h6>
              <p>support@yourdomain.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon"><i class="bi bi-telephone"></i></div>
            <div>
              <h6>Call Us</h6>
              <p>+62 812 3456 7890</p>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="col-lg-7 right-side p-5">
          <h3 class="fw-bold mb-4">Send us a message</h3>

          <form @submit.prevent="sendMessage">
            <div class="row">
              <div class="col-md-6 mb-3">
                <input type="text" class="form-control custom-input" placeholder="Name" v-model="form.name">
              </div>
              <div class="col-md-6 mb-3">
                <input type="text" class="form-control custom-input" placeholder="Company" v-model="form.company">
              </div>
              <div class="col-md-6 mb-3">
                <input type="text" class="form-control custom-input" placeholder="Phone" v-model="form.phone">
              </div>
              <div class="col-md-6 mb-3">
                <input type="email" class="form-control custom-input" placeholder="Email" v-model="form.email">
              </div>
              <div class="col-12 mb-3">
                <input type="text" class="form-control custom-input" placeholder="Subject" v-model="form.subject">
              </div>
              <div class="col-12 mb-4">
                <textarea rows="4" class="form-control custom-input" placeholder="Message" v-model="form.message"></textarea>
              </div>
            </div>

            <button class="btn send-btn w-100">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* SECTION BACKGROUND */
.contact-section {
  background: linear-gradient(135deg, #000000, #303131, #1d1e1f);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* CARD STYLE */
.contact-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  animation: fadeUp 1s ease;
}

/* LEFT SIDE */
.left-side {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.3s;
}

.info-item:hover {
  transform: translateX(5px);
}

.icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 15px;
  color: white;
  font-size: 18px;
}

/* RIGHT SIDE */
.right-side {
  background: white;
}

/* INPUT STYLE */
.custom-input {
  border-radius: 12px;
  border: none;
  background: #f3f6fa;
  padding: 12px;
  transition: 0.3s;
}

.custom-input:focus {
  box-shadow: 0 0 0 3px rgba(0,114,255,0.2);
  background: white;
}

/* BUTTON */
.send-btn {
  border-radius: 50px;
  padding: 12px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  color: white;
  border: none;
  font-weight: bold;
  transition: 0.3s;
}

.send-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,114,255,0.4);
}

/* ANIMATION */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
