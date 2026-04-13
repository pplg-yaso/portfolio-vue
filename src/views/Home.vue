<template>
<section class="hero">
<h2>Selamat Datang di Sweetie Dessert</h2>
<p>Sweetie Dessert menyajikan berbagai pilihan dessert modern seperti Stawberry milk cream, Chesecake, dan Dessert lain yang Premium dengan rasa lembut dan manis yang pas. Setiap produk dibuat dari bahan berkualitas tinggi dan diproses secara higienis untuk menjaga cita rasa dan kesegarannya.
Kami melayani pre-order harian, custom dessert untuk ulang tahun dan acara spesial, serta pemesanan dalam jumlah besar untuk event. Sweetie Dessert siap membuat setiap momen Anda terasa lebih manis dan berkesan.</p>
</section>
</template>

<style scoped>
.hero {
 min-height:100vh;
  position: relative;
  padding: 120px 20px;
  text-align: center;
  color: white;

  background-image: url('https://i.pinimg.com/1200x/a2/80/bd/a280bd4a3bf583ff9302c8bf21bb6375.jpg');
  background-size: cover;
  background-position: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* efek gelap */
}

.hero h2,
.hero p {
  position: relative;
  z-index: 1;
}
</style>
