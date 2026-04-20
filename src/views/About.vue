<template>
  <section class="about">
    <div class="overlay">
      <div class="container">

        <div class="text">
          <h2>Tentang Kami</h2>
          <p>
            Tetangga Kopi lahir dari keinginan sederhana —
            menghadirkan kopi yang bisa dinikmati setiap hari.
          </p>
          <p>
            Kami percaya kopi bukan hanya tentang rasa,
            tapi tentang ruang untuk berhenti sejenak,
            berbagi cerita, dan merasa dekat.
          </p>
        </div>

        <div class="image">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Coffee" />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085');
  background-size: cover;
  background-position: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5); /* biar teks kebaca */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.container {
  display: flex;
  gap: 60px;
  max-width: 1100px;
  align-items: center;
  color: white;
}

.text {
  flex: 1;
}

.image {
  flex: 1;
}

.image img {
  width: 100%;
  border-radius: 8px;
}

h2 {
  font-size: 36px;
  margin-bottom: 24px;
}

p {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 20px;
}
</style>
<!-- <template>
<h2>Company Profile</h2>
</template> -->
