<script setup>
// No script logic needed for static about page
</script>

<template>
  <section class="about-hero">
    <div class="about-hero-content">
      <h1>ABOUT HYBE</h1>
      <p>We believe in music</p>
    </div>
  </section>
  <section class="about-info">
    <div class="about-info-inner">
      <h2>Company Information</h2>
      <p class="about-desc">
        HYBE innovates the music industry with a focus on artist development, content creation, and fan engagement. Our mission is to inspire and connect people worldwide through music and entertainment.
      </p>
      <ul class="about-list">
        <li><strong>Company Name:</strong> HYBE Co., Ltd.</li>
        <li><strong>CEO:</strong> Bang Si-Hyuk</li>
        <li><strong>Founded:</strong> 2005</li>
        <li><strong>Business Areas:</strong> Entertainment, Music Production, Artist Management, IP Business</li>
        <li><strong>Location:</strong> Seoul, South Korea</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about-hero {
  background: url('https://cdn0-production-images-kly.akamaized.net/ZxuHbdlNHaeb_Sh96S900_sjA5A=/2560x1440/smart/filters:quality(75):strip_icc()/kly-media-production/medias/3409184/original/020922100_1616498247-1.jpg') center/cover no-repeat;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
}
.about-hero::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
}
.about-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.about-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}
.about-hero p {
  font-size: 1.2rem;
  font-weight: 300;
}
.about-info {
  background: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}
.about-info-inner {
  max-width: 700px;
  width: 100%;
  text-align: left;
}
.about-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
}
.about-desc {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #444;
}
.about-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.about-list li {
  margin-bottom: 0.7rem;
  font-size: 1rem;
}
.about-list strong {
  color: #222;
}
</style>