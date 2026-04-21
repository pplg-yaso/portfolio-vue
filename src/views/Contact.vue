<template>
  <section class="contact">
    <h1 class="title">Contact Us</h1>
    <p class="subtitle">Punya pertanyaan atau mau order? Hubungi kami 🍰</p>

    <div class="contact-container">

      <!-- FORM -->
      <form class="contact-form">
        <input type="text" placeholder="Nama Kamu" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Pesan kamu..." rows="5"></textarea>
        <button type="submit">Kirim Pesan</button>
      </form>

      <!-- INFO -->
      <div class="contact-info">
        <h3>Info Kontak</h3>
        <p>📍 Bandung, Indonesia</p>
        <p>📞 +62 812-3456-7890</p>
        <p>✉️ sweetiedessert@email.com</p>
        <p>⏰ Buka: 09.00 - 21.00</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.contact {
  padding: 60px 10%;
  text-align: center;
  background: #fffafc;
}

.title {
  font-size: 36px;
  color: #5a3e36;
}

.subtitle {
  color: #888;
  margin-bottom: 40px;
}

/* layout */
.contact-container {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

/* FORM */
.contact-form {
  background: white;
  padding: 25px;
  border-radius: 15px;
  width: 320px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
}

.contact-form button {
  background: #d2691e;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.contact-form button:hover {
  background: #a0522d;
}

/* INFO */
.contact-info {
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  width: 260px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: left;
}

.contact-info h3 {
  margin-bottom: 15px;
  color: #5a3e36;
}

.contact-info p {
  margin: 8px 0;
  color: #666;
}
</style>