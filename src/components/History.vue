<template>
  <section class="history-section">
    <div class="history-hero">
      <p class="eyebrow">Club History</p>
      <h1>The Story of Real Madrid</h1>
      <p class="lead">
        From its foundation in 1902 to its status as one of the greatest football clubs in the world, Real Madrid has written history through passion, ambition, and glory.
      </p>
    </div>

    <div class="timeline">
      <div class="timeline-item">
        <div class="year">1902</div>
        <div class="content">
          <h3>Foundation</h3>
          <p>Real Madrid was founded in Madrid, Spain, beginning its journey as a club with big dreams.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="year">1950s</div>
        <div class="content">
          <h3>The Birth of a Legend</h3>
          <p>During this era, Real Madrid began to dominate European football and build its global identity.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="year">1956</div>
        <div class="content">
          <h3>European Glory</h3>
          <p>The club won its first European Cup, laying the foundation for its future dominance.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="year">1980s–90s</div>
        <div class="content">
          <h3>Golden Generations</h3>
          <p>Real Madrid became known for legendary stars and unforgettable moments that shaped football history.</p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="year">2000s–Now</div>
        <div class="content">
          <h3>Modern Era</h3>
          <p>With new generations of stars and continued success, Real Madrid remains one of the strongest clubs in the world.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-section {
  padding: 70px 24px 90px;
  background: linear-gradient(135deg, #fdfcf8 0%, #f5f0e6 100%);
}

.history-hero {
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: #d4af37;
  font-weight: 700;
  margin-bottom: 10px;
}

.history-hero h1 {
  font-size: clamp(2.1rem, 4vw, 2.8rem);
  color: #14213d;
  margin-bottom: 12px;
}

.lead {
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.8;
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 20px;
  background: #fff;
  padding: 22px;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  align-items: start;
}

.year {
  font-weight: 800;
  color: #d4af37;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.content h3 {
  color: #14213d;
  margin: 0 0 8px;
}

.content p {
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
  }
}
</style>
