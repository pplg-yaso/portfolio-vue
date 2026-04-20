<template>
  <section class="about">
    <div class="container">
      <h1>About Me</h1>
      <p class="intro">
        Halo! Saya seorang Frontend Developer yang fokus pada pembuatan
        tampilan web yang modern, responsif, dan user-friendly.
      </p>

      <div class="content">
        <div class="text">
          <h2>Siapa Saya?</h2>
          <p>
            Saya memiliki minat besar di dunia web development, khususnya
            menggunakan Vue.js. Saya suka membangun UI yang menarik dan
            interaktif.
          </p>

          <h2>Skill</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Vue.js</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div class="image">
          <img src="https://via.placeholder.com/300" alt="profile" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.about {
  padding: 60px 20px;
  background: #f9f9f9;
}

.container {
  max-width: 1000px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
  color: #555;
}

.content {
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
}

.text {
  flex: 1;
}

.text h2 {
  margin-top: 20px;
}

.text ul {
  margin-top: 10px;
  padding-left: 20px;
}

.image {
  flex: 1;
  text-align: center;
}

.image img {
  max-width: 250px;
  border-radius: 10px;
}
</style>