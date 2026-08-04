<template>
  <section class="players-section">
    <div class="section-title">
      <p class="eyebrow">Players</p>
      <h1>Real Madrid Stars</h1>
    </div>

    <div class="players-grid">
      <div class="player-card" v-for="player in players" :key="player.name">
        <img :src="player.image" :alt="player.name" />
        <div class="player-info">
          <h3>{{ player.name }}</h3>
          <p>{{ player.position }}</p>
          <span>{{ player.nationality }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const players = [
  {
    name: 'Vinícius Jr',
    position: 'Forward',
    nationality: 'Brazil',
    image: 'https://assets.realmadrid.com/is/image/realmadrid/VINI_EQUIPO_CARITA_550X650_26-27?$Mobile$&fit=wrap&wid=420'
  },
  {
    name: 'Jude Bellingham',
    position: 'Midfielder',
    nationality: 'England',
    image: 'https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/jude-bellingham/assets/BELLINGHAM_EQUIPO_CARITA_550X650_26-27.png'
  },
  {
    name: 'Kylian Mbappé',
    position: 'Forward',
    nationality: 'France',
    image: 'https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/mbappe/assets/MBAPPE_EQUIPO_CARITA_550X650_26-27.png'
  },
  {
    name: 'Valverde',
    position: 'Midfielder',
    nationality: 'Uruguay',
    image: 'https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/federico-santiago-valverde-dipetta/assets/VALVERDE_EQUIPO_CARITA_550X650_26-27_v2.png'
  },
  {
    name: 'Dumfries',
    position: 'Defender',
    nationality: 'Netherlands',
    image: 'https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/denzel-dumfries/assets/DUMFRIES_EQUIPO_CARITA_380x501%20%E2%80%93%209%201.png'
  },
  {
    name: 'cucurella',
    position: 'Defender',
    nationality: 'Spain',
    image: 'https://publish.realmadrid.com/content/dam/portals/realmadrid-com/es-es/sports/football/3kq9cckrnlogidldtdie2fkbl/players/cucurella/fotos/CUCURELLA_EQUIPO_CARITA_550X650%20%E2%80%93%202.png'
  }
]
</script>

<style scoped>
.players-section {
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

.players-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 24px;
}

.player-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.player-card:hover {
  transform: translateY(-6px);
}

.player-card img {
  width: 100%;
  height: 280px;
  object-fit: contain;
  display: block;
  background: #f3f4f6;
  padding: 10px;
}

.player-info {
  padding: 18px;
}

.player-info h3 {
  margin: 0 0 6px;
  color: #14213d;
}

.player-info p {
  margin: 0 0 6px;
  color: #d4af37;
  font-weight: 600;
}

.player-info span {
  color: #6b7280;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .players-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 600px) {
  .players-grid {
    grid-template-columns: 1fr;
  }
}
</style>
