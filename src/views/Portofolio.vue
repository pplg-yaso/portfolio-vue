<script setup>
</script>

<template>
  <div class="portofolio">

    <section class="hero-services">
      <h1>Portofolio Bayern</h1>
      <p class="tagline">Momen & Pemain Legendaris 🔴⚪</p>
    </section>

    <section class="section">
      <h2>Highlight Momen & Pemain</h2>
      <p>
        Menampilkan momen ikonik, stadion megah, dan pemain legendaris Bayern München.
        Portofolio ini memberikan perspektif berbeda tentang sejarah dan prestasi klub.
      </p>
    </section>

    <section class="section">
      <h2>Galeri</h2>
      <div class="gallery">
        <div class="card">
          <img src="https://assets.bundesliga.com/tachyon/sites/2/2021/06/imago0000388146h.jpg?crop=0px,0px,1993px,1120px&fit=1140,1140" alt="Karl-Heinz Rummenigge">
          <p class="caption">Karl-Heinz Rummenigge</p>
        </div>
        <div class="card">
          <img src="https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-16x9-seo/v1601458426/cms/public/images/allianz-arena/stadion-innenraum/aa_haupttribuene.jpg" alt="Allianz Arena">
          <p class="caption">Allianz Arena</p>
        </div>
        <div class="card">
          <img src="https://mmc.tirto.id/image/2020/08/24/ap_20236766328692_ratio-16x9.jpg" alt="Treble Winners 2020">
          <p class="caption">Treble Winners 2020</p>
        </div>
      </div>
    </section>

    <section class="section prestasi">
      <h2>Prestasi Klub</h2>
      <ul>
        <li>🏆 Bundesliga: 30+ Gelar</li>
        <li>🏆 DFB Pokal</li>
        <li>🏆 UEFA Champions League</li>
        <li>🏆 FIFA Club World Cup</li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.portofolio {
  font-family: Arial, sans-serif;
  background-color: #fdf5f5;
}

.hero-services {
  background: linear-gradient(135deg, #c8102e,#9b0f24);
  color: white;
  text-align: center;
  padding: 60px 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.hero-services h1 {
  margin-bottom: 15px;
  font-size: 3rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.hero-services .tagline {
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
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
  line-height: 1.6;
  color: #333;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.gallery {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: white;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  width: 220px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.caption {
  padding: 10px;
  font-weight: bold;
  color: #c8102e;
}

.prestasi {
  background-color: #fff0f0;
  padding: 30px 20px;
  margin-top: 40px;
}

.prestasi ul {
  list-style: none;
  padding: 0;
}

.prestasi li {
  margin-bottom: 8px;
  font-weight: bold;
}
</style>