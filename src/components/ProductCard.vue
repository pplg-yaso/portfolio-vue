<template>
  <section class="container my-5">
    <h2 class="text-center mb-4">🔥 Muscle Car Shop</h2>

    <div class="row">
      <div v-for="car in cars" :key="car.name" class="col-md-4 mb-4">
        <div class="card shadow">
          <img :src="car.img" class="card-img-top">
          <div class="card-body">
            <h5>{{ car.name }}</h5>
            <p class="fw-bold">{{ car.price }}</p>
            <button class="btn btn-danger w-100">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const cars = [
  {
    name: "Ford Mustang 1969",
    price: "$150.000",
    img: "https://i.pinimg.com/1200x/75/78/8b/75788b0893b21b8e6441e326aed9fe30.jpg"
  },
  {
    name: "Chevrolet Camaro ZL1",
    price: "$120.000",
    img: "https://i.pinimg.com/736x/3d/ec/8a/3dec8aa375d7b0f20d097a1270e7f06c.jpg"
  },
  {
    name: "Dodge Challenger Hellcat",
    price: "$150.000",
    img: "https://i.pinimg.com/736x/35/f4/ce/35f4ceaed22809adc904c5127685ee33.jpg"
  }
];
</script>

<style scoped>
.card img {
  height: 220px;
  object-fit: cover;
}
.card:hover {
  transform: scale(1.03);
  transition: 0.3s;
}
</style>
