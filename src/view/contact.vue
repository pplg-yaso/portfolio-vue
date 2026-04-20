<template>
  <section class="contact">
    <div class="container">
      <h1 class="title">Hubungi Kami</h1>
      <p class="subtitle">
        Punya pertanyaan atau ingin bekerja sama? Silakan hubungi kami
      </p>

      <div class="contact-wrapper">
        
        <!-- Form -->
        <div class="contact-form">
          <h3>Kirim Pesan</h3>
          <form @submit.prevent="handleSubmit">
            <input type="text" v-model="form.name" placeholder="Nama" required />
            <input type="email" v-model="form.email" placeholder="Email" required />
            <textarea v-model="form.message" placeholder="Pesan" required></textarea>
            <button type="submit">Kirim</button>
          </form>
        </div>

        <!-- Info -->
        <div class="contact-info">
          <h3>Info Kontak</h3>
          <p>📍 Jakarta, Indonesia</p>
          <p>📧 email@domain.com</p>
          <p>📞 +62 812-3456-7890</p>

          <div class="socials">
            <span>🌐 Website</span>
            <span>💼 LinkedIn</span>
            <span>📷 Instagram</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: ""
});

const handleSubmit = () => {
  alert(`Terima kasih ${form.name}, pesan kamu sudah dikirim!`);
  
  // reset form
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<style scoped>
.contact {
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #1e3a8a;
}

.subtitle {
  margin: 10px 0 40px;
  color: #6b7280;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* FORM */
.contact-form {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.contact-form h3 {
  margin-bottom: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.contact-form textarea {
  min-height: 100px;
}

.contact-form button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
}

.contact-form button:hover {
  background: #1e40af;
}

/* INFO */
.contact-info {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: left;
}

.contact-info h3 {
  margin-bottom: 15px;
}

.socials {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #374151;
}
</style>