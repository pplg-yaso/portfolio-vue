<template>
  <section class="portfolio">
    <h1 class="title">Our Portfolio</h1>
    <p class="subtitle">Sweet creations from Sweetie Dessert 🍰</p>

    <div class="portfolio-container">

      <div class="portfolio-card">
        <img src="https://i.pinimg.com/1200x/86/29/20/862920ed4760b3bd6a24714cdb9f553a.jpg" alt="">
        <div class="overlay">
          <h3>Chocolate Lava Cake</h3>
          <p>Lumer & Lembut</p>
        </div>
      </div>

      <div class="portfolio-card">
        <img src="https://i.pinimg.com/1200x/fb/36/b5/fb36b54eb9ec4fe7a9f9e739b771c520.jpg" alt="">
        <div class="overlay">
          <h3>Macarons</h3>
          <p>Manis, ringan, dan colorful</p>
        </div>
      </div>

      <div class="portfolio-card">
        <img src="https://i.pinimg.com/736x/5c/91/bd/5c91bdb98dd800bc0db888b40b7d9f59.jpg" alt="">
        <div class="overlay">
          <h3>Donuts Glaze</h3>
          <p>Lembut dengan topping manis</p>
        </div>
      </div>

      <div class="portfolio-card">
        <img src="https://i.pinimg.com/1200x/32/27/eb/3227ebedac7f5101aa1111d96119d634.jpg" alt="">
        <div class="overlay">
          <h3>Croissant</h3>
          <p>Fresh & creamy dessert</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio"
}
</script>

<style scoped>
.portfolio {
  padding: 60px 10%;
  text-align: center;
  background: #fffafc;
}

.title {
  font-size: 36px;
  color: #5a3e36;
}

.subtitle {
  color: #888;
  margin-bottom: 40px;
}

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}

/* CARD */
.portfolio-card {
  position: relative;
  width: 260px;
  height: 220px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* IMAGE */
.portfolio-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease;
}

/* HOVER ZOOM */
.portfolio-card:hover img {
  transform: scale(1.1);
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(210, 105, 30, 0.75);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.4s ease;
  padding: 10px;
  text-align: center;
}

.portfolio-card:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.overlay p {
  font-size: 13px;
}
</style>