<template>
  <div>

    <!-- HERO SECTION -->
    <section class="hero-section text-white text-center d-flex align-items-center">
      <div class="container">
        <h1 class="display-4 fw-bold">Welcome to FC Barcelona</h1>
        <p class="lead">
          Més que un club — Lebih dari sekadar klub.
        </p>
      </div>
    </section>

    <!-- TENTANG BARCA -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-md-6 mb-4 mb-md-0">
            <h2 class="fw-bold">Tentang FC Barcelona</h2>
            <p class="text-muted">
              FC Barcelona didirikan pada tahun 1899 dan merupakan salah satu klub
              paling sukses di dunia. Bermarkas di Camp Nou, Barcelona terkenal
              dengan gaya permainan tiki-taka dan akademi La Masia.
            </p>
          </div>

          <div class="col-md-6 text-center">
            <img
              src="/barca.jpg"
              class="img-fluid rounded-4 shadow"
              alt="Camp Nou"
            />
          </div>

        </div>

        <section class="stadium-highlight text-white text-center d-flex align-items-center">
        <div class="container">
            <h2 class="fw-bold">Spotify Camp Nou</h2>
            <p>Home of 99,000 passionate fans</p>
      </div>
    </section>
      </div>
    </section>

    <!-- PRESTASI -->
    <section class="bg-light py-5 text-center">
      <div class="container">
        <h2 class="mb-4">Prestasi Klub</h2>
        <div class="row">

          <div class="col-md-4">
            <h2 class="fw-bold text-danger">27</h2>
            <p>La Liga Titles</p>
          </div>

          <div class="col-md-4">
            <h2 class="fw-bold text-danger">5</h2>
            <p>Champions League</p>
          </div>

          <div class="col-md-4">
            <h2 class="fw-bold text-danger">31</h2>
            <p>Copa del Rey</p>
          </div>

        </div>
      </div>
    </section>

    <!-- PEMAIN TERKENAL -->
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">Legenda Barcelona</h2>

    <div class="row">

      <div class="col-md-4 mb-4">
        <div class="card shadow h-100">
          <img src="/messi.jpg" class="card-img-top player-img" />
          <div class="card-body text-center">
            <h5 class="card-title">Lionel Messi</h5>
            <p class="card-text">Top skor sepanjang masa Barcelona.</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card shadow h-100">
          <img src="/xavi.jpg" class="card-img-top player-img" />
          <div class="card-body text-center">
            <h5 class="card-title">Xavi Hernandez</h5>
            <p class="card-text">Master of midfield dan legenda tiki-taka.</p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card shadow h-100">
          <img src="/neymar.jpg" class="card-img-top player-img" />
          <div class="card-body text-center">
            <h5 class="card-title">Neymar Jr</h5>
            <p class="card-text">Bagian dari trio MSN yang legendaris.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(
         #0a1f44, 
      #8b0000
    ),
    url('/barca-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.stadium-highlight {
  min-height: 60vh;
  background: 
    linear-gradient(#00000099, #00000099),
    url('/camp.jpg');
  background-size: cover;
  background-position: center;
}

.player-img {
  height: 500px;
  object-fit: cover;
}

.card {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.card-body {
  background: #111a3c;
  color: white;
}

</style>