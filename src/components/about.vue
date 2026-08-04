<template>
  <section class="about-section" id="about">
    <div class="about-hero">
      <p class="eyebrow">Club History</p>
      <h1>More Than a Club</h1>
      <p class="lead">
        Founded in 1902, Real Madrid stands as a symbol of excellence, ambition, and football greatness.
      </p>
    </div>

    <div class="about-grid">
      <div class="about-copy">
        <h2>The Pride of Madrid</h2>
        <p>
          Real Madrid is one of the most successful and admired football clubs in the world. Known as Los Blancos,
          the club has built a legendary legacy through unforgettable victories, world-class players, and a spirit that
          never fades.
        </p>
        <p>
          From the iconic Santiago Bernabéu to the glory of European nights, Real Madrid continues to inspire millions of fans worldwide.
        </p>
        <ul>
          <li>Founded in 1902</li>
          <li>Home of the legendary Bernabéu Stadium</li>
          <li>One of the most decorated clubs in football history</li>
        </ul>
      </div>

      <div class="about-card">
        <img
          src="https://cdn0-production-assets-kly.akamaized.net/medias/1162239/big/060230800_1457223143-REAL_MADRIDDD.jpg"
          alt="Real Madrid"
        />
        <div class="about-card-body">
          <h3>Legendary Identity</h3>
          <p>With a rich history and unmatched achievements, Real Madrid continues to represent excellence on and off the pitch.</p>
        </div>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-box">
        <strong>15</strong>
        <span>Champions League</span>
      </div>
      <div class="stat-box">
        <strong>36</strong>
        <span>La Liga Titles</span>
      </div>
      <div class="stat-box">
        <strong>1</strong>
        <span>Global Fanbase</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 70px 24px 90px;
  background: linear-gradient(135deg, #fdfcf8 0%, #f5f0e6 100%);
}

.about-hero {
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: #d4af37;
  font-weight: 700;
  margin-bottom: 10px;
}

.about-hero h1 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  color: #14213d;
  margin-bottom: 12px;
}

.lead {
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.8;
}

.about-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
}

.about-copy h2 {
  font-size: 1.8rem;
  color: #14213d;
  margin-bottom: 14px;
}

.about-copy p,
.about-copy li {
  color: #4b5563;
  line-height: 1.8;
}

.about-copy ul {
  padding-left: 18px;
  margin-top: 14px;
}

.about-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
}

.about-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.about-card-body {
  padding: 22px;
}

.about-card-body h3 {
  color: #14213d;
  margin-bottom: 10px;
}

.stats-row {
  max-width: 1100px;
  margin: 36px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.stat-box {
  background: #14213d;
  color: #fff;
  padding: 22px;
  border-radius: 16px;
  text-align: center;
}

.stat-box strong {
  display: block;
  font-size: 1.8rem;
  color: #d4af37;
}

.stat-box span {
  font-size: 0.95rem;
  color: #f3f4f6;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
