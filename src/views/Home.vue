<script setup>
const goToPage = () => {
  window.location.href = "https://playvalorant.com/id-id/"
}
</script>

<template>
  <section class="home">
    <div class="hero-container">

      <div class="hero-text">
        <h1>Welcome to Elvora</h1>
        <p>
          We build modern, clean, and powerful digital solutions 
          for the future generation.
        </p>
        <button @click="goToPage">Get Started</button>
      </div>

      <div class="hero-image">
  <img 
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    alt="workspace1"
  />
  <img 
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    alt="workspace2"
  />
</div>


    </div>
  </section>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px;

  background: linear-gradient(270deg, #000000, #1a1a1a, #333333, #111111);
  background-size: 800% 800%;
  animation: gradientMove 12s ease infinite;
  color: white;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;
  flex-direction: column; 
  text-align: center;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 56px;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 18px;
  color: #cccccc;
  margin-bottom: 30px;
  max-width: 500px;
}

.hero-text button {
  padding: 14px 35px;
  border: none;
  background: linear-gradient(135deg, #4F46E5, #6366F1);
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.hero-text button:hover {
  transform: translateY(-3px);
}

.hero-image {
  display: flex;
  justify-content: center;
  gap: 30px; 
  width: 100%;
  margin-top: 20px;
}

.hero-image img {
  width: 45%; /* lebih kecil */
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  transition: 0.3s ease;
  animation: floatImage 4s ease-in-out infinite;
}

.hero-image img:hover {
  transform: scale(1.01);
}

</style>
