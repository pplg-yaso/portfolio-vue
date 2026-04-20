<template>
  <div>

    <!-- HERO CAROUSEL -->
    <div id="heroCarousel" class="hero-section carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <!-- SLIDE 1 -->
        <div class="carousel-item active">
          <img
            src="https://wallpapercave.com/wp/wp3614519.jpg"
            class="d-block w-100 hero-img"
            alt="Star Wars"
          />
          <div class="carousel-caption text-end">
            <h1 class="fw-bold hero-title">
              WHAT STAR WARS OBJECT WOULD MAKE<br>
              THE PERFECT VALENTINE'S DAY GIFT?
            </h1>
            <p class="hero-subtitle">Find the perfect gift from a galaxy far, far away...</p>
            <button class="btn starwars-btn">TAKE THE QUIZ</button>
          </div>
        </div>

        <!-- SLIDE 2 -->
        <div class="carousel-item">
          <img
            src="https://wallpapercave.com/wp/wp3614529.jpg"
            class="d-block w-100 hero-img"
            alt="Galaxy"
          />
          <div class="carousel-caption text-end">
            <h1 class="fw-bold hero-title">DISCOVER THE STAR WARS GALAXY</h1>
            <button class="btn starwars-btn">EXPLORE NOW</button>
          </div>
        </div>

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- LATEST NEWS -->
    <section class="news-section">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="starwars-section-title">LATEST NEWS + FEATURES</h3>
          <a href="#" class="starwars-link-small">VIEW ALL →</a>
        </div>

        <div class="row g-4">
          <div class="col-md-4" v-for="(item, index) in news" :key="index">
            <div class="news-card">
              <div class="img-wrapper">
                <img :src="item.image" class="card-img-top" alt="News" />
              </div>
              <div class="card-body">
                <p class="card-text">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      news: [
        {
          title: "Take a Peek Through Grogu’s Kaleidoscope",
          image: "https://wallpapercave.com/wp/wp3614519.jpg"
        },
        {
          title: "The Mandalorian and Grogu Debuts a Big Game",
          image: "https://wallpapercave.com/wp/wp3614529.jpg"
        },
        {
          title: "Ignited Sabers: Best Lightsaber Duels",
          image: "https://wallpapercave.com/wp/wp3614535.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* ====================== HERO CAROUSEL ====================== */
.hero-section {
  position: relative;
}

.hero-img {
  height: 92vh;
  object-fit: cover;
  filter: brightness(0.52) contrast(1.12) saturate(0.9); /* tetap gelap */
}

/* Font di carousel tetap default Bootstrap (tidak diubah) */
.hero-title {
  font-size: 3.1rem;
  line-height: 1.15;
  color: #f0c040;
  text-shadow: 
    0 0 12px rgba(240, 192, 64, 0.7),
    0 4px 20px rgba(0, 0, 0, 0.85);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.35rem;
  color: #cccccc;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  margin-bottom: 2.2rem;
}

.starwars-btn {
  background-color: #b8860b;
  color: white;
  border: 2px solid #d4af37;
  font-weight: bold;
  padding: 14px 36px;
  font-size: 1.15rem;
  letter-spacing: 1px;
  transition: all 0.4s ease;
}

.starwars-btn:hover {
  background-color: #d4af37;
  color: #111;
  transform: scale(1.06);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
}

/* ====================== NEWS SECTION ====================== */
.news-section {
  background-color: #0a0a0a;
  padding: 90px 0 110px;
}

/* Hanya section title yang pakai font Star Wars */
.starwars-section-title {
  font-family: 'Star Wars', 'Orbitron', sans-serif;
  color: #d4af37;
  font-size: 2.1rem;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.starwars-link-small {
  color: #d4af37;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.starwars-link-small:hover {
  color: #f0c040;
}

/* News Card */
.news-card {
  background-color: #111;
  border: 1px solid #222;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.news-card:hover {
  transform: translateY(-10px);
  border-color: #b8860b;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.65);
}

.img-wrapper {
  height: 240px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.news-card:hover .card-img-top {
  transform: scale(1.09);
}

.card-body {
  padding: 1.6rem 1.4rem;
  background: linear-gradient(to top, #0a0a0a 30%, transparent);
}

.card-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: #e5e5e5;
  line-height: 1.45;
}
</style>