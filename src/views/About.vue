<template>
  <section class="about">
    <h1 class="title">Our Best Desserts</h1>

    <div class="card-container">
      <div class="card">
        <img src="https://i.pinimg.com/736x/fb/98/32/fb9832c650cdb9543f9cf77175c8085a.jpg" alt="Strawberry milk cream">
        <h3>Strawberry cream</h3>
        <p>Cream premium dengan Strawberry</p>
        <span class="price">Rp 45.000</span>
      </div>

      <div class="card">
        <img src="https://i.pinimg.com/736x/63/83/35/638335ba364d5f7c1d78653a06ac1c9e.jpg" alt="Chesecake">
        <h3>Chesecake</h3>
        <p>Perpaduan chese yang lembut</p>
        <span class="price">Rp 40.000</span>
      </div>

      <div class="card">
        <img src="https://i.pinimg.com/1200x/63/ba/13/63ba13de9e0153ca89b35fdd97b4963d.jpg" alt="Cupcakes">
        <h3>Cupcakes</h3>
        <p>Cake chocolate dengan cream vanilla</p>
        <span class="price">Rp 35.000</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.about {
  padding: 50px 10%;
  text-align: center;
}

.title {
  font-size: 32px;
  margin-bottom: 40px;
  color: #5a3e36;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  width: 280px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: 0.3s ease;
  padding-bottom: 20px;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3 {
  margin: 15px 0 10px;
  color: #333;
}

.card p {
  font-size: 14px;
  padding: 0 15px;
  color: #666;
}

.price {
  display: block;
  margin: 10px 0;
  font-weight: bold;
  color: #d2691e;
}

button {
  background: #d2691e;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #a0522d;
}
</style>
