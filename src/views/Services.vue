<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 20) * -1;
      const rotateY = (x - centerX) / 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
});
</script>
<template>
<section class="services">
  <div class="section-title">
    <h2>Our Services</h2>
    <p>What Can We Help You With Today?</p>
  </div>

  <div class="services-grid">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" />
      <div class="card-body">
        <h3>Residential Services</h3>
        <p>Modern home solutions with clean execution and reliability.</p>
        <button>Learn More</button>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" />
      <div class="card-body">
        <h3>Commercial Services</h3>
        <p>Scalable systems built for performance and long-term growth.</p>
        <button>Learn More</button>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0" />
      <div class="card-body">
        <h3>Maintenance & Repair</h3>
        <p>Reliable support that keeps your systems running smoothly.</p>
        <button>Learn More</button>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.services {
  padding: 120px 80px;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #28292b 50%,
    #252525 100%
  );
  color: white;
}

.section-title {
  text-align: center;
  margin-bottom: 70px;
}

.section-title h2 {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 12px;
}

.section-title p {
  color: #9ca3af;
  font-size: 17px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}

.card {
  background: #4d5055;
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.35s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(38, 42, 48, 0.25);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.card-body {
  padding: 30px;
}

.card-body h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: White;
}

.card-body p {
  color: #cbd5e1;
  margin-bottom: 20px;
  font-size: 15px;
}

.card-body button {
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
}

.card-body button:hover {
  background: #2563eb;
}

</style>