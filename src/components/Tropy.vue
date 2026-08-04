<template>
  <section class="trophy-section">
    <div class="section-title">
      <p class="eyebrow">Trophies</p>
      <h1>Real Madrid Championship Glory</h1>
    </div>

    <div class="trophy-grid">
      <div class="trophy-card" v-for="trophy in trophies" :key="trophy.name">
        <div class="trophy-image-wrapper">
          <img
            :src="trophy.image"
            :alt="trophy.name"
            :class="{
              'la-liga-image': trophy.name === 'La Liga',
              'ucl-image': trophy.name === 'UEFA Champions League',
              'fifa-image': trophy.name === 'FIFA Club World Cup'
            }"
          />
        </div>
        <div class="trophy-info">
          <h3>{{ trophy.name }}</h3>
          <p>{{ trophy.count }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const trophies = [
  {
    name: 'UEFA Champions League',
    count: '15 Titles',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/champions?$Mobile$&fit=wrap'
  },
  {
    name: 'LaLiga',
    count: '36 Titles',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/Liga-1?$Mobile$&fit=wrap'
  },
  {
    name: 'Copa del Rey',
    count: '20 Titles',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/CopaRey?$Mobile$&fit=wrap'
  },
  {
    name: 'Spanish Super Cups',
    count: '13 Titles',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/SupercopaEspana?$Mobile$&fit=wrap'
  },
  {
    name: 'UEFA Super Cup',
    count: '6 Titles',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/SupercopaEuropa?$Mobile$&fit=wrap'
  },
  {
    name: 'FIFA Club World Cup',
    count: '5 Titles',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/MundialClubes?$Mobile$&fit=wrap'
  }
]
</script>

<style scoped>
.trophy-section {
  padding: 70px 24px 90px;
  background: linear-gradient(135deg, #fdfcf8 0%, #f5f0e6 100%);
}

.section-title {
  text-align: center;
  margin-bottom: 36px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: #d4af37;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-title h1 {
  color: #14213d;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  margin: 0;
}

.trophy-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 24px;
}

.trophy-card {
  background: #eef4ff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 360px;
}

.trophy-card:hover {
  transform: translateY(-6px);
}

.trophy-image-wrapper {
  background: #ffffff;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
}

.trophy-card img {
  width: auto;
  max-width: 90%;
  max-height: 160px;
  object-fit: contain;
  display: block;
}

.trophy-card img.la-liga-image,
.trophy-card img.ucl-image,
.trophy-card img.fifa-image {
  width: 85%;
  height: 160px;
  object-fit: contain;
  padding: 0;
}

.trophy-card img.fifa-image {
  width: 80%;
  height: 150px;
}

.trophy-info {
  padding: 18px;
  text-align: center;
}

.trophy-info h3 {
  margin: 0 0 8px;
  color: #14213d;
}

.trophy-info p {
  margin: 0;
  color: #d4af37;
  font-weight: 700;
}

@media (max-width: 900px) {
  .trophy-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 600px) {
  .trophy-grid {
    grid-template-columns: 1fr;
  }
}
</style>
