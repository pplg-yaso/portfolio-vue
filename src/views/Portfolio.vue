<template>
  <div class="portfolio-page">
    <!-- Header -->
    <header class="portfolio-header">
      <h1>Our Portfolio</h1>
      <p>Showcasing our best work in construction and design</p>
    </header>

    <!-- Projects Grid -->
    <main class="portfolio-grid">
      <!-- Project 1 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
               alt="Modern Villa">
        </div>
        <div class="project-info">
          <h3>Modern Villa - Sunset Hills</h3>
          <span class="project-category">Residential</span>
          <p>Contemporary 5-bedroom villa with panoramic views</p>
          <div class="project-details">
            <span>📍 Beverly Hills, CA</span>
            <span>📅 2023</span>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
               alt="Office Space">
        </div>
        <div class="project-info">
          <h3>Urban Office Space</h3>
          <span class="project-category">Commercial</span>
          <p>Modern office design for tech startup</p>
          <div class="project-details">
            <span>📍 San Francisco, CA</span>
            <span>📅 2023</span>
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
               alt="Kitchen Remodel">
        </div>
        <div class="project-info">
          <h3>Kitchen & Living Room Remodel</h3>
          <span class="project-category">Renovation</span>
          <p>Complete renovation with modern open concept</p>
          <div class="project-details">
            <span>📍 Seattle, WA</span>
            <span>📅 2022</span>
          </div>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
               alt="Luxury Apartment">
        </div>
        <div class="project-info">
          <h3>Luxury Apartment Interior</h3>
          <span class="project-category">Interior Design</span>
          <p>High-end interior design for penthouse</p>
          <div class="project-details">
            <span>📍 New York, NY</span>
            <span>📅 2023</span>
          </div>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
               alt="Family Home">
        </div>
        <div class="project-info">
          <h3>Family Home Extension</h3>
          <span class="project-category">Residential</span>
          <p>Two-story extension with new master suite</p>
          <div class="project-details">
            <span>📍 Austin, TX</span>
            <span>📅 2022</span>
          </div>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="project-card">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
               alt="Restaurant Design">
        </div>
        <div class="project-info">
          <h3>Restaurant Design</h3>
          <span class="project-category">Commercial</span>
          <p>Fine dining restaurant interior and exterior</p>
          <div class="project-details">
            <span>📍 Chicago, IL</span>
            <span>📅 2023</span>
          </div>
        </div>
      </div>
    </main>

    <!-- Stats -->
    <section class="portfolio-stats">
      <div class="stat-item">
        <h4>200+</h4>
        <p>Projects Completed</p>
      </div>
      <div class="stat-item">
        <h4>50+</h4>
        <p>Satisfied Clients</p>
      </div>
      <div class="stat-item">
        <h4>15+</h4>
        <p>Awards Won</p>
      </div>
      <div class="stat-item">
        <h4>25+</h4>
        <p>Cities Covered</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="portfolio-footer">
      <p>Interested in working with us?</p>
      <a href="mailto:projects@alphabeta.com" class="contact-link">Contact for Consultation →</a>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-page {
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
}

/* Header */
.portfolio-header {
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 30px;
  border-bottom: 2px solid #f0f0f0;
}

.portfolio-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 15px;
}

.portfolio-header p {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* Projects Grid */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.project-image {
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-info {
  padding: 25px;
}

.project-info h3 {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.4;
}

.project-category {
  display: inline-block;
  background: #f0f4ff;
  color: #667eea;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
}

.project-info p {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-details {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
}

/* Stats */
.portfolio-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 15px;
  margin-bottom: 80px;
  text-align: center;
}

.stat-item h4 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #ffd166;
}

.stat-item p {
  font-size: 16px;
  opacity: 0.9;
}

/* Footer */
.portfolio-footer {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 15px;
}

.portfolio-footer p {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.contact-link {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s;
}

.contact-link:hover {
  background: #5a6fd8;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}
</style>