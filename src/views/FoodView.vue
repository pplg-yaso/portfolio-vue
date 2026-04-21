<template>
  <div class="food-page">
    <div class="product-grid">
      <div v-for="food in foods" :key="food.id" class="card-item">
        <div class="img-wrapper">
          <img :src="food.image" :alt="food.name" />
        </div>
        <div class="card-info">
          <h3>{{ food.name }}</h3>
          <p class="price">Rp {{ food.price.toLocaleString() }}</p>
          <button class="btn-beli" @click="selectedFood = food">🛒 Detail</button>
        </div>
      </div>
    </div>

    <div v-if="selectedFood" class="modal-overlay" @click.self="selectedFood = null">
      <div class="modal-content">
        <button class="close-x" @click="selectedFood = null">✕</button>
        <div class="modal-body">
          <img :src="selectedFood.image" class="modal-img" />
          <div class="modal-text">
            <h2>{{ selectedFood.name }}</h2>
            <p class="modal-price">Rp {{ selectedFood.price.toLocaleString() }}</p>
            <p class="desc">Douceurs délicates au style coquette pour adoucir chaque instant de ta journée.</p>
            <div class="action-btns">
              <button class="btn-order">Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const selectedFood = ref(null)
const foods = ref([
  { 
    id: 1, 
    name: 'Crystal Blossom', 
    price: 1850000, 
    image: 'https://i.pinimg.com/1200x/a0/8f/25/a08f252bbf6b23aef8cefd3c6c401ec5.jpg' 
  },
  { 
    id: 2, 
    name: 'Royal Aurora Sapphire ', 
    price: 3750000, 
    image: 'https://i.pinimg.com/1200x/d7/91/6d/d7916d43556514331afb084c28f7d57a.jpg' 
  },
  { 
    id: 3, 
    name: 'Blue Duchess Ribbon ', 
    price: 1450000, 
    image: 'https://i.pinimg.com/736x/e9/5b/b5/e95bb52c2b149cda447287532ecc82fb.jpg' 
  },
  { 
    id: 4, 
    name: 'Pearl Princess Lace ', 
    price: 2200000, 
    image: 'https://i.pinimg.com/1200x/6b/86/aa/6b86aa69cd58f506e64191bef942c71c.jpg' 
  },
  { 
    id: 5, 
    name: 'Celestial Bow Tiara ', 
    price: 1650000, 
    image: 'https://i.pinimg.com/1200x/f1/d3/ff/f1d3ff0b8fe61771c19acd04eb408242.jpg' 
  },
  { 
    id: 6, 
    name: 'Winter Lace Ballet ', 
    price: 950000, 
    image: 'https://i.pinimg.com/736x/2f/c5/6e/2fc56e8d8204942e91d4e8c5c742bc05.jpg' 
  },
  { 
    id: 7, 
    name: 'Marie Antoinette Silk Bow ', 
    price: 2850000, 
    image: 'https://i.pinimg.com/736x/3c/b3/86/3cb386cf9e7dbf4d9c4e61a9fb17973b.jpg' 
  },
  { 
    id: 8, 
    name: 'Snow Princess Crysta', 
    price: 1250000, 
    image: 'https://i.pinimg.com/736x/af/2c/5b/af2c5b0d68909ecbfada65215288138a.jpg' 
  }
])
</script>

<style scoped>
.food-page { background-color: #f4f9ff; min-height: 100vh; padding: 40px; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
.card-item { background: white; border-radius: 15px; overflow: hidden; text-align: center; padding-bottom: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
.img-wrapper img { width: 100%; height: 250px; object-fit: cover; }
.price { color: #4b8cd9; font-weight: bold; }
.btn-beli { background: #4b8cd9; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; }
/* Modal CSS mirip dengan Clothes sebelumnya */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 100; }
.modal-content { background: white; padding: 30px; border-radius: 20px; position: relative; max-width: 600px; display: flex; }
.modal-img { width: 200px; border-radius: 10px; margin-right: 20px; }
.btn-order { background: #4b8cd9; color: white; border: none; padding: 10px 20px; border-radius: 10px; width: 100%; cursor: pointer; }
</style>