<template>
  <section class="services">
    <div class="container">
      <h1 class="title">Layanan Kami</h1>
      <p class="subtitle">
        Kami menyediakan berbagai layanan terbaik untuk membantu kebutuhan Anda
      </p>

      <div class="card-grid">
        <div class="card" v-for="(service, index) in services" :key="index">
          <div class="icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
          <button class="btn">Pelajari Lebih Lanjut</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Membangun website modern, responsif, dan cepat sesuai kebutuhan bisnis Anda."
  },
  {
    icon: "📱",
    title: "Mobile App",
    desc: "Pengembangan aplikasi mobile yang user-friendly dan performa tinggi."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Desain tampilan yang menarik dan pengalaman pengguna yang optimal."
  },
  {
    icon: "☁️",
    title: "Cloud & Hosting",
    desc: "Layanan deployment dan hosting yang aman serta scalable."
  },
  {
    icon: "🔒",
    title: "Security",
    desc: "Melindungi sistem dan data Anda dari ancaman digital."
  },
  {
    icon: "📊",
    title: "Digital Strategy",
    desc: "Membantu merancang strategi digital untuk pertumbuhan bisnis."
  }
];
</script>

<style scoped>
.services {
  padding: 60px 20px;
  text-align: center;
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

.container {
  max-width: 1100px;
  margin: auto;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 30px;
  margin-bottom: 10px;
}

.card h3 {
  margin: 10px 0;
}

.card p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 15px;
}

.btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 35px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: auto;
  align-self: flex-start;
}

.btn:hover {
  background: #1e40af;
}
</style>