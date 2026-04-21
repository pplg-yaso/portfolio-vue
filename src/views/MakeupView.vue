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
  { id: 1, name: 'DIOR', price: 85000, image: 'https://i.pinimg.com/736x/18/5d/72/185d7288809402f9d42db9ff3bbdf294.jpg' },
  { id: 2, name: 'HYNTOOR', price: 75000, image: 'https://i.pinimg.com/control1/736x/62/e8/cf/62e8cfbebb553ddef3b181d217d3c95b.jpg' },
  { id: 3, name: 'ETUDE ', price: 125000, image: 'https://i.pinimg.com/736x/73/f9/be/73f9be7259ef113445edd7a5f9b8a764.jpg' },
  { id: 4, name: 'DASIQUE Cushion', price: 185000, image: 'https://i.pinimg.com/736x/2f/26/06/2f26065bcb1af429e0512b5fd5a08d0b.jpg' },
  { id: 5, name: 'DASIQUE Eyeshadow', price: 65000, image: 'https://i.pinimg.com/736x/be/71/53/be7153fe0f4720db3f33707cc23c3c04.jpg' },
  { id: 6, name: 'DIOR LipBalm ', price: 110000, image: 'https://i.pinimg.com/736x/27/db/60/27db6082dc019db528a253784cb6009b.jpg' },
  { id: 7, name: 'COLORGRAM Lip Oil', price: 145000, image: 'https://i.pinimg.com/736x/b9/e4/2a/b9e42a9b15140ba476f5ac0c5beda8dc.jpg' },
  { id: 8, name: 'Brush Make Up', price: 95000, image: 'https://i.pinimg.com/1200x/e1/b7/ff/e1b7ff6d8e5c51de2c1f32a25557e733.jpg' }
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