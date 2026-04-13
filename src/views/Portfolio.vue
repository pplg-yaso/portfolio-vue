<script setup> 
    import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Projects data
const projects = ref([
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with HTML, CSS, JavaScript that showcases projects and skills.',
    image: 'https://via.placeholder.com/600x400/211a2e/c1394a?text=Portfolio+Website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'websiteportofolio-two.vercel.app',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Simple task tracker with CRUD operations and local storage.',
    image: 'https://via.placeholder.com/600x400/211a2e/c1394a?text=Task+Manager',
    technologies: ['Vue.js', 'Vuex', 'LocalStorage'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather app using API integration and responsive design.',
    image: 'https://via.placeholder.com/600x400/211a2e/c1394a?text=Weather+App',
    technologies: ['Vue.js', 'API', 'CSS Grid'],
    liveUrl: '#',
    githubUrl: null
  },
  {
    id: 4,
    title: 'E-Commerce UI',
    description: 'Frontend implementation of an e-commerce product catalog.',
    image: 'https://via.placeholder.com/600x400/211a2e/c1394a?text=E-Commerce+UI',
    technologies: ['React', 'Tailwind', 'JavaScript'],
    liveUrl: null,
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Blog Template',
    description: 'Responsive blog layout with dynamic routing and content management.',
    image: 'https://via.placeholder.com/600x400/211a2e/c1394a?text=Blog+Template',
    technologies: ['Vue.js', 'Vue Router', 'Markdown'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Calculator App',
    description: 'Interactive calculator with clean UI and mathematical operations.',
    image: 'https://via.placeholder.com/600x400/211a2e/c1394a?text=Calculator',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#'
  }
]);

// Methods
const viewProject = (id) => {
  // Navigate to project detail page
  router.push(`/portfolio/${id}`);
  // Or implement modal/detail view here
};

const openLink = (url) => {
  if (url && url !== '#') {
    window.open(url, '_blank');
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});

</script>

<template> 
    <div class="portfolio-page">
    <!-- Portfolio Header -->
    <section class="portfolio-header">
      <div class="container">
        <h1 class="page-title">Portfolio</h1>
        <p class="page-description">
          A collection of projects showcasing my learning journey and technical skills. 
          Each project represents a step forward in understanding web development.
        </p>
      </div>
    </section>

    <!-- Project Grid -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <!-- Project Card -->
          <div 
            v-for="project in projects" 
            :key="project.id" 
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <button 
                  class="view-button"
                  @click="viewProject(project.id)"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="project-actions">
                <button 
                  v-if="project.liveUrl" 
                  class="action-link"
                  @click="openLink(project.liveUrl)"
                >
                  Live Demo
                </button>
                <button 
                  v-if="project.githubUrl" 
                  class="action-link secondary"
                  @click="openLink(project.githubUrl)"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Empty State (if no projects) -->
    <section v-if="projects.length === 0" class="empty-state">
      <div class="container">
        <p class="empty-message">More projects coming soon...</p>
      </div>
    </section>
  </div>

</template>

<style scoped>
/* Base Styles */
.portfolio-page {
  background-color: #1a1625;
  color: #f5f5f5;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Portfolio Header */
.portfolio-header {
  padding: 8rem 0 3rem 0;
  text-align: center;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #f5f5f5;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
}

.page-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #b8b8b8;
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Section */
.projects-section {
  padding: 4rem 0 6rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

/* Project Card */
.project-card {
  background-color: #211a2e;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* Project Image */
.project-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: #1a1625;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 22, 37, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-button {
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #c1394a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.view-button:hover {
  background-color: #a02f3d;
  transform: scale(1.05);
}

/* Project Content */
.project-content {
  padding: 1.75rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f5f5;
  margin: 0 0 0.75rem 0;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #b8b8b8;
  margin: 0 0 1.25rem 0;
}

/* Technology Tags */
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #c1394a;
  background-color: rgba(193, 57, 74, 0.1);
  border: 1px solid rgba(193, 57, 74, 0.3);
  border-radius: 3px;
}

/* Project Actions */
.project-actions {
  display: flex;
  gap: 0.75rem;
}

.action-link {
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #c1394a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
}

.action-link:hover {
  background-color: #a02f3d;
  transform: translateY(-2px);
}

.action-link.secondary {
  background-color: transparent;
  border: 2px solid #c1394a;
  color: #c1394a;
}

.action-link.secondary:hover {
  background-color: #c1394a;
  color: #ffffff;
}

/* Empty State */
.empty-state {
  padding: 6rem 0;
  text-align: center;
}

.empty-message {
  font-size: 1.25rem;
  color: #b8b8b8;
}
</style>