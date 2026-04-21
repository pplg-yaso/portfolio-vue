<template>
  <div class="home-wrapper">
    <section class="hero-section">
      <div class="coquette-card">
        <div class="card-inner">
          <p class="subtitle">The Art of</p>
          <h1 class="title">Belle Élysée</h1>
          <div class="divider"></div>
          <p class="presented">IM ESTHER</p>
        </div>
      </div>
    </section>

    <section class="category-section">
      <div class="category-grid">
        <router-link to="/clothes" class="cat-card card-1">
          <span>new<br>arrivals</span>
        </router-link>
        <div class="cat-card card-2">
          <span>Most<br>Loved</span>
        </div>
        <div class="cat-card card-3">
          <span>what's<br>on sale</span>
        </div>
        <div class="cat-card card-4">
          <span>Gift<br>Ideas</span>
        </div>
      </div>
      <div class="see-new-banner">
        <span class="flower-icon">✿</span>
        <p class="see-new-text">see what's new</p>
        <div class="new-stamp"><span class="stamp-text">NEW COLLECTION</span></div>
      </div>
    </section>

    <section class="new-arrivals-section">
      <div class="section-header">
        <h2 class="arrival-title">New Arrivals Products</h2>
        <p class="arrival-subtitle">Discover our treasures, 5 items per category.</p>
      </div>

      <div class="arrival-grid">
        <div 
          v-for="(category, index) in arrivalCategories" 
          :key="category.id" 
          class="arrival-card"
          @click="openCategoryModal(index)"
        >
          <div class="badge-new">New</div>
          
          <div 
            class="wishlist-icon" 
            :class="{ 'active-love': wishlist[index] }" 
            @click.stop="toggleWishlist(index)"
          >
            {{ wishlist[index] ? '♥' : '♡' }}
          </div>

          <div class="arrival-img-container">
            <img :src="category.mainImg" :alt="category.name" />
          </div>

          <div class="arrival-info">
            <h4>{{ category.name }}</h4>
            <p>{{ category.priceLabel }}</p>
          </div>
        </div>
      </div>
    </section>

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">✖</button>
        
        <button class="modal-nav prev" @click="prevModalSlide">❮</button>
        
        <div class="modal-image-container">
          <img :src="activeGallery[currentModalIndex]" alt="Popup Image" />
          
          <div class="modal-dots">
            <span 
              v-for="(img, idx) in activeGallery" 
              :key="idx" 
              :class="{ active: currentModalIndex === idx }"
              @click="currentModalIndex = idx"
            ></span>
          </div>
        </div>
        
        <button class="modal-nav next" @click="nextModalSlide">❯</button>
      </div>
    </div>

    <section class="featured-section">
      <div class="featured-main-card">
        <div class="side-menu-container">
          <h2 class="side-title">Productos</h2>
          <p class="side-subtitle">línea Blú</p>
          
          <div class="side-list">
            <div class="side-item" :class="{ active: activeSideItem === 0 }" @click="activeSideItem = 0">
              <span class="item-text">Cuenco<br>plano Blú</span>
              <div class="item-thumb"><img src="https://i.pinimg.com/736x/e0/a4/f2/e0a4f285e74ac5e808217a06d37f9f5c.jpg" /></div>
            </div>
            <div class="side-item" :class="{ active: activeSideItem === 1 }" @click="activeSideItem = 1">
              <span class="item-text">Cuenco<br>hondo Blú</span>
              <div class="item-thumb"><img src="https://i.pinimg.com/736x/5a/89/06/5a8906291a7e00a8526f4aa5add533fb.jpg" /></div>
            </div>
            <div class="side-item" :class="{ active: activeSideItem === 2 }" @click="activeSideItem = 2">
              <span class="item-text">Plato de<br>mesa Blú</span>
              <div class="item-thumb"><img src="https://i.pinimg.com/736x/15/49/4b/15494b971e56c532da141891b775a03c.jpg" /></div>
            </div>
          </div>
        </div>

        <div class="content-area">
          <div class="gallery-section">
            <div class="main-image-wrapper">
              <img :src="productImages[currentIndex]" class="main-img" />
            </div>
            <div class="thumb-controls">
              <button class="nav-btn prev" @click="prevSlide">❮</button>
              <div class="thumb-strip">
                <img v-for="(img, index) in productImages" :key="index" :src="img" :class="{ 'thumb-active': currentIndex === index }" @click="currentIndex = index" />
              </div>
              <button class="nav-btn next" @click="nextSlide">❯</button>
            </div>
          </div>

          <div class="product-info-box">
            <h3 class="prod-name">Cuenco plano Blú</h3>
            <p class="prod-price">$ 2500</p>
            <p class="prod-desc">
              Un univers soigneusement sélectionné de beauté et d'élégance — du maquillage et des soins de la peau au parfum, aux bijoux, aux talons et à la couture..
            </p>
            
            <div class="options-row">
              <div class="color-picker">
                <span>Colores</span>
                <div class="color-dot blue"></div>
              </div>
              <div class="qty-picker">
                <span>Cantidad</span>
                <div class="qty-controls">
                  <button @click="qty > 1 ? qty-- : null">-</button>
                  <span>{{ qty }}</span>
                  <button @click="qty++">+</button>
                </div>
              </div>
            </div>
            <button class="btn-comprar">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- KODE LAMA (FEATURED SECTION) ---
const qty = ref(1)
const currentIndex = ref(0)
const activeSideItem = ref(0) 

const productImages = ref([
  'https://i.pinimg.com/736x/db/ef/3c/dbef3c5bb2c4f26bbbae99ffa127cd7e.jpg', 
  'https://i.pinimg.com/1200x/ea/ec/71/eaec71de093f0656a7cff942edbff661.jpg',
  'https://i.pinimg.com/736x/7b/64/ec/7b64ec747b27fa2b6fc25c416a6eb78d.jpg',
  'https://i.pinimg.com/1200x/9a/a1/f2/9aa1f2b05d0e955fbcdf311663525b21.jpg',
  'https://i.pinimg.com/736x/a9/b2/81/a9b281f1adbf34ff978e7c8b6c461d24.jpg'
])

const nextSlide = () => { currentIndex.value = (currentIndex.value + 1) % productImages.value.length }
const prevSlide = () => { currentIndex.value = (currentIndex.value - 1 + productImages.value.length) % productImages.value.length }

// --- KODE BARU (KATEGORI DENGAN 5 PRODUK) ---
const wishlist = ref([false, false, false, false])
const toggleWishlist = (index) => { wishlist.value[index] = !wishlist.value[index] }

const arrivalCategories = ref([
  { 
    id: 1, 
    name: 'Dress Collection', 
    priceLabel: 'From Rp 450.000', 
    mainImg: 'https://i.pinimg.com/736x/4d/89/98/4d8998401c7c0553b8750133d155d224.jpg',
    gallery: [
      'https://i.pinimg.com/736x/78/f0/64/78f064965d5ae78c4af0384e63b5e818.jpg', // Baju 1
      'https://i.pinimg.com/736x/9a/db/af/9adbaf4638da6fd4496c4b36dc706cad.jpg', // Baju 2
      'https://i.pinimg.com/736x/2c/30/55/2c30559612f7fbaaa13140f3b21f47c6.jpg', // Baju 3
      'https://i.pinimg.com/736x/79/12/81/791281da9eb963646b2493ecdce36549.jpg', // Baju 4
      'https://i.pinimg.com/736x/d8/15/5e/d8155e41498766a7a524b18fcf526285.jpg'  // Baju 5
    ]
  },
  { 
    id: 2, 
    name: 'Makeup Essentials', 
    priceLabel: 'From Rp 250.000', 
    mainImg: 'https://i.pinimg.com/1200x/c1/b1/5c/c1b15c81e094034cabe127748298cae0.jpg',
    gallery: [
      'https://i.pinimg.com/736x/ef/b3/7e/efb37e8b705caf6e4c408da5af315302.jpg', // Makeup 1
      'https://i.pinimg.com/474x/36/bd/77/36bd7788a0446036160eb9c0025cf605.jpg', // Makeup 2
      'https://i.pinimg.com/736x/1a/63/d9/1a63d90425dc63b4f6b334108df362ce.jpg', // Makeup 3
      'https://i.pinimg.com/736x/e5/54/20/e5542019a6263fa004f323b32c1df560.jpg', // Makeup 4
      'https://i.pinimg.com/736x/34/1a/d9/341ad9ab0b342d2e2e6945b53b690b3c.jpg'  // Makeup 5
    ]
  },
  { 
    id: 3, 
    name: 'Jewelry Set', 
    priceLabel: 'From Rp 850.000', 
    mainImg: 'https://i.pinimg.com/736x/60/1b/1b/601b1b4fabce622e1e3db144376af216.jpg',
    gallery: [
      'https://i.pinimg.com/736x/60/1b/1b/601b1b4fabce622e1e3db144376af216.jpg', // Jewelry 1
      'https://i.pinimg.com/736x/1f/ef/84/1fef845036fc7e5fc909cd6a0f58c021.jpg', // Jewelry 2
      'https://i.pinimg.com/736x/22/d8/54/22d854bd48a928e6969f4d31d742fefb.jpg', // Jewelry 3
      'https://i.pinimg.com/1200x/80/0d/5a/800d5aec8e489a2e1382c297620c5811.jpg', // Jewelry 4
      'https://i.pinimg.com/736x/8b/f3/70/8bf370d8cc4e3ec9b232318c4c141356.jpg'  // Jewelry 5
    ]
  },
  { 
    id: 4, 
    name: 'Coquette Perfume', 
    priceLabel: 'From Rp 320.000', 
    mainImg: 'https://i.pinimg.com/736x/94/30/f2/9430f2f84cf35938f8cdf92118dfe964.jpg',
    gallery: [
      'https://i.pinimg.com/736x/02/f7/d0/02f7d0ea00fc965f93e6dc2062699f6c.jpg', // Perfume 1
      'https://i.pinimg.com/736x/02/41/3c/02413c88c99572adb384f2c6c7ffc5ba.jpg', // Perfume 2
      'https://i.pinimg.com/1200x/93/f3/48/93f3486eaa62e8d1de1c77a3de3dfd22.jpg', // Perfume 3
      'https://i.pinimg.com/736x/38/b4/61/38b461f1069e3db93c598fb0c74257a9.jpg', // Perfume 4
      'https://i.pinimg.com/1200x/93/f3/48/93f3486eaa62e8d1de1c77a3de3dfd22.jpg'  // Perfume 5
    ]
  }
])

const showModal = ref(false)
const currentModalIndex = ref(0)
const activeGallery = ref([]) // Untuk menampung foto kategori yang sedang dibuka

const openCategoryModal = (index) => {
  activeGallery.value = arrivalCategories.value[index].gallery
  currentModalIndex.value = 0
  showModal.value = true
}

const closeModal = () => { showModal.value = false }

const nextModalSlide = () => {
  currentModalIndex.value = (currentModalIndex.value + 1) % activeGallery.value.length
}
const prevModalSlide = () => {
  currentModalIndex.value = (currentModalIndex.value - 1 + activeGallery.value.length) % activeGallery.value.length
}
</script>

<style scoped>
/* SEMUA CSS LAMA KAMU TETAP DI SINI, TIDAK ADA YANG DIUBAH */
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;1,400&family=Poppins:wght@300;400;600&display=swap');

.home-wrapper { width: 100%; font-family: 'Poppins', sans-serif; overflow-x: hidden; }

.hero-section { min-height: 90vh; background: repeating-linear-gradient(90deg, #f4f9ff, #f4f9ff 40px, #e8f4ff 40px, #e8f4ff 80px); display: flex; justify-content: center; align-items: center; padding: 40px; }
.coquette-card { background-color: #fff; border-radius: 50%; padding: 80px 120px; border: 3px dashed #b8dafd; text-align: center; box-shadow: 0 15px 40px rgba(75, 140, 217, 0.12); }
.title { font-family: 'Great Vibes', cursive; font-size: 6rem; color: #4b8cd9; margin: 0; }
.subtitle { font-family: 'Playfair Display', serif; font-style: italic; color: #555; }
.divider { width: 150px; height: 1px; background-color: #b8dafd; margin: 20px auto; }
.category-section { padding: 80px 10%; background-color: #ffffff; }
.category-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 50px; }
.cat-card { aspect-ratio: 1/1; display: flex; justify-content: center; align-items: center; text-align: center; text-decoration: none; font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: bold; border-radius: 8px; box-shadow: 0 8px 15px rgba(0,0,0,0.06); transition: all 0.3s ease; }

.see-new-banner { background-color: #f4f9ff; padding: 50px; text-align: center; position: relative; border-radius: 12px; }
.see-new-text { font-family: 'Great Vibes', cursive; font-size: 2.5rem; color: #4b8cd9; margin: 0; }

.featured-section { padding: 80px 5%; background-color: #f9fcff; display: flex; justify-content: center; }

.featured-main-card {
  background-color: #f0f3f7; 
  border-radius: 60px; 
  display: flex;
  padding: 50px;
  box-shadow: 0 30px 70px rgba(0,0,0,0.03); 
  gap: 50px;
  max-width: 1200px;
  width: 100%;
}

.side-menu-container { width: 220px; flex-shrink: 0; }
.side-title { color: #4b8cd9; font-size: 2rem; font-weight: 600; margin: 0; }
.side-subtitle { color: #888; font-size: 1rem; margin: 0 0 40px 0; }

.side-list { display: flex; flex-direction: column; gap: 15px; }
.side-item {
  background-color: transparent; border-radius: 30px;
  display: flex; align-items: center; justify-content: flex-end; gap: 15px;
  padding: 10px 15px; cursor: pointer; color: #777; transition: 0.3s;
}

.side-item.active {
  background-color: #ffffff;
  color: #4b8cd9;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(75, 140, 217, 0.08);
}

.item-text { font-size: 0.9rem; line-height: 1.3; text-align: right; }
.item-thumb { 
  width: 60px; height: 60px; background: #fff; 
  border-radius: 20px; overflow: hidden; border: 1.5px solid #eef6ff;
  flex-shrink: 0;
}
.item-thumb img { width: 100%; height: 100%; object-fit: cover; }

.content-area {
  flex: 1;
  display: flex;
  gap: 40px;
  align-items: center; 
}

.gallery-section {
  display: flex; flex-direction: column; align-items: center; gap: 20px;
}

.main-image-wrapper {
  width: 350px; height: 350px; 
  background: #ffffff; 
  border-radius: 50px; 
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
}
.main-img { width: 100%; height: 100%; object-fit: cover; } 

.thumb-controls { display: flex; align-items: center; gap: 15px; }

.nav-btn {
  background: none; border: none; font-size: 1.5rem; color: #4b8cd9;
  cursor: pointer; transition: 0.3s; padding: 5px;
}
.nav-btn:hover { transform: scale(1.2); }

.thumb-strip { display: flex; gap: 10px; }
.thumb-strip img {
  width: 60px; height: 60px; background: #fff;
  border-radius: 15px; object-fit: cover; cursor: pointer;
  border: 2px solid #eef6ff; opacity: 0.5; transition: 0.3s;
}
.thumb-strip img.thumb-active { border-color: #4b8cd9; opacity: 1; }

.product-info-box { flex: 1; }
.prod-name { font-size: 2rem; color: #4b8cd9; font-weight: 600; margin: 0; }
.prod-price { font-size: 1.5rem; color: #555; margin: 10px 0 20px 0; }
.prod-desc { color: #777; font-size: 0.95rem; line-height: 1.6; font-weight: 300; }

.options-row { display: flex; gap: 30px; margin: 30px 0; font-size: 0.9rem; color: #555; }
.color-picker, .qty-picker { display: flex; flex-direction: column; gap: 10px; }
.color-dot { width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px #4b8cd9; }
.color-dot.blue { background-color: #4b8cd9; }

.qty-controls { display: flex; align-items: center; gap: 15px; color: #333; }
.qty-controls button { background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #4b8cd9; }
.qty-controls span { font-weight: 600; }

.btn-comprar {
  background-color: #ffffff; color: #4b8cd9; border: none;
  padding: 15px 40px; border-radius: 20px; font-weight: 600; font-size: 1rem;
  cursor: pointer; box-shadow: 0 10px 20px rgba(75, 140, 217, 0.1); transition: 0.3s;
}
.btn-comprar:hover { box-shadow: 0 15px 30px rgba(75, 140, 217, 0.2); transform: translateY(-3px); }

.cat-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 15px 30px rgba(138, 100, 173, 0.2);
  filter: brightness(1.05);
}

.card-1 { background-color: #f0f8ff; color: #7ab3ef; } 
.card-2 { background-color: #e3f2fd; color: #7ab3ef; } 
.card-3 { background-color: #d1e9ff; color: #7ab3ef; } 
.card-4 { background-color: #bbdefb; color: #7ab3ef; } 

.new-arrivals-section {
  padding: 60px 10%;
  background-color: #f4f9ff;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.arrival-title { font-size: 1.8rem; color: #333; margin: 0; font-weight: 600; }
.arrival-subtitle { color: #888; font-size: 0.9rem; margin-top: 5px; }

.arrival-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

.arrival-card {
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.arrival-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(75, 140, 217, 0.1);
}

.arrival-img-container { width: 100%; aspect-ratio: 3/4; overflow: hidden; border-radius: 8px 8px 0 0; }
.arrival-img-container img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
.arrival-card:hover img { transform: scale(1.05); }

.badge-new {
  position: absolute; top: 12px; left: 12px;
  background-color: #98d134; color: white;
  padding: 3px 12px; border-radius: 20px;
  font-size: 0.7rem; font-weight: bold; z-index: 2;
}

.wishlist-icon {
  position: absolute; top: 12px; right: 12px;
  background: white; width: 32px; height: 32px;
  display: flex; justify-content: center; align-items: center;
  border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  color: #ccc; cursor: pointer; z-index: 2;
  transition: 0.3s; font-size: 1.2rem;
}

.wishlist-icon.active-love {
  color: #4b8cd9;
  background-color: #eaf2fa;
}

.arrival-info { text-align: left; padding: 15px; }
.arrival-info h4 { font-size: 1rem; color: #444; margin: 0 0 5px 0; font-weight: 500; }
.arrival-info p { color: #4b8cd9; font-weight: bold; margin: 0; }

.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex; justify-content: center; align-items: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 30px;
}

.modal-image-container {
  position: relative;
  width: 450px;
  height: 550px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.modal-image-container img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.modal-nav {
  background: white; border: none;
  width: 50px; height: 50px;
  border-radius: 50%;
  font-size: 1.5rem; color: #4b8cd9;
  cursor: pointer; transition: 0.3s;
  display: flex; justify-content: center; align-items: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.modal-nav:hover { transform: scale(1.1); background-color: #f4f9ff; }

.close-btn {
  position: absolute;
  top: -40px; right: 0;
  background: none; border: none;
  font-size: 2rem; color: white;
  cursor: pointer; transition: 0.3s;
}
.close-btn:hover { color: #ff6b6b; transform: scale(1.1); }

.modal-dots {
  position: absolute; bottom: 20px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 10px;
  background: rgba(255, 255, 255, 0.7);
  padding: 8px 15px;
  border-radius: 20px;
}

.modal-dots span {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer; transition: 0.3s;
}

.modal-dots span.active {
  background: #4b8cd9;
  transform: scale(1.2);
}
</style>