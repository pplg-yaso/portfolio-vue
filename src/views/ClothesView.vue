<template>
  <div class="clothes-container">
    <div class="product-grid">
      <div v-for="item in products" :key="item.id" class="card-item">
        <div class="img-wrapper">
          <img :src="item.image" alt="product" />
        </div>
        <div class="card-info">
          <h3 class="product-name">{{ item.name }}</h3>
          <p class="product-price">Rp {{ item.price.toLocaleString() }}</p>
          <button class="btn-main-beli" @click="showPopup(item)">
            <span class="icon">🛒</span> Beli
          </button>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="selectedProduct" class="modal-overlay" @click.self="closePopup">
        <div class="modal-card">
          <button class="close-x" @click="closePopup">✕</button>
          
          <div class="modal-layout">
            <div class="modal-img-box">
              <img :src="selectedProduct.image" />
            </div>

            <div class="modal-desc">
              <h2 class="title-detail">{{ selectedProduct.name }}</h2>
              <p class="price-detail">Rp {{ selectedProduct.price.toLocaleString() }}</p>

              <div class="selection-group">
                <label>Pilih Ukuran:</label>
                <div class="btn-group">
                  <button v-for="s in ['S', 'M', 'L']" :key="s" class="btn-opt">{{ s }}</button>
                </div>
              </div>

              <div class="selection-group">
                <label>Pilih Warna:</label>
                <div class="btn-group">
                  <button class="btn-opt active">Pastel Blue</button>
                  <button class="btn-opt">Cream</button>
                  <button class="btn-opt">White</button>
                </div>
              </div>

              <div class="action-buttons">
                <button class="btn-cart">🛒 + Keranjang</button>
                <button class="btn-checkout">Beli Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <footer class="footer-simple">
      <p>© 2026 MyWebsite. Masih di buat ya cinta cinta.</p>
      <div class="f-links">
        <span>Home</span> <span>About</span> <span>Contact</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedProduct = ref(null)

const products = ref([
  { id: 1, name: 'Sky Ribbon Blouse', price: 130000, image: 'https://i.pinimg.com/1200x/ed/09/50/ed095088765d20c9cc4e5f0f6fdda08e.jpg' },
  { id: 2, name: 'Baby Blue Ballet Fairy', price: 165000, image: 'https://i.pinimg.com/736x/f7/af/07/f7af071a52f294fe03e6fbd1c68b45b7.jpg' },
  { id: 3, name: 'Cloudy Lace Set', price: 185000, image: 'https://i.pinimg.com/736x/4f/26/32/4f2632f0f5217a1969baacc359d50f64.jpg' },
   { id: 4, name: 'Lace Ribbon Dress', price: 210000, image: 'https://i.pinimg.com/736x/bd/ec/a1/bdeca132e834304f40372ef47ec25288.jpg' },
   { id: 5, name: 'Pastel Bow Mini Dress', price: 210000, image: 'https://i.pinimg.com/736x/0f/bd/56/0fbd56122416065b61e77a920beb1cc6.jpg' },
   { id: 6, name: 'Sweet Sky Baby Doll Dress', price: 421000, image: 'https://i.pinimg.com/736x/b8/eb/cc/b8ebcce50675dba5b205bed04e0c1c2b.jpg' },
   { id: 7, name: 'Baby Blue Princess Dress', price: 385000, image: 'https://i.pinimg.com/736x/50/7f/11/507f1125b5e86a58f19e033ac0a76b8a.jpg' },
   { id: 8, name: 'Little Sky Ruffle Dress', price: 420000, image: 'https://i.pinimg.com/736x/5f/c0/6e/5fc06ec5b44f37f53abb85bbd880076f.jpg' },
])

const showPopup = (item) => {
  selectedProduct.value = item
}

const closePopup = () => {
  selectedProduct.value = null
}
</script>

<style scoped>
.clothes-container {
  background-color: #f4f9ff;
  min-height: 100vh;
  padding: 50px 5%;
}

/* Grid Styling */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}  

.card-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  overflow: hidden;
  text-align: center;
  padding-bottom: 20px;
}

.img-wrapper img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.product-name { font-size: 1.1rem; margin: 15px 0 5px; color: #333; }
.product-price { color: #4b8cd9; font-weight: bold; margin-bottom: 15px; }

.btn-main-beli {
  background: #4b8cd9;
  color: white;
  border: none;
  padding: 8px 30px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-card {
  background: white;
  border-radius: 20px;
  width: 90%;
  max-width: 750px;
  padding: 40px;
  position: relative;
}

.modal-layout { display: flex; gap: 30px; }
.modal-img-box img { width: 280px; border-radius: 15px; }

.title-detail { margin-top: 0; font-size: 1.8rem; }
.price-detail { font-size: 1.4rem; color: #4b8cd9; font-weight: bold; }

.selection-group { margin: 20px 0; }
.btn-group { display: flex; gap: 8px; margin-top: 8px; }

.btn-opt {
  padding: 6px 15px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.btn-opt.active {
  background: #add8e6;
  border-color: #4b8cd9;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 30px;
}

.btn-cart {
  flex: 1;
  background: #fff;
  border: 1.5px solid #4b8cd9;
  color: #4b8cd9;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
}

.btn-checkout {
  flex: 1;
  background: #4b8cd9;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
}

.close-x {
  position: absolute;
  top: 20px; right: 20px;
  background: none; border: none; font-size: 1.2rem; cursor: pointer;
}

/* Animasi Fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.footer-simple {
  margin-top: 60px;
  text-align: center;
  color: #555;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}
.f-links { display: flex; justify-content: center; gap: 20px; margin-top: 10px; font-size: 0.9rem; }
</style>