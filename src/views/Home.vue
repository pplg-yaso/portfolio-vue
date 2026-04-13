<script setup></script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-left">
          <h1 class="hero-title">Build Your Dream Space</h1>
          <p class="hero-subtitle">Professional construction and interior design services for modern living</p>
          <div class="hero-features">
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>Custom Design</span>
            </div>
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>Quality Materials</span>
            </div>
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>Expert Team</span>
            </div>
          </div>
          <button class="hero-button">Get Started</button>
        </div>
        <div class="hero-right">
          <div class="image-card">
            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt="Modern Architecture" 
                 class="hero-img">
            <div class="image-overlay">
              <div class="overlay-text">
                <h3>Modern Design</h3>
                <p>Contemporary architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  min-height: 85vh;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.hero-left {
  flex: 1;
  max-width: 500px;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-features {
  margin-bottom: 30px;
}

.feature {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
}

.feature-icon {
  background: rgba(255, 255, 255, 0.2);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: bold;
}

.hero-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.hero-right {
  flex: 1;
  max-width: 500px;
}

.image-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.hero-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}

.image-card:hover .hero-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 30px;
  color: white;
}

.overlay-text h3 {
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 700;
}

.overlay-text p {
  font-size: 16px;
  opacity: 0.9;
}
</style>