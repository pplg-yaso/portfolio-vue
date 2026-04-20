<template>
  <section class="merch-section py-5">
    <div class="container position-relative">

      <h2 class="text-left py-5 mb-1">Official Merchandise</h2>

     <section class="shop-hero">
  <div class="hero-content">
    <h1>KITS</h1>
    <button class="shop-btn">SHOP NOW →</button>
  </div>
</section>

      <!-- Scroll Wrapper -->
      <div class="merch-wrapper" ref="scrollContainer">
       <div
               class="product-card"
               v-for="(item, index) in products"
               :key="index"
               @click="openProduct(item)"
                >
          <div class="image-wrapper">
               <img :src="item.image" alt="product" />
               <span class="badge">BARÇA EXCLUSIVE</span>
          </div>

         <h5>{{ item.name }}</h5>
         <p class="price">{{ item.price }}</p>
      </div>
      </div>

 <!-- PRODUCT MODAL -->
<div v-if="selectedProduct" class="product-modal">
  <div class="modal-content">

    <button class="close-btn" @click="selectedProduct = null">✕</button>

    <img :src="selectedProduct.image" />

    <h3>{{ selectedProduct.name }}</h3>
    <p class="modal-price">{{ selectedProduct.price }}</p>

    <p class="description">
      Official limited edition merchandise.
      Premium material & exclusive design.
    </p>
  

    <button class="add-cart-btn" @click="addToCart">
      🛒 Add to Cart
    </button>

  </div>
</div>


    </div>
<!-- SECTION JERSEY -->
<section class="merch-section py-5">
  <div class="container position-relative">

    <h2 class="text-left py-5 mb-1">Official Jerseys</h2>

    <!-- Scroll Wrapper -->
    <div class="merch-wrapper" ref="jerseyContainer">
      <div
        class="product-card"
        v-for="(jersey, index) in jerseys"
        :key="index"
        @click="openJersey(jersey)"
      >
        <div class="image-wrapper">
          <img :src="jersey.image" alt="jersey" />
          <span class="badge">BARÇA OFFICIAL</span>
        </div>

        <h5>{{ jersey.name }}</h5>
        <p class="price">{{ jersey.price }}</p>
      </div>
    </div>

    <!-- JERSEY MODAL -->
    <div v-if="selectedJersey" class="product-modal">
      <div class="modal-content">
        <button class="close-btn" @click="selectedJersey = null">✕</button>

        <img :src="selectedJersey.image" />

        <h3>{{ selectedJersey.name }}</h3>
        <p class="modal-price">{{ selectedJersey.price }}</p>

        <p class="description">
          Official FC Barcelona jersey. Premium material & authentic design.
        </p>

        <button class="add-cart-btn" @click="addJerseyToCart">
          🛒 Add to Cart
        </button>
      </div>
    </div>


  </div>

<!-- SECTION TIKET -->
<section class="merch-section py-5">
  <div class="container position-relative">

    <h2 class="text-left py-5 mb-1">Match Tickets</h2>

    <!-- Scroll Wrapper -->
    <div class="merch-wrapper" ref="ticketContainer">
      <div
        class="product-card"
        v-for="(ticket, index) in tickets"
        :key="index"
        @click="openTicket(ticket)"
      >
        <div class="image-wrapper">
          <img :src="ticket.image" alt="ticket" />
          <span class="badge">MATCHDAY</span>
        </div>

        <h5>{{ ticket.match }}</h5>
        <p class="price">{{ ticket.price }}</p>
        <p class="date">{{ ticket.date }}</p>
      </div>
    </div>

    <!-- TICKET MODAL -->
    <div v-if="selectedTicket" class="product-modal">
      <div class="modal-content">
        <button class="close-btn" @click="selectedTicket = null">✕</button>

        <img :src="selectedTicket.image" />

        <h3>{{ selectedTicket.match }}</h3>
        <p class="modal-price">{{ selectedTicket.price }}</p>
        <p class="date">📅 {{ selectedTicket.date }}</p>

        <p class="description">
          Official FC Barcelona match ticket. Enjoy the game at Camp Nou!
        </p>

        <button class="add-cart-btn" @click="addTicketToCart">
          🛒 Add to Cart
        </button>
        
      </div>
    </div>


  </div>
</section>

</section>

  </section>
</template>

<script>
export default {
  name: "MerchSection",

  data() {
    return {
      // Merchandise
      products: [
        {
          name: "Jacket Black Aftermatch Barça",
          price: "€89,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_8070011_ed27e155-476c-4853-89ef-752df7124849.jpg?v=1770735273&width=1200"
        },
        {
          name: "Tee Blue Aftermatch Barça",
          price: "€39,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_7954SergiAlcazar_028_2_b5e397b2-f577-4957-8481-eb935db09c50.jpg?v=1770626052&width=1200"
        },
        {
          name: "Grey Hoodie Aftermatch Barça",
          price: "€69,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_7813SergiAlcazar_008.jpg?v=1770625555&width=1200"
        },
        {
          name: "Red Hoodie Aftermatch Barça",
          price: "€69,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_9327145.jpg?v=1770625918&width=1200"
        },
        {
          name: "Creew Blue Aftermatch Barça",
          price: "€59,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_7557SergiAlcazar_007.jpg?v=1770625113&width=1200"
        },
        {
          name: "Tee Grey Light Aftermatch Barça",
          price: "€29,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_7482SergiAlcazar_004.jpg?v=1770625804&width=1200"
        },
        {
          name: "Pants Grey Light Aftermatch Barça",
          price: "€59,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_9646_Edit_159.jpg?v=1770626230&width=1200"
        },
        {
          name: "Shorts Grey Light Aftermatch Barça",
          price: "€39,99 EUR",
          image: "https://store.fcbarcelona.com/cdn/shop/files/SAB_7735005_2_6b4e437e-bd18-4a51-a7a0-068304e95878.jpg?v=1770735356&width=1200"
        }
      ],

      // Jersey
      jerseys: [
        { name: "Home Jersey 2025/26", 
          price: "€99,99 EUR", 
          image: "https://store.fcbarcelona.com/cdn/shop/files/base-ambilight.webp?v=12057333375252784091" 
        },
        { name: "Away Jersey 2025/26", 
          price: "€99,99 EUR", 
          image: "https://store.fcbarcelona.com/cdn/shop/files/base-ambilight_1.webp?v=6857459708159031844" 
        },
        { name: "Third Jersey 2025/26", 
          price: "€109,99 EUR", 
          image: "https://store.fcbarcelona.com/cdn/shop/files/Base_Ambilight.webp?v=14411219732931930239" 
        },
        { name: "Fourth Jersey 2025/26", 
          price: "€109,99 EUR", 
          image: "https://store.fcbarcelona.com/cdn/shop/files/Base-Ambilight_4904efc3-1f51-4ac6-8e26-46c93e85a1ba.webp?v=14902867260616599597" 
        },
        { name: "FC Barcelona x Kobe Bryant 2025/26", 
          price: "€64,99 EUR", 
          image: "https://store.fcbarcelona.com/cdn/shop/files/BARCA1-24794.jpg?v=1769500275&width=1200" 
        },
        { name: "Goalkeeper Jersey 2025/26", 
        price: "€119,99 EUR", 
        image: "https://store.fcbarcelona.com/cdn/shop/files/base-ambilight_f92f9033-a479-4ec9-a791-16d9b09a76a2.webp?v=9673100457543370903" 
        }
      ],

      // Section Tickets
    tickets: [
      {
        match: "FC Barcelona vs Real Madrid",
        price: "€120 EUR",
        date: "25 Feb 2026",
        image: "https://i.pinimg.com/1200x/2d/74/c7/2d74c70f0df1c8305f5584970533280f.jpg"
      },
      {
        match: "FC Barcelona vs Atlético Madrid",
        price: "€100 EUR",
        date: "03 Mar 2026",
        image: "https://i.pinimg.com/736x/4c/74/ff/4c74ff8aac077daea898a4978e0a2020.jpg"
      },
      {
        match: "FC Barcelona vs Sevilla",
        price: "€90 EUR",
        date: "10 Mar 2026",
        image: "https://www.fcbarcelona.com/fcbarcelona/photo/2025/10/03/43684c26-4440-41a2-8f93-043b5273272a/TIMEZONES-escuts-SEVILLA.jpg"
      },
      {
        match: "FC Barcelona vs Valencia",
        price: "€95 EUR",
        date: "17 Mar 2026",
        image: "https://www.fcbarcelona.com/fcbarcelona/photo/2025/09/12/79176e0a-8453-4a04-b4dc-dfd3dc7e3cf8/TIMEZONES-escuts-VALENCIA.jpg"
      }
    ],
      // Selected & cart
      selectedProduct: null,
      selectedJersey: null,
      selectedTicket: null,
      cart: []
    }
  },

  

  methods: {
    // Merchandise
    openProduct(product) { this.selectedProduct = product },
    addToCart() { this.cart.push(this.selectedProduct); alert("Added to Cart 🛒"); this.selectedProduct = null },
    scrollLeft() { this.$refs.scrollContainer.scrollBy({ left: -250, behavior: "smooth" }) },
    scrollRight() { this.$refs.scrollContainer.scrollBy({ left: 250, behavior: "smooth" }) },

    // Jersey
    openJersey(jersey) { this.selectedJersey = jersey },
    addJerseyToCart() { this.cart.push(this.selectedJersey); alert("Jersey added to Cart 🛒"); this.selectedJersey = null },
    scrollJerseyLeft() { this.$refs.jerseyContainer.scrollBy({ left: -250, behavior: "smooth" }) },
    scrollJerseyRight() { this.$refs.jerseyContainer.scrollBy({ left: 250, behavior: "smooth" }) },

     // Tickets
     openTicket(ticket) { this.selectedTicket = ticket },
     addTicketToCart() { this.cart.push(this.selectedTicket); alert("Ticket added to Cart 🛒"); this.selectedTicket = null },
     scrollTicketLeft() { this.$refs.ticketContainer.scrollBy({ left: -250, behavior: "smooth" }) },
     scrollTicketRight() { this.$refs.ticketContainer.scrollBy({ left: 250, behavior: "smooth" }) }

  }
}
</script>


<style scoped>
.shop-hero {
  height: 90vh;
  background: url('https://store.fcbarcelona.com/cdn/shop/files/Main-Banner-Equipaciones-d_1_9219ca04-2b90-4ce7-ac4a-0de0d65a9917.jpg?v=1774613136&width=3000') center/cover no-repeat;
  display: flex;
  align-items: center;
  position: relative;
}

.shop-hero {
  justify-content: center;
}

.shop-hero {
  margin-bottom: 60px;
}

.shop-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0.7) 20%,
    rgba(0,0,0,0.3) 50%,
    transparent
  );
}

/* CONTENT DIPINDAH KE KIRI */
.overlay {
  position: relative;
  color: white;

  /* CENTER FIX */
  width: 100%;
  text-align: center;

  /* HAPUS YANG INI */
  padding-left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* JUDUL */
.overlay h1 {
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 6px;
  margin-bottom: 20px;
}

/* BUTTON */
.shop-btn {
  padding: 14px 35px;
  background: #f4c430;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s ease;
}

.shop-btn:hover {
  background: #ffd700;
  transform: translateY(-3px);
}

.merch-section {
  background: linear-gradient(to right, #0f1333, #111433);
  color: white;
}

.merch-wrapper {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 15px;
}

.merch-wrapper::-webkit-scrollbar {
  display: none;
}

.product-card {
  min-width: 190px;
  background: #161a40;
  padding: 20px;
  border-radius: 15px;
  flex-shrink: 0;
  transition: 0.3s;
  text-align: center;
}

/* MODAL BACKGROUND */
.product-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* MODAL BOX */
.modal-content {
  background: #161a40;
  padding: 30px;
  border-radius: 20px;
  width: 350px;
  text-align: center;
  position: relative;
  animation: fadeIn 0.3s ease;
}

.modal-content img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
}

.modal-price {
  color: gold;
  font-weight: bold;
  margin: 10px 0;
}

.description {
  font-size: 14px;
  opacity: 0.8;
}

/* CLOSE BUTTON */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

/* ADD TO CART */
.add-cart-btn {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  background: gold;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.add-cart-btn:hover {
  background: white;
  color: black;
}

/* ANIMATION */
@keyframes fadeIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.product-card:hover {
  transform: translateY(-10px);
}

.image-wrapper {
  position: relative;
}

.product-card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 10px;
}

.badge {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: linear-gradient(45deg, red, blue);
  padding: 5px 10px;
  font-size: 10px;
  border-radius: 20px;
}

.product-card h5 {
  font-size: 14px;
  margin-top: 10px;
}

.price {
  font-size: 13px;
  color: gold;
  font-weight: bold;
}

.product-card {
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(133, 1, 1, 0.471);
}
</style>