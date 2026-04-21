<template>
  <section class="hero">
    <div class="glass-card">
      <h2>🍰 Selamat Datang di <span class="brand">Sweetie Dessert</span></h2>
      <p>
        Sweetie Dessert menyajikan berbagai pilihan dessert modern seperti 
        <strong>Strawberry Milk Cream</strong>, <strong>Cheesecake</strong>, dan Dessert Premium lainnya. 
        Setiap produk dibuat dengan cinta dari bahan berkualitas tinggi untuk menjaga rasa yang lembut dan manis yang pas.
      </p>
      <button class="cta-button">Pesan Sekarang ✨</button>
    </div>
  </section>
</template>

<style scoped>
/* Import font yang lucu/estetik (opsional, bisa ganti di main.css) */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Sacramento&display=swap');

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-image: url('https://i.pinimg.com/1200x/a2/80/bd/a280bd4a3bf583ff9302c8bf21bb6375.jpg');
  background-size: cover;
  background-position: center;
  font-family: 'Quicksand', sans-serif;
}

/* Overlay biar gambar background agak lembut (blur sedikit) */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 192, 203, 0.2); /* Sentuhan warna pink transparan */
  backdrop-filter: blur(2px);
}

/* Kartu transparan biar tulisan gampang dibaca tapi tetap estetik */
.glass-card {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.85); /* Putih susu transparan */
  border-radius: 30px; /* Sudut membulat biar keliatan soft */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
  animation: float 3s ease-in-out infinite; /* Animasi melayang */
}

.brand {
  display: block;
  font-family: 'Sacramento', cursive; /* Font tulisan tangan */
  font-size: 3.5rem;
  color: #d63384;
  margin-top: 10px;
}

h2 {
  color: #5d4037;
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

p {
  color: #795548;
  line-height: 1.8;
  font-size: 1.1rem;
}

strong {
  color: #ad1457;
}

/* Tombol CTA yang gemas */
.cta-button {
  margin-top: 30px;
  padding: 12px 30px;
  background-color: #ff85a1;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(255, 133, 161, 0.4);
}

.cta-button:hover {
  background-color: #f75c7e;
  transform: scale(1.05);
}

/* Animasi melayang biar lebih hidup */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

/* Responsif buat HP */
@media (max-width: 600px) {
  .brand { font-size: 2.5rem; }
  .glass-card { padding: 25px; }
}
</style>