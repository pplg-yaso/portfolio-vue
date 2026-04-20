<template>
  <section class="portfolio">
    <div class="container">
      <h2>Galeri Kami</h2>

      <div class="gallery">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600" alt="Coffee 1" />
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600" alt="Coffee 2" />
        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600" alt="Coffee 3" />
        <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600" alt="Coffee 4" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
  background-color: #f5f1eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
}

.container {
  max-width: 1000px;
  width: 100%;
}

h2 {
  font-size: 36px;
  margin-bottom: 48px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.gallery img {
  width: 100%;
  border-radius: 8px;
}
</style>
<!-- <template>
<h2>Company Profile</h2>
</template> -->
