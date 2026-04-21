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
  { id: 1, name: 'Skintific 5x Ceramide Soothing Toner', price: 155000, image: 'https://i.pinimg.com/736x/e8/be/ec/e8beec70636f9d730a253ad9f75fdaa1.jpg' },
  { id: 2, name: 'Summer Fridays Hand Cream', price: 95000, image: 'https://i.pinimg.com/1200x/47/5a/34/475a349a249b926ff31a541fffc3e963.jpg' },
  { id: 3, name: 'Laneige Moinsturizer', price: 120000, image: 'https://i.pinimg.com/1200x/06/bd/fd/06bdfda3eb7e9bf2ba61c4fce6dbfd26.jpg' },
  { id: 4, name: 'Serum wardah', price: 110000, image: 'https://i.pinimg.com/1200x/20/67/cd/2067cd5a2b11f944687277b4c463fe8e.jpg' },
  { id: 5, name: 'Meant Suncreen', price: 135000, image: 'https://i.pinimg.com/736x/bc/75/0d/bc750d1af0c3c38412c2ff3bb70855d9.jpg' },
  { id: 6, name: 'Abib Serum hyaluron Pad', price: 125000, image: 'https://i.pinimg.com/1200x/af/26/9a/af269a3f23546afdfe0e9b9097f121b4.jpg' },
  { id: 7, name: 'Harlette Cleansing Oil', price: 45000, image: 'https://i.pinimg.com/736x/93/c8/47/93c8476ea12f0a8fbf6ca4ebbe9be3be.jpg' },
  { id: 8, name: 'Lidor Serum', price: 65000, image: 'https://i.pinimg.com/736x/5f/7f/bd/5f7fbd780dd630ca1a053882aac31cd7.jpg' }
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