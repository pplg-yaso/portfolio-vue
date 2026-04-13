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
          />
          <div class="carousel-caption text-end">
            <h1 class="fw-bold">
              WHAT STAR WARS OBJECT WOULD MAKE
              THE PERFECT VALENTINE'S DAY GIFT?
            </h1>
            <p>Find the perfect gift from a galaxy far, far away....</p>
            <button class="btn btn-warning fw-bold px-4">TAKE QUIZ</button>
          </div>
        </div>

        <!-- SLIDE 2 -->
        <div class="carousel-item">
          <img
            src="https://wallpapercave.com/wp/wp3614529.jpg"
            class="d-block w-100 hero-img"
          />
          <div class="carousel-caption text-end">
            <h1 class="fw-bold">DISCOVER THE STAR WARS GALAXY</h1>
            <button class="btn btn-warning fw-bold px-4">EXPLORE</button>
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
    <section class="news-section container mt-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3 class="starwars text-light">Latest News + Features</h3>
        <a href="#" class="starwars text-light small">VIEW ALL ></a>
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="(item,index) in news" :key="index">
          <div class="card news-card bg-dark text-light h-100 d-flex flex-column">

            <div class="img-wrapper">
              <img :src="item.image" class="card-img-top"/>
            </div>

            <div class="card-body d-flex align-items-end">
              <p class="card-text">{{ item.title }}</p>
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
  data(){
    return{
      news:[
        {
          title:"Take a Peek Through Grogu’s Kaleidoscope",
          image:"https://wallpapercave.com/wp/wp3614519.jpg"
        },
        {
          title:"The Mandalorian and Grogu Debuts a Big Game Spot",
          image:"https://wallpapercave.com/wp/wp3614529.jpg"
        },
        {
          title:"Ignited Sabers: Best Lightsaber Duels",
          image:"https://wallpapercave.com/wp/wp3614535.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.starwars{
  color: rgb(255, 255, 255) !important;
  font-weight: bold;
  transition: all 0.3s ease;
}
.starwars:hover{
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
}

.hero-img{
  height:85vh;
  object-fit:cover;
}

/* NEWS SECTION */
.news-section{
  background:black;
  padding:20px;
}

/* CARD */
.news-card{
  border:none;
  border-radius:12px;
  overflow:hidden;
  transition:0.3s;
  position: relative;
}

/* HOVER EFFECT */
.news-card:hover{
  transform:translateY(-10px) scale(1.02);
  box-shadow:0 0 25px rgba(255,255,255,0.3);
}

/* IMAGE */
.img-wrapper{
  height:200px;
  overflow:hidden;
}

.card-img-top{
  height:100%;
  width:100%;
  object-fit:cover;
  transition:0.4s;
}

.news-card:hover .card-img-top{
  transform:scale(1.1);
}

/* TEXT */
.card-body{
  min-height:100px;
}

.card-text{
  font-weight:bold;
  font-size:14px;
}
</style>