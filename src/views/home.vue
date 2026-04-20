<template>
  <div>

    <!-- Hero -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h2>Hala Madrid</h2>
        <p>Klub sepak bola terbesar di dunia dengan sejarah dan prestasi luar biasa</p>
      </div>
    </section>

    <section class="section trophy-section">
      <h3>Trophy Champions League</h3>
      <img class="trophy-img" 
           src="https://pbs.twimg.com/media/GPBFLnzaIAAoq1E.jpg" 
           alt="Champions League Trophy" />
    </section>

    <!-- Trophies Info -->
    <section class="section" id="trophies">
      <h3>Prestasi Utama</h3>
      <div class="cards">
        <div class="card">
          <h4>UEFA Champions League</h4>
          <p>15 Gelar Juara</p>
        </div>
        <div class="card">
          <h4>La Liga</h4>
          <p>36 Gelar Juara</p>
        </div>
        <div class="card">
          <h4>Copa del Rey</h4>
          <p>20 Gelar Juara</p>
        </div>
      </div>
    </section>

    <!-- Players -->
    <section class="section" id="players">
      <h3>Pemain Bintang</h3>
      <div class="cards">
        <div class="card player-card">
          <img src="https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250128377.webp" alt="Jude Bellingham" />
          <h4>Jude Bellingham</h4>
          <p>Midfielder</p>
        </div>
        <div class="card player-card">
          <img src="https://assets.realmadrid.com/is/image/realmadrid/VINICIUS_550x650_SinParche?$Mobile$&fit=wrap&wid=420" alt="Vinicius Jr" />
          <h4>Vinícius Jr</h4>
          <p>Forward</p>
        </div>
        <div class="card player-card">
          <img src="https://img.uefa.com/imgml/TP/players/1/2026/cutoff/250076574.webp" />
          <h4>Kylian Mbappé</h4>
          <p>left Wing Forward</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollToAbout = () => {
  const el = document.getElementById('about')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.hero {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Panoramic_santiago_bernabeu.jpg/1280px-Panoramic_santiago_bernabeu.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 20px;
}

.hero-content h2 {
  font-size: 48px;
  margin-bottom: 16px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 24px;
}

.hero-content button {
  padding: 14px 30px;
  border: none;
  background: #d4af37;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s;
}

.hero-content button:hover {
  background: #c9a633;
  transform: scale(1.05);
}

.section {
  padding: 60px 40px;
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

.section h3 {
  font-size: 32px;
  margin-bottom: 30px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card:hover {
  transform: translateY(-8px);
}

/* Player Image Styling */
.player-card img {
  width: 180px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: 0.3s;
}

.player-card img:hover {
  transform: scale(1.1);
}

.card h4 {
  margin-bottom: 10px;
  color: #d4af37;
}

/* Trophy Image */
.trophy-img {
  width: 500px;
  margin-top: 20px;
  transition: 0.3s;
}

.trophy-img:hover {
  transform: scale(1.08);
}

.footer {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}
</style>
