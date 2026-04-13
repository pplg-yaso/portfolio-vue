<template>
  <section class="container mt-5 films-section">
    <h3 class="text-light mb-4">Browse Films</h3>

    <div class="row g-4">
      <div
        class="col-6 col-md-4 col-lg-2"
        v-for="(film,index) in films"
        :key="index"
      >
        <div class="film-card">
          <img :src="film.image" class="img-fluid rounded"/>
          <p class="film-title text-light mt-2">{{ film.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrowseFilms",
  data(){
    return{
      films:[
        {
          title:"The Mandalorian and Grogu",
          image:"https://lumiere-a.akamaihd.net/v1/images/crm-the-mandalorian-and-grogu-teaser-hero_322b086b.jpeg"
        },
        {
          title:"Rise of Skywalker",
          image:"https://lumiere-a.akamaihd.net/v1/images/the-rise-of-skywalker-films-poster-catalog_c46adc71.jpeg"
        },
        {
          title:"Solo",
          image:"https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster_f98a86eb_62fc4b3c.jpeg"
        },
        {
          title:"The Last Jedi",
          image:"https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg"
        },
        {
          title:"Rogue One",
          image:"https://lumiere-a.akamaihd.net/v1/images/5adfd0618fdfb900016b5ca6-image_64bc2f8e.jpeg"
        }
      ]
    }
  }
}
</script>

<style scoped>
body{
  background-color: black;
}
.films-section{
  background:black;
  padding:20px;
  border-radius:12px;
}

.film-card{
  transition:0.3s;
}

.film-card:hover{
  transform:scale(1.05);
  box-shadow:0 0 15px rgba(255, 255, 253, 0.6);
  border-radius: 9px;
}

.film-title{
  font-size:14px;
  font-weight:bold;
}
</style>
