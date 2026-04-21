<template>
  <div class="jewelry-page-wrapper">
    <section class="shimmer-hero">
      <div class="hero-overlay-content">
        <div class="glass-main-card">
          <div class="brand-small-tag">
            <span class="sparkle-blue">✦</span> Antoinette Jewelry Store
          </div>
          
          <h1 class="hero-main-title">Our Luxury <br> Collections</h1>
          
          <div class="hero-action-group">
            <button class="btn-rounded-start">
              Let's Get Started <span class="arrow-circle-blue">→</span>
            </button>
          </div>

          <div class="brand-meta-desc">
            <p>// Shimmer Jewelry Store</p>
            <p class="lorem">Koleksi perhiasan eksklusif dengan sentuhan kristal biru yang memancarkan kemewahan abadi di setiap langkahmu.</p>
          </div>
        </div>

        <div class="hero-floating-elements">
          <div class="stat-box-blue">
            <span class="stat-number">230K</span>
            <span class="stat-label">Happy Clients</span>
          </div>

          <div class="small-glass-floating-card">
            <img src="" alt="detail" class="mini-thumbnail" />
            <div class="mini-text-content">
              <p class="mini-card-title">Beautiful In Every Detail</p>
              <a href="#" class="read-more-link">Read More <span class="arrow-mini-blue">→</span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-footer-features">
        <div class="feature-item-blue">
          <div class="icon-circle-blue">🚚</div>
          <h4>Free Shipping</h4>c
          <p>Gratis ongkir untuk setiap pembelian koleksi spesial kami.</p>
        </div>
        <div class="feature-item-blue">
          <div class="icon-circle-blue">💎</div>
          <h4>Exclusive Design</h4>
          <p>Desain unik yang tidak akan kamu temukan di tempat lain.</p>
        </div>
        <div class="feature-item-blue">
          <div class="icon-circle-blue">🎁</div>
          <h4>Good Packaging</h4>
          <p>Kemasan mewah yang siap dijadikan kado istimewa.</p>
        </div>
        <div class="feature-item-blue">
          <div class="icon-circle-blue">✨</div>
          <h4>Highest Quality</h4>
          <p>Material terbaik untuk kilau yang tahan lama.</p>
        </div>
      </div>
    </section>

    <div class="product-section-container">
      <h2 class="section-title">New Arrivals Products</h2>
      <p class="section-subtitle">New arrivals chosen by the editors for you.</p>
      
      <div class="product-grid">
        <div v-for="item in jewelryList" :key="item.id" class="card-item">
          <div class="img-wrapper">
            <div class="tag-new">New</div>
            <img :src="item.image" :alt="item.name" />
            <button class="wishlist-btn">♡</button>
          </div>
          <div class="card-info">
            <h3>{{ item.name }}</h3>
            <p class="price">Rp {{ item.price.toLocaleString() }}</p>
            <button class="btn-beli" @click="selectedItem = item">💎 Detail</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem" class="modal-overlay" @click.self="selectedItem = null">
      <div class="modal-content">
        <button class="close-x" @click="selectedItem = null">✕</button>
        <div class="modal-body">
          <img :src="selectedItem.image" class="modal-img" />
          <div class="modal-text">
            <h2>{{ selectedItem.name }}</h2>
            <p class="modal-price">Rp {{ selectedItem.price.toLocaleString() }}</p>
            <p class="desc">Bijoux délicats inspirés par l’élégance française, créés pour illuminer ton style.</p>
            <div class="action-btns">
              <button class="btn-order">Tambahkan ke Kotak</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedItem = ref(null)
const jewelryList = ref([
  { id: 1, name: 'Papillon Bleu', price: 229000, image: 'https://i.pinimg.com/736x/db/f3/b5/dbf3b5a23c3d4bc67a7315898dafc258.jpg' },
  { id: 2, name: 'Petit Nœud', price: 260000, image: 'https://i.pinimg.com/1200x/d6/7c/ed/d67ced6cfeed72de022be842ecd40681.jpg' },
  { id: 3, name: 'Fleur Brillante', price: 239000, image: 'https://i.pinimg.com/736x/82/19/fc/8219fcfb61c55ab4c44cd92f993e9c2b.jpg' },
  { id: 4, name: 'Cœur Cristal', price: 249000, image: 'https://i.pinimg.com/736x/e1/ea/c9/e1eac93da713cdb1b00fbf11241086de.jpg' },
  { id: 5, name: 'Couronne Bleue', price: 2000000, image: 'https://i.pinimg.com/736x/4b/07/87/4b07877d1177b40d4f45bae32e132978.jpg' },
  { id: 6, name: 'Mini Papillons', price: 219000, image: 'https://i.pinimg.com/control1/1200x/64/be/fd/64befdd5fd6499e7d2883a905496e54e.jpg' },
  { id: 7, name: 'Perle Ciel', price: 8209000, image: 'https://i.pinimg.com/control1/736x/b7/af/40/b7af40d1fab6f30d007d925b9530c24f.jpg' },
  { id: 8, name: 'Goutte Lumière', price: 258000, image: 'https://i.pinimg.com/1200x/2d/14/7d/2d147d5e8bf9a05580b7883f591a33bc.jpg' }
])
</script>

<style scoped>
/* Reset & Global */
.jewelry-page-wrapper { background-color: #f4f9ff; font-family: 'Poppins', sans-serif; }

/* HERO SECTION - TEMA BIRU SHIMMER */
.shimmer-hero {
  width: 100%; min-height: 100vh;
  background-image: linear-gradient(rgba(75, 140, 217, 0.2), rgba(75, 140, 217, 0.2)), url('https://i.pinimg.com/originals/e1/9b/8b/e19b8b41782fbb9cf10485c1580fcc64a9.jpg');
  background-size: cover; background-position: center; position: relative;
}

.hero-overlay-content { height: 85vh; display: flex; align-items: center; justify-content: space-between; padding: 0 10%; }

.glass-main-card {
  background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3); padding: 50px; border-radius: 40px;
  max-width: 550px; color: white;
}

.hero-main-title { font-size: 4.5rem; line-height: 1.1; margin-bottom: 25px; }

/* Tombol Putih Persis Gambar */
.btn-rounded-start {
  background: white; color: #333; border: none; padding: 12px 25px;
  border-radius: 50px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; gap: 15px; margin-bottom: 30px;
}
.arrow-circle-blue { background: #4b8cd9; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; }

/* 4 KOLOM BAWAH */
.hero-footer-features {
  background: #e1effe; display: grid; grid-template-columns: repeat(4, 1fr);
  padding: 40px 10%; border-radius: 60px 60px 0 0;
}
.feature-item-blue { text-align: center; color: #4b8cd9; }
.icon-circle-blue { width: 50px; height: 50px; background: white; border-radius: 50%; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; }

/* PRODUCT GRID SECTION */
.product-section-container { padding: 60px 10%; text-align: center; }
.section-title { font-size: 2rem; color: #333; margin-bottom: 5px; }
.section-subtitle { color: #888; margin-bottom: 40px; }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px; }

.card-item { background: white; border-radius: 20px; overflow: hidden; position: relative; box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: 0.3s; }
.card-item:hover { transform: translateY(-5px); }

.img-wrapper { position: relative; width: 100%; height: 300px; }
.img-wrapper img { width: 100%; height: 100%; object-fit: cover; }

.tag-new { position: absolute; top: 15px; left: 15px; background: #8bc34a; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; }
.wishlist-btn { position: absolute; top: 15px; right: 15px; background: white; border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; color: #888; }

.card-info { padding: 20px; text-align: left; }
.card-info h3 { font-size: 1.1rem; margin-bottom: 5px; color: #333; }
.price { color: #4b8cd9; font-weight: bold; margin-bottom: 15px; }
.btn-beli { background: #4b8cd9; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; width: 100%; }

/* MODAL STYLE */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); display: flex; justify-content: center; align-items: center; z-index: 999; }
.modal-content { background: white; padding: 40px; border-radius: 30px; position: relative; max-width: 700px; display: flex; gap: 30px; }
.modal-img { width: 280px; border-radius: 20px; object-fit: cover; }
.modal-price { color: #4b8cd9; font-size: 1.5rem; font-weight: bold; margin: 10px 0; }
.btn-order { background: #4b8cd9; color: white; border: none; padding: 12px; border-radius: 12px; width: 100%; cursor: pointer; font-weight: bold; }
.close-x { position: absolute; top: 20px; right: 20px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #ccc; }
</style>