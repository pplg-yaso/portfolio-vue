<script setup>
import { ref } from 'vue';

const labels = ref([
  {
    name: 'BIGHIT MUSIC',
    artists: [
      { name: 'BTS', image: 'https://picsum.photos/seed/bts/400/500' },
      { name: 'TOMORROW X TOGETHER', image: 'https://picsum.photos/seed/txt/400/500' },
      { name: 'Lee Hyun', image: 'https://picsum.photos/seed/leehyun/400/500' },
    ]
  },
  {
    name: 'PLEDIS ENTERTAINMENT',
    artists: [
      { name: 'SEVENTEEN', image: 'https://picsum.photos/seed/seventeen/400/500' },
      { name: 'fromis_9', image: 'https://picsum.photos/seed/fromis9/400/500' },
      { name: 'BSS', image: 'https://picsum.photos/seed/bss/400/500' },
    ]
  },
  {
    name: 'BELIFT LAB',
    artists: [
      { name: 'ENHYPEN', image: 'https://picsum.photos/seed/enhypen/400/500' },
      { name: 'ILLIT', image: 'https://picsum.photos/seed/illit/400/500' },
    ]
  },
  {
    name: 'SOURCE MUSIC',
    artists: [
      { name: 'LE SSERAFIM', image: 'https://picsum.photos/seed/lesserafim/400/500' },
    ]
  },
  {
    name: 'ADOR',
    artists: [
      { name: 'NewJeans', image: 'https://picsum.photos/seed/newjeans/400/500' },
    ]
  },
  {
    name: 'KOZ ENTERTAINMENT',
    artists: [
      { name: 'ZICO', image: 'https://picsum.photos/seed/zico/400/500' },
      { name: 'BOYNEXTDOOR', image: 'https://picsum.photos/seed/boynextdoor/400/500' },
    ]
  },
]);
</script>

<template>
  <div class="artists-page">
    <!-- Hero -->
    <section class="artists-hero">
      <div class="artists-hero__content">
        <h1>ARTISTS</h1>
        <p>World-Class Artists Under HYBE Labels</p>
      </div>
    </section>

    <!-- Labels & Artists -->
    <section class="labels">
      <div class="labels__container">
        <div v-for="(label, labelIndex) in labels" :key="labelIndex" class="label-section">
          <h2 class="label-name">{{ label.name }}</h2>
          <div class="label-artists">
            <div v-for="(artist, artistIndex) in label.artists" :key="artistIndex" class="artist-card">
              <div class="artist-card__image">
                <img :src="artist.image" :alt="artist.name" />
              </div>
              <div class="artist-card__overlay">
                <h3>{{ artist.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.artists-page {
  background: #000;
}

/* Hero */
.artists-hero {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
}

.artists-hero__content {
  text-align: center;
  z-index: 2;
}

.artists-hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: 8px;
  margin-bottom: 16px;
}

.artists-hero p {
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 4px;
  opacity: 0.6;
}

/* Labels Section */
.labels {
  padding: 80px 40px;
}

.labels__container {
  max-width: 1400px;
  margin: 0 auto;
}

.label-section {
  margin-bottom: 80px;
}

.label-name {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.label-artists {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.artist-card {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #111;
  cursor: pointer;
}

.artist-card__image {
  width: 100%;
  height: 100%;
}

.artist-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.9);
  transition: all 0.4s ease;
}

.artist-card:hover .artist-card__image img {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.05);
}

.artist-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.artist-card:hover .artist-card__overlay {
  transform: translateY(0);
  opacity: 1;
}

.artist-card__overlay h3 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .labels {
    padding: 60px 20px;
  }

  .label-artists {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>

