<script setup>
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">

      <!-- TITLE -->
      <div class="title">
        <p class="subtitle">CONTACT</p>
        <h1>Hubungi Saya</h1>
        <p class="desc">Silakan hubungi saya melalui platform berikut</p>
      </div>

      <!-- SOCIAL -->
      <div class="socials">

        <a href="https://wa.me/6283172701572" target="_blank" class="card">
          <h3>WhatsApp</h3>
          <p>Chat langsung dengan saya</p>
        </a>

        <a href="https://instagram.com/username" target="_blank" class="card">
          <h3>Instagram</h3>
          <p>Lihat profil saya</p>
        </a>

        <a href="https://github.com/zee1140" target="_blank" class="card">
          <h3>GitHub</h3>
          <p>Lihat project saya</p>
        </a>

        <a href="mailto:muhamdzainamb@gmail.com" class="card">
          <h3>Email</h3>
          <p>Kirim email ke saya</p>
        </a>

      </div>

    </div>
  </section>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
  padding: 60px 20px;
  display: flex;
  align-items: center;
}

.container {
  max-width: 900px;
  margin: auto;
  width: 100%;
}

/* TITLE */
.title {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  color: #22c55e;
  letter-spacing: 3px;
}

.desc {
  color: #94a3b8;
  margin-top: 10px;
}

/* SOCIAL GRID */
.socials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* CARD */
.card {
  background: #020617;
  padding: 25px;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  border: 1px solid #1e293b;
  transition: 0.3s;
}

.card h3 {
  margin-bottom: 5px;
}

.card p {
  color: #94a3b8;
  font-size: 14px;
}

/* HOVER */
.card:hover {
  transform: translateY(-5px);
  border-color: #22c55e;
}
</style>