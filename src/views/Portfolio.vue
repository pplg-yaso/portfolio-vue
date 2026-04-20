<template>
  <section id="portfolio" class="portfolio">
    <div class="container">

      <!-- TITLE -->
      <div class="title">
        <p class="subtitle">PORTFOLIO</p>
        <h1>Project Saya</h1>
      </div>

      <!-- GRID -->
      <div class="grid">

        <div class="card">
          <img :src="project1" alt="project" />
          <div class="overlay">
            <h3>Website Sekolah</h3>
          </div>
        </div>

        <div class="card">
          <img :src="project2" alt="project" />
          <div class="overlay">
            <h3>UI Design App</h3>
          </div>
        </div>

        <div class="card">
          <img :src="project3" alt="project" />
          <div class="overlay">
            <h3>Landing Page</h3>
          </div>
        </div>

        <div class="card">
          <img :src="project4" alt="project" />
          <div class="overlay">
            <h3>Portfolio Website</h3>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
  padding: 60px 20px;
}

.container {
  max-width: 1100px;
  margin: auto;
}

/* TITLE */
.title {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  color: #22c55e;
  letter-spacing: 3px;
}

.title h1 {
  margin-top: 10px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* CARD */
.card {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}

.card img {
  width: 100%;
  display: block;
  transition: 0.4s;
}

/* OVERLAY */
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: 0;
  transition: 0.4s;
}

.overlay h3 {
  margin-bottom: 20px;
}

/* HOVER */
.card:hover img {
  transform: scale(1.1);
}

.card:hover .overlay {
  opacity: 1;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>