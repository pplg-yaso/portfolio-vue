<template>
  <section class="contact">
    <h1>CONTACT</h1>

    <div class="contact-wrapper">

      <!-- LEFT INFO -->
      <div class="info">
        <h3>Our Store</h3>
        <p>Jl. Tetangga No. 12, Bandung</p>

        <h3>Opening Hours</h3>
        <p>Monday - Sunday</p>
        <p>08:00 - 22:00</p>

        <h3>Contact</h3>
        <p>Email: hello@tetanggakopi.com</p>
        <p>Phone: +62 812 3456 7890</p>
      </div>

      <!-- RIGHT FORM -->
      <form class="form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>

    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #f5f1eb;
  min-height: 100vh;
  padding: 80px 100px;
}

h1 {
  text-align: center;
  font-size: 48px;
  margin-bottom: 60px;
  letter-spacing: 3px;
}

.contact-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 80px;
}

.info {
  flex: 1;
}

.info h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}

.info p {
  margin-bottom: 6px;
  font-size: 15px;
}

.form {
  flex: 1;
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  background: white;
  font-size: 14px;
}

textarea {
  height: 120px;
  resize: none;
}

button {
  padding: 12px;
  background: #2f2f2f;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background: black;
}
</style>
