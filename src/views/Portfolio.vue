<template>
  <section class="portfolio">

    <!-- TOP IMAGE -->
<div class="portfolio-hero">
  <img src="https://sports.inquirer.net/files/2026/01/AFP__20260111__92CQ7ZK__v1__HighRes__FblKsaSupercupBarcelonaRealMadrid.jpg" 
   alt="Barcelona Team">
   <div class="hero-text">
    <h2>More Than A Club</h2>
  </div>
</div>

    <!-- MEGA GRID -->
    <div class="mega-grid">

      <div class="column">
        <h4>Goalkeepers</h4>
        <p>Wojciech Szczęsny</p>
        <p>Joan Garcia</p>
        <p>Ter Stegen</p>
      </div>

      <div class="column">
        <h4>Defenders</h4>
        <p>João Cancelo</p>
        <p>Alejandro Balde</p>
        <p>Ronald Araujo</p>
        <p>Pau Cubarsí</p>
        <p>Andreas Christensen</p>
      </div>

      <div class="column">
        <h4>Midfielders</h4>
        <p>Gavi</p>
        <p>Pedri</p>
        <p>Fermín López</p>
        <p>Frenkie de Jong</p>
        <p>Dani Olmo</p>
      </div>

      <div class="column">
        <h4>Forwards</h4>
        <p>Ferran Torres</p>
        <p>Robert Lewandowski</p>
        <p>Lamine Yamal</p>
        <p>Raphinha</p>
      </div>

      <div class="column">
        <h4>Products</h4>
        <p>Online Store</p>
        <p>Tickets & Museum</p>
        <p>Membership</p>
        <p>Support/FAQs</p>
      </div>

      <div class="column">
        <h4>Club</h4>
        <p>Stadium</p>
        <p>Anthem</p>
        <p>Work With Us</p>
      </div>

      <div class="column">
        <h4>History</h4>
        <p>Dream Team Era</p>
        <p>Champions League</p>
        <p>Foundation Years</p>
      </div>

    </div>


  </section>
</template>
<style scoped>

.portfolio-hero {
  width: 100%;
  height: 600px;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 80px;
}

.portfolio-hero {
  position: relative;
}

.hero-text {
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: gold;
  font-size: 28px;
  font-weight: bold;
}

.portfolio-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(75%);
  transition: 0.4s ease;
}

.portfolio-hero:hover img {
  transform: scale(1.05);
  filter: brightness(85%);
}

.portfolio {
  background: linear-gradient(180deg, #0f1333 0%, #111433 100%);
  color: white;
  padding: 150px 80px 60px 80px;
}

/* GRID ATAS */
.mega-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 60px;
  margin-bottom: 80px;
}

.column h4 {
  font-weight: 700;
  margin-bottom: 25px;
  letter-spacing: 1px;
  font-size: 15px;
  text-transform: uppercase;
  color: #ffffff;
}


.column p {
  font-size: 14px;
  color: #9fa4c7;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.25s ease;
}

.column p:hover {
  color: #ffffff;
  padding-left: 6px;
}



/* BOTTOM SECTION */
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 40px;
}

.bottom-left h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.bottom-left p {
  font-size: 13px;
  color: #aaa;
}

.bottom-center {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #aaa;
}

.bottom-center p {
  cursor: pointer;
}

.bottom-right h2 {
  font-size: 28px;
  letter-spacing: 2px;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .mega-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>