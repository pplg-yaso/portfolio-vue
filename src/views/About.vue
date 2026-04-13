<template>
  <div class="simple-about">
    <!-- Main Content -->
    <main class="about-content">
      <!-- Intro -->
      <section class="intro-section">
        <h2>Who We Are</h2>
        <p>
          AlphaBeta is a premier construction and design firm dedicated to creating exceptional living spaces. 
          Our team combines technical expertise with creative vision to deliver homes that are both beautiful and functional.
        </p>
      </section>

      <!-- Mission & Vision -->
      <div class="mission-vision">
        <div class="mission">
          <h3>Our Mission</h3>
          <p>To build high-quality, sustainable homes that exceed client expectations and enhance communities.</p>
        </div>
        <div class="vision">
          <h3>Our Vision</h3>
          <p>To be the most trusted name in residential construction, known for innovation and excellence.</p>
        </div>
      </div>

      <!-- Why Choose Us -->
      <section class="why-section">
        <h2>Why Choose AlphaBeta</h2>
        <div class="reasons">
          <div class="reason">
            <h4>✓ Expert Team</h4>
            <p>15+ years combined experience in construction and design</p>
          </div>
          <div class="reason">
            <h4>✓ Quality Assurance</h4>
            <p>Rigorous quality checks at every project stage</p>
          </div>
          <div class="reason">
            <h4>✓ Transparent Process</h4>
            <p>Clear communication and no hidden costs</p>
          </div>
          <div class="reason">
            <h4>✓ Timely Delivery</h4>
            <p>We respect deadlines and deliver as promised</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.simple-about {
  font-family: 'Segoe UI', system-ui, sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

.about-header {
  text-align: center;
  padding: 80px 0 60px;
  border-bottom: 1px solid #eee;
}

.about-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.about-header p {
  font-size: 20px;
  color: #666;
  font-weight: 300;
}

.about-content {
  padding: 60px 0;
}

.intro-section {
  margin-bottom: 60px;
}

.intro-section h2 {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.intro-section p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 10px;
}

.mission, .vision {
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.mission h3, .vision h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 24px;
}

.mission p, .vision p {
  color: #666;
  line-height: 1.6;
}

/* Why Section */
.why-section {
  margin-bottom: 80px;
}

.why-section h2 {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
}

.reasons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.reason {
  padding: 25px;
  border-left: 4px solid #667eea;
  background: white;
  border-radius: 0 8px 8px 0;
}

.reason h4 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 18px;
}

.reason p {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
}

</style>