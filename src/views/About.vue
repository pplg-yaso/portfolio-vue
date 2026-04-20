<script setup>
</script>

<template>
  <div class="about">
    <section class="hero">
      <h1>Tentang Bayern München</h1>
      <p class="tagline">Lebih dari sekadar klub—simbol semangat dan prestasi</p>
    </section>

    <section class="section">
      <h2>Sejarah Singkat</h2>

      <p>
        FC Bayern München lahir pada 27 Februari 1900 di jantung kota München.
        Klub ini mulai sebagai klub kecil di Bavaria, namun dalam beberapa dekade
        berkembang menjadi salah satu tim paling dominan di Jerman dan Eropa.
        Dengan filosofi yang jelas, Bayern selalu menekankan kerja keras,
        disiplin, dan pengembangan pemain muda.
      </p>

      <p>
        Perjalanan Bayern tidak selalu mulus—ada masa-masa sulit, kekalahan,
        dan tantangan finansial. Namun setiap tantangan dijadikan pelajaran untuk
        menjadi lebih kuat. Inilah yang membentuk mental juara yang melekat pada
        setiap generasi pemain.
      </p>
    </section>

    <section class="section">
      <h2>Identitas Klub</h2>

      <p>
        Bayern München dikenal dengan slogan <strong>“Mia San Mia”</strong>,
        yang berarti “Kami adalah diri kami sendiri.” Slogan ini mencerminkan
        rasa percaya diri, rasa memiliki, dan tekad untuk selalu tampil maksimal.
        Klub ini menekankan kontinuitas, baik dalam strategi, kepelatihan, maupun
        pembinaan pemain muda.
      </p>

      <p>
        Warna merah dan putih, lambang bintang juara, serta Allianz Arena yang
        megah menjadi simbol identitas klub. Setiap elemen mencerminkan tradisi
        yang kuat dan kebanggaan Bavaria.
      </p>
    </section>

    <section class="section red">
      <h2>Prestasi & Momen Ikonik</h2>

      <p>
        Bayern München telah memenangkan puluhan gelar Bundesliga, beberapa DFB
        Pokal, serta Liga Champions UEFA yang prestisius. Klub ini juga pernah
        meraih treble—menjuarai liga, piala domestik, dan Liga Champions dalam
        satu musim—yang menegaskan dominasi mereka di Eropa.
      </p>

      <p>
        Salah satu momen paling ikonik di era modern adalah kemenangan Bayern
        atas Barcelona dengan skor spektakuler <strong>8-2</strong> di perempat
        final Liga Champions 2020. Pertandingan ini menunjukkan kekuatan ofensif
        Bayern yang luar biasa dan disiplin taktikal yang sulit ditandingi.
      </p>

      <p>
        Selain prestasi di lapangan, Bayern memiliki pengaruh besar pada
        budaya sepak bola Jerman. Suporter loyal, strategi pengembangan pemain,
        dan stabilitas finansial menjadikan Bayern contoh bagi klub lain di seluruh
        dunia.
      </p>
    </section>

    <section class="section">
      <h2>Legenda & Pemain</h2>

      <p>
        Klub ini melahirkan legenda-legenda yang membentuk sejarah Bayern, antara
        lain: <strong>Gerd Müller</strong>, <strong>Karl-Heinz Rummenigge</strong>,
        dan <strong>Uli Hoeneß</strong>.
      </p>

      <p>
        Semua pemain ini bukan hanya sekadar atlet hebat, tapi juga simbol mental
        juara dan nilai-nilai klub. Mereka membentuk karakter tim dan menjaga
        tradisi kemenangan Bayern.
      </p>

      <div class="legend-gallery">
        <div class="legend">
          <img src="https://static.dw.com/image/58871030_605.jpg" alt="Gerd Müller">
          <p>Gerd Müller</p>
        </div>
        <div class="legend">
          <img src="https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-16x9-seo/v1604106292/cms/public/images/fcbayern-com/homepage/saison-20-21/grafiken/sonstige/200925_geburtstag_khr_16-9.jpg" alt="Karl-Heinz Rummenigge">
          <p>Karl-Heinz Rummenigge</p>
        </div>
        <div class="legend">
          <img src="https://tmssl.akamaized.net//images/foto/galerie/uli-hoeness-fc-bayern-munchen-1974-1679065881-103826.jpg?lm=1679065899" alt="Uli Hoeneß">
          <p>Uli Hoeneß</p>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
.about {
  font-family: Arial, sans-serif;
}

.hero {
  background: linear-gradient(135deg, #c8102e, #9b0f24);
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.hero h1 {
  margin-bottom: 10px;
  font-size: 3rem;
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

.section.red {
  background: #c8102e;
  color: white;
}

.section.red h2 {
  color: white;
}

.section.red p {
  color: white;
}

.legend-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.legend-gallery .legend {
  text-align: center;
}

.legend-gallery img {
  width: 100%;
  border-radius: 10px;
}
</style>
