<template>
  <div class="contact">
    <!-- HERO -->
    <section class="hero">
      <h1>📩 Kontak Support</h1>
      <p>
        Jika ada masalah pada film atau error, silakan hubungi kontak berikut:
      </p>
    </section>

    <!-- CONTACT LIST -->
    <section class="contact-list">
      <div class="contact-card" v-for="contact in contacts" :key="contact.id">
        <h3>{{ contact.name }}</h3>
        <p><strong>Role:</strong> {{ contact.role }}</p>
        <p><strong>Email:</strong> <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
        <p v-if="contact.phone"><strong>Phone:</strong> {{ contact.phone }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Daftar kontak support
const contacts = ref([
  {
    id: 1,
    name: "Admin FilmApp",
    role: "Administrator",
    email: "admin@filmapp.com",
    phone: "+62 812 3456 7890",
  },
  {
    id: 2,
    name: "Support Teknis",
    role: "Technical Support",
    email: "support@filmapp.com",
    phone: "+62 813 9876 5432",
  },
  {
    id: 3,
    name: "Developer",
    role: "Frontend Developer",
    email: "dev@filmapp.com",
    phone: "",
  },
  {
    id: 4,
    name: "Database Manager",
    role: "Database Support",
    email: "db@filmapp.com",
    phone: "+62 811 2233 4455",
  },
]);
</script>

<style scoped>
/* JARAK AMAN DARI NAVBAR & FOOTER */
.contact {
  padding-top: 100px;
  padding-bottom: 80px;
  min-height: 100vh;
  background: #0f172a;
  color: #fff;
  font-family: "Inter", sans-serif;
}

/* HERO */
.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero p {
  font-weight: bold;
  color: #fff;
}

/* CONTACT LIST */
.contact-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0 2rem;
}

/* CONTACT CARD */
.contact-card {
  background: #1e293b;
  padding: 1.8rem;
  border-radius: 16px;
  transition: transform 0.3s, box-shadow 0.3s;
  font-weight: bold;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.contact-card a {
  color: #38bdf8; /* warna link biru */
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}
</style>
