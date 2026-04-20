<template>
  <section class="films-section py-5">
    <div class="container">
      <h3 class="starwars-section-title mb-5">BROWSE FILMS</h3>

      <div class="row g-4">
        <div
          class="col-6 col-md-4 col-lg-2"
          v-for="(film, index) in films"
          :key="index"
        >
          <div class="film-card">
            <div class="poster-wrapper">
              <img :src="film.image" class="film-poster img-fluid" alt="Film Poster" />
            </div>
            <p class="film-title">{{ film.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrowseFilms",
  data() {
    return {
      films: [
        {
          title: "The Mandalorian and Grogu",
          image: "https://lumiere-a.akamaihd.net/v1/images/crm-the-mandalorian-and-grogu-teaser-hero_322b086b.jpeg"
        },
        {
          title: "Rise of Skywalker",
          image: "https://lumiere-a.akamaihd.net/v1/images/the-rise-of-skywalker-films-poster-catalog_c46adc71.jpeg"
        },
        {
          title: "Solo",
          image: "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster_f98a86eb_62fc4b3c.jpeg"
        },
        {
          title: "The Last Jedi",
          image: "https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg"
        },
        {
          title: "Rogue One",
          image: "https://lumiere-a.akamaihd.net/v1/images/5adfd0618fdfb900016b5ca6-image_64bc2f8e.jpeg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.films-section {
  background-color: #0a0a0a;
  padding: 80px 0;
}

.starwars-section-title {
  font-family: 'Star Wars', 'Orbitron', sans-serif;
  color: #d4af37;
  font-size: 2.2rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;
}

/* Film Card */
.film-card {
  background-color: #111;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid #222;
}

.film-card:hover {
  transform: scale(1.06) translateY(-8px);
  border-color: #b8860b;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
}

.poster-wrapper {
  height: 280px;
  overflow: hidden;
  position: relative;
}

.film-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.film-card:hover .film-poster {
  transform: scale(1.1);
}

/* Title */
.film-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #e5e5e5;
  padding: 14px 12px 16px;
  margin: 0;
  text-align: center;
  line-height: 1.4;
  background: linear-gradient(to top, #0a0a0a, transparent);
}

/* Responsive adjustment */
@media (max-width: 576px) {
  .poster-wrapper {
    height: 220px;
  }
  
  .starwars-section-title {
    font-size: 1.8rem;
  }
}
</style>