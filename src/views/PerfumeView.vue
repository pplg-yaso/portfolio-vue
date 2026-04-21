<template>
  <div class="product-page">
    <div class="product-grid">
      <div v-for="item in products" :key="item.id" class="card-item">
        <div class="img-wrapper"><img :src="item.image" /></div>
        <div class="card-info">
          <h3>{{ item.name }}</h3>
          <p class="price">Rp {{ item.price.toLocaleString() }}</p>
          <button class="btn-beli">✨ Detail</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const products = ref([
  { id: 1, name: 'Miss Dior', price: 350000, image: 'https://i.pinimg.com/736x/a9/c2/b5/a9c2b55cd2528b4b33ba378d5cc032e4.jpg' },
  { id: 2, name: 'Flower Knows', price: 275000, image: 'https://i.pinimg.com/736x/4c/ee/68/4cee68eb9043f5cec9c051244a144d5b.jpg' },
  { id: 3, name: 'Floral Garden', price: 320000, image: 'https://i.pinimg.com/1200x/ce/fe/15/cefe1578803de9946b581f79cd5fcce0.jpg' },
  { id: 4, name: 'Midnight Muse', price: 400000, image: 'https://i.pinimg.com/736x/97/74/d9/9774d9b9788fbf4d659bd2cd5f6aac47.jpg' },
  { id: 5, name: 'Crystal Morning', price: 310000, image: 'https://i.pinimg.com/1200x/a5/d3/4d/a5d34dadb248886637950f708f58681e.jpg' },
  { id: 6, name: 'Cloud Whisper', price: 290000, image: 'https://i.pinimg.com/1200x/1c/1c/25/1c1c25d82faa32504df4403023a98cb3.jpg' },
  { id: 7, name: 'Blue Velvet Mist', price: 250000, image: 'https://i.pinimg.com/736x/8f/d0/21/8fd02116fb45c1f7b4921130f858d17f.jpg' },
  { id: 8, name: 'Stardust EDP', price: 420000, image: 'https://i.pinimg.com/control1/736x/a4/f0/e3/a4f0e39843f9ae31c58bafaa5e90f059.jpg' }
])
</script>

<style scoped>
.product-page { background-color: #f4f9ff; min-height: 100vh; padding: 40px; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
.card-item { background: white; border-radius: 15px; overflow: hidden; text-align: center; padding-bottom: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
.img-wrapper img { width: 100%; height: 250px; object-fit: cover; }
.price { color: #4b8cd9; font-weight: bold; }
.btn-beli { background: #4b8cd9; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; }
</style>