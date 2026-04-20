<template>
  <section class="hero">
    <div class="hero-content">

      <!-- LEFT -->
      <div class="left">
        <h3 class="brand">☕ TETANGGA KOPI</h3>

        <h1>
          TETANGGA<br />
          KOPI
        </h1>

        <p>
          Kopi terbaik untuk menemani harimu.
          Hangat, nyaman, dan penuh cerita.
        </p>

        <router-link to="/services" class="btn">
          Lihat Menu
        </router-link>
      </div>

      <!-- RIGHT -->
      <div class="right">
        <div class="circle">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="coffee"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  background: #1f3b2c;
  display: flex;
  align-items: center;
  padding: 0 100px;
  color: #f5f1eb;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left {
  flex: 1;
}

.brand {
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  opacity: 0.8;
}

h1 {
  font-size: 70px;
  line-height: 1.1;
  margin-bottom: 20px;
}

p {
  max-width: 400px;
  margin-bottom: 30px;
  line-height: 1.6;
}

.btn {
  padding: 12px 28px;
  background: #c49a6c;
  color: white;
  text-decoration: none;
  font-size: 14px;
  border-radius: 30px;
  transition: 0.3s;
}

.btn:hover {
  background: #a67c52;
}

.right {
  flex: 1;
  display: flex;
  justify-content: center;
}

/* INI YANG BIKIN PASTI BULAT */
.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
