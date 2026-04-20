<script setup>
</script>

<template>
  <div class="home">

    <section class="hero">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/960px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png"
        alt="Bayern Logo"
        class="logo"
      />
      <h1>FC Bayern München</h1>
      <p class="tagline">Mia San Mia 🔴⚪</p>
    </section>

    <section class="section">
      <h2>Tentang Klub</h2>

      <p>
        FC Bayern München bukan sekadar klub sepak bola—ia adalah simbol
        kebanggaan, konsistensi, dan mental juara. Didirikan pada tahun 1900 di
        kota München, Jerman, Bayern tumbuh dari klub kecil menjadi salah satu
        kekuatan terbesar dalam sejarah sepak bola dunia.
      </p>

      <p>
        Filosofi klub yang dikenal dengan slogan
        <strong>“Mia San Mia”</strong> mencerminkan kepercayaan diri, rasa
        memiliki, dan tekad untuk selalu menjadi yang terbaik, baik di dalam
        maupun di luar lapangan. Filosofi ini diwariskan dari generasi ke
        generasi dan menjadi identitas kuat Bayern München.
      </p>

      <p>
        Selama lebih dari satu abad, Bayern München telah mendominasi kompetisi
        domestik Jerman. Puluhan gelar Bundesliga yang diraih bukan hanya bukti
        kekuatan tim, tetapi juga hasil dari manajemen yang stabil, pembinaan
        pemain muda yang konsisten, serta perencanaan jangka panjang yang
        matang.
      </p>

      <p>
        Di level Eropa, Bayern München selalu menjadi klub yang disegani. Mereka
        telah menjuarai UEFA Champions League beberapa kali, termasuk prestasi
        treble winners yang menjadi salah satu pencapaian paling ikonik dalam
        sejarah sepak bola modern.
      </p>

      <p>
        Bayern juga dikenal sebagai rumah bagi para legenda. Nama-nama seperti
        Franz Beckenbauer, Gerd Müller, Oliver Kahn, hingga generasi modern
        seperti Philipp Lahm, Bastian Schweinsteiger, dan Thomas Müller telah
        membentuk DNA klub sebagai tim dengan mental juara dan kepemimpinan
        kuat.
      </p>

      <p>
        Dukungan suporter Bayern München menjadi kekuatan tersendiri. Allianz
        Arena yang megah selalu dipenuhi warna merah dan atmosfer yang
        menggetarkan. Di era sepak bola modern, Bayern tetap mempertahankan
        identitasnya sebagai klub yang sehat secara finansial tanpa kehilangan
        daya saing.
      </p>

      <p class="closing">
        <strong>Mia San Mia. 🔴⚪</strong>
      </p>
    </section>

    <section class="section">
      <h2>Galeri</h2>
      <div class="gallery">
        <img src="https://assets.goal.com/images/v3/blt607704a78d501c36/Jamal_Musiala_FC_Bayern_29102022.jpg" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeygMYCH-BgWI-7wEHZ-jAyROjuU9saBoRKQ&s" />
        <img src="https://assets.goal.com/images/v3/blt3d6c1b421091d3db/93306dd98ae3b7b1545da8b7e0b049c4ce11fe57.jpg" />
      </div>
    </section>

    <section class="section red">
      <h2>Prestasi</h2>
      <ul>
        <li>🏆 Bundesliga: 30+ Gelar</li>
        <li>🏆 DFB Pokal</li>
        <li>🏆 UEFA Champions League</li>
        <li>🏆 FIFA Club World Cup</li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

.hero {
  background: linear-gradient(135deg, #c8102e, #9b0f24);
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.home .hero h1 {
  font-size: 3rem;
}
.logo {
  width: 120px;
  margin-bottom: 20px;
}

.tagline {
  font-size: 1.1rem;
  opacity: 0.9;
}

.section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}

.section h2 {
  margin-bottom: 20px;
  color: #c8102e;
}

.section p {
  margin-bottom: 16px;
  line-height: 1.8;
  color: #333;
}

.closing {
  text-align: center;
  font-size: 1.1rem;
}

.section.red {
  background: #c8102e;
  color: white;
}

.section.red h2 {
  color: white;
}

.section.red li {
  margin-bottom: 8px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.gallery img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}
</style>
