<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Official club experience</p>
        <h2>Hala Madrid</h2>
        <p>Welcome to the home of passion, glory, and football greatness.</p>
        <a href="#about" class="btn btn-gold">Explore More</a>
      </div>
    </section>

    <section class="info-section" id="about">
      <div class="info-card">
        <h3>Legendary History</h3>
        <p>Real Madrid is one of the most successful and admired football clubs in the world, known for its rich legacy and unforgettable achievements.</p>
      </div>
      <div class="info-card">
        <h3>World-Class Stars</h3>
        <p>From iconic legends to modern superstars, the club continues to shine on the biggest stage.</p>
      </div>
      <div class="info-card">
        <h3>True Passion</h3>
        <p>Every match, every trophy, and every supporter reflects the spirit of Los Blancos.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.home-page {
  background: #f7f7f7;
}

.hero {
  min-height: 88vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.65)),
    url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Panoramic_santiago_bernabeu.jpg/1280px-Panoramic_santiago_bernabeu.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 24px;
}

.hero-content {
  max-width: 760px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  font-size: 0.8rem;
  color: #d4af37;
  margin-bottom: 12px;
}

.hero-content h2 {
  font-size: clamp(2.8rem, 5vw, 4.6rem);
  margin: 0 0 16px;
  font-weight: 800;
}

.hero-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.3s;
}

.btn-gold {
  background: #d4af37;
  color: #111;
}

.info-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 24px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.info-card {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.info-card h3 {
  color: #14213d;
  margin-bottom: 10px;
}

.info-card p {
  color: #4b5563;
  line-height: 1.7;
}
</style>
