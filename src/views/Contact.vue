<script setup>
</script>

<template>
  <div class="contact">

    <section class="hero-contact">
      <div class="hero-text">
        <h1>Hubungi Kami</h1>
        <p class="tagline">Tanyakan apa saja tentang Bayern München 🔴⚪</p>
      </div>
    </section>

    <section class="section">
      <h2>Kontak Klub</h2>
      <p>
        Jika kamu ingin menghubungi Bayern München, baik untuk pertanyaan terkait klub, suporter, atau media,
        berikut informasi kontak resmi yang bisa digunakan.
      </p>
      <p>
        Bayern selalu terbuka untuk komunikasi, menjaga transparansi dan hubungan baik dengan suporter di seluruh dunia.
      </p>
    </section>

    <section class="section">
      <h2>Kirim Pesan</h2>
      <form class="contact-form">
        <label for="name">Nama:</label>
        <input type="text" id="name" placeholder="Masukkan nama kamu">

        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Masukkan email kamu">

        <label for="message">Pesan:</label>
        <textarea id="message" placeholder="Tulis pesanmu di sini"></textarea>

        <button type="submit">Kirim</button>
      </form>
    </section>

    <section class="section red">
      <h2>Alamat & Sosial Media</h2>
      <ul>
        <li>🏟 Allianz Arena, München, Jerman</li>
        <li>📧 info@fcbayern.com</li>
        <li>🌐 www.fcbayern.com</li>
        <li>📱 Instagram / Twitter / Facebook: @FCBayern</li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.contact {
  font-family: Arial, sans-serif;
  background-color: #fdf5f5;
}

.hero-contact {
  background: linear-gradient(135deg, #c8102e, #9b0f24);
  color: white;
  padding: 60px 20px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.hero-text .tagline {
  font-size: 1.1rem;
  max-width: 500px;
  margin: auto;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}

.section h2 {
  margin-bottom: 20px;
  color: #c8102e;
}

.section p {
  margin-bottom: 16px;
  line-height: 1.8;
  color: #333;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 2px solid #c8102e;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  background-color: #c8102e;
  color: white;
  padding: 12px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.contact-form button:hover {
  background-color: #9b0f24;
}

.section.red {
  background: #c8102e;
  color: white;
  margin-top: 40px;
  padding: 30px 20px;
}

.section.red h2 {
  color: white;
}

.section.red li {
  margin-bottom: 8px;
}
</style>
