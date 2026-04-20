<template>
  <section class="contact">
    <div class="container">
      <h1>Contact Me</h1>
      <p class="subtitle">
        Silakan hubungi saya melalui form di bawah ini 👇
      </p>

      <div class="content">
        <!-- FORM -->
        <form @submit.prevent="handleSubmit" class="form">
          <input
            type="text"
            v-model="name"
            placeholder="Nama"
            required
          />

          <input
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />

          <textarea
            v-model="message"
            placeholder="Pesan"
            rows="5"
            required
          ></textarea>

          <button type="submit">Kirim Pesan</button>
        </form>

        <!-- INFO -->
        <div class="info">
          <h2>Info Kontak</h2>
          <p>Email: kamu@email.com</p>
          <p>Phone: +62 812-xxxx-xxxx</p>
          <p>Lokasi: Indonesia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    }
  },
  methods: {
    handleSubmit() {
      alert(`Pesan dari ${this.name} berhasil dikirim!`)

      // reset form
      this.name = ""
      this.email = ""
      this.message = ""
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 60px 20px;
  background: #ffffff;
}

.container {
  max-width: 1000px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  margin-bottom: 40px;
  color: #666;
}

.content {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form input,
.form textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.form button {
  padding: 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.form button:hover {
  background: #369870;
}

.info {
  flex: 1;
}

.info h2 {
  margin-bottom: 15px;
}
</style>