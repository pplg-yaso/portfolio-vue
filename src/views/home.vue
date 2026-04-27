<script setup>
import { ref } from 'vue';

const artists = ref([
  { name: 'BTS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/BTS_logo.svg/1200px-BTS_logo.svg.png', label: 'BIGHIT MUSIC' },
  { name: 'SEVENTEEN', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Seventeen_logo.svg/1200px-Seventeen_logo.svg.png', label: 'PLEDIS ENTERTAINMENT' },
  { name: 'TOMORROW X TOGETHER', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/TXT_logo.svg/1200px-TXT_logo.svg.png', label: 'BIGHIT MUSIC' },
  { name: 'ENHYPEN', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Enhypen_logo.svg/1200px-Enhypen_logo.svg.png', label: 'BELIFT LAB' },
  { name: 'LE SSERAFIM', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Le_Sserafim_logo.svg/1200px-Le_Sserafim_logo.svg.png', label: 'SOURCE MUSIC' },
  { name: 'NewJeans', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/NewJeans_logo.svg/1200px-NewJeans_logo.svg.png', label: 'ADOR' },
]);

const news = ref([
  { title: 'BTS Members Begin Military Service', date: '2024.01.15', category: 'NEWS' },
  { title: 'SEVENTEEN World Tour Announcement', date: '2024.01.10', category: 'TOUR' },
  { title: 'NewJeans New Album Release', date: '2024.01.05', category: 'MUSIC' },
  { title: 'HYBE 2024 Vision Presentation', date: '2024.01.01', category: 'COMPANY' },
]);
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__bg"></div>
      <div class="hero__content">
        <h1 class="hero__title">WE BELIEVE<br>IN MUSIC</h1>
        <p class="hero__subtitle">HYBE LABELS</p>
        <router-link to="/artist" class="hero__cta">EXPLORE ARTISTS</router-link>
      </div>
      <div class="hero__scroll">
        <span>SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="news">
      <div class="news__container">
        <h2 class="section-title">LATEST NEWS</h2>
        <div class="news__grid">
          <div v-for="(item, index) in news" :key="index" class="news__card">
            <span class="news__category">{{ item.category }}</span>
            <h3 class="news__title">{{ item.title }}</h3>
            <p class="news__date">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Artists Section -->
    <section class="artists">
      <div class="artists__container">
        <h2 class="section-title">OUR ARTISTS</h2>
        <div class="artists__grid">
          <div v-for="(artist, index) in artists" :key="index" class="artist__card">
            <div class="artist__image-wrapper">
              <img :src="artist.image" :alt="artist.name" class="artist__image" />
            </div>
            <div class="artist__info">
              <h3 class="artist__name">{{ artist.name }}</h3>
              <p class="artist__label">{{ artist.label }}</p>
            </div>
          </div>
        </div>
        <router-link to="/artist" class="view-all">VIEW ALL ARTISTS →</router-link>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="mission__container">
        <h2 class="section-title">OUR MISSION</h2>
        <p class="mission__text">
          We exist to innovate the music industry and inspire the world through music and entertainment.
          From artist development to fan engagement, we create experiences that transcend boundaries.
        </p>
        <router-link to="/about" class="mission__cta">LEARN MORE</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  background: #000;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero__bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=1920&q=80') center/cover;
  opacity: 0.3;
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
}

.hero__title {
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  letter-spacing: 8px;
  line-height: 1.1;
  margin-bottom: 20px;
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
}

.hero__subtitle {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 12px;
  opacity: 0.7;
  margin-bottom: 40px;
}

.hero__cta {
  display: inline-block;
  padding: 16px 40px;
  border: 2px solid #fff;
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  transition: all 0.3s ease;
}

.hero__cta:hover {
  background: #fff;
  color: #000;
  opacity: 1;
}

.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;
}

.hero__scroll span {
  font-size: 0.7rem;
  letter-spacing: 3px;
  opacity: 0.5;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, #fff, transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
  50% { opacity: 1; transform: scaleY(1); }
}

/* Section Title */
.section-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: 4px;
  margin-bottom: 50px;
  text-align: center;
}

/* News Section */
.news {
  padding: 100px 40px;
  background: #000;
}

.news__container {
  max-width: 1400px;
  margin: 0 auto;
}

.news__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.news__card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.news__card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.news__category {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  display: block;
}

.news__title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 16px;
}

.news__date {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

/* Artists Section */
.artists {
  padding: 100px 40px;
  background: #0a0a0a;
}

.artists__container {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.artists__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.artist__card {
  position: relative;
  overflow: hidden;
  background: #111;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.artist__card:hover {
  transform: scale(1.02);
}

.artist__image-wrapper {
  aspect-ratio: 16/10;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  padding: 40px;
}

.artist__image {
  max-width: 60%;
  max-height: 80%;
  object-fit: contain;
  filter: grayscale(100%) brightness(1.2);
  transition: all 0.3s ease;
}

.artist__card:hover .artist__image {
  filter: grayscale(0%) brightness(1);
}

.artist__info {
  padding: 20px;
  text-align: left;
}

.artist__name {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 6px;
}

.artist__label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
}

.view-all {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 12px 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.view-all:hover {
  background: #fff;
  color: #000;
  opacity: 1;
}

/* Mission Section */
.mission {
  padding: 120px 40px;
  background: #000;
  text-align: center;
}

.mission__container {
  max-width: 800px;
  margin: 0 auto;
}

.mission__text {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.mission__cta {
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  transition: all 0.3s ease;
}

.mission__cta:hover {
  background: #ccc;
  opacity: 1;
}

@media (max-width: 768px) {
  .news, .artists, .mission {
    padding: 60px 20px;
  }

  .hero__title {
    letter-spacing: 4px;
  }
}
</style>
