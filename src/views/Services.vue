<script setup> 
    window.scrollTo(0, 0);
</script>

<template> 
    <div class="services-page">
        <!-- PAGE HEADER -->
        <section class="services-header">
            <div class="container">
                <h1 class="page-title">Services</h1>
                <p class="page-description">
                    What I can help you with. These services reflect my current skill level and focus areas as I continue to grow as a developer.
                </p>
            </div>
        </section>

        <!-- SERVICES GRID -->
        <section class="services-content">
            <div class="container">
                <div class="services-grid">
                    <div class="service-card">
                        <!-- SERVICES CARD 1 -->
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <h2 class="service-title">Web Development</h2>
                        <p class="service-description">
                            Building simple and functional websites with clean code structure. I focus on creating sites that work well, load quickly, and are easy to maintain.
                        </p>
                        <ul class="service-futures">
                            <li>Responsive website design</li>
                            <li>Clean HTML, CSS, and JavaScript</li>
                            <li>Performance optimization</li>
                            <li>Cross-browser compatibility</li>
                        </ul>
                    </div>

                    <!-- SERVICES CARD 2 -->
                    <div class="service-card">
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>

                        <h2 class="service-title">Back-end Development</h2>
                        <p class="service-description">
                            Building server-side logic and application backbones. Focused on handling data, requests, and system logic in a clean and structured way.
                        </p>

                        <ul class="service-futures">
                            <li>Server-side logic & flow</li>
                            <li>REST API fundamentals</li>
                            <li>Request & response handling</li>
                            <li>Clean and maintainable code</li>
                        </ul>
                    </div>


                    <!-- SERVICES CARD 3 -->
                    <div class="service-card">
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                            <path d="M2 2l7.586 7.586"></path>
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                            <circle cx="11" cy="11" r="2"></circle>
                        </svg>
                        </div>
                        <h2 class="service-title">UI Implementation</h2>
                        <p class="service-description">
                            Converting design files from tools like Figma into working websites. Maintaining design consistency and paying attention to layout details.
                        </p>
                        <ul class="service-futures">
                            <li>Figma to HTML/CSS conversion</li>
                            <li>Color and spacing accuracy</li>
                            <li>Design system implementation</li>
                            <li>Typography consistency</li>
                        </ul>
                    </div>

                    <!-- SERVICES CARD 4 -->
                    <div class="service-card">
                        <div class="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                        </div>
                        <h2 class="service-title">Student / Learning Projects</h2>
                        <p class="service-description">
                            Practice projects, school assignments, and exploration of new technologies. These projects help me learn, experiment, and improve my development skills.
                        </p>
                        <ul class="service-futures">
                            <li>Academic project support</li>
                            <li>Technology experimentation</li>
                            <li>Code learning exercises</li>
                            <li>Portfolio development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- ADDITIONAL INFO SECTION -->
        <section class="services-info">
            <div class="container">
                <div class="info-box">
                    <h3 class="info-title">Let's Work Together</h3>
                    <p class="info-text">
                        I'm open to small projects, learning opportunities, and collaborations. If you have a project idea or need help with something within my skill range, feel free to reach out.
                    </p>
                    <RouterLink to="/contact" class="info-button">
                        Get in Touch
                    </RouterLink>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
.services-page {
    background-color: #1f1833;
    color: #f5f5f5;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* PAGE HEADER */
.services-header {
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

/* SERVICES CONTENT */
.services-content {
    padding: 4rem 0;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
}

.service-card {
    background-color: #211a2e;
    padding: 2.5rem;
    border-radius: 4px;
    border-left: 4px solid #c1394a;
    transition: transform 0.25 ease, box-shadow 0.25 ease;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.service-icon {
    width: 60px;
    height: 60px;
    background-color: rgba(193, 57, 74, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    color: #c1394a;
}

.service-title {
    font-size: 1rem;
    font-weight: 600;
    color: #f5f5f5;
    margin: 0 0 1rem 0;
}

.service-description {
    font-size: 1rem;
    line-height: 1.7;
    color: #b8b8b8;
    margin: 0 0 1.5rem 0;
}

.service-features li{
    font-size: 0.95rem;
    color: #9a9a9a;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.service-futures li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #c1394a;
    border-radius: 50%;
}

.services-info {
    padding: 5rem 0;
    background-color: #211a2e;
}

.info-box {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.info-title {
    font-size: 2rem;
    font-weight: 600;
    color: #f5f5f5;
    margin: 0 0 1.5rem 0;
}

.info-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #b8b8b8;
    margin: 0 0 2.5rem 0;
}

.info-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #c1394a;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
}

.info-button:hover {
    background-color: #a02f3d;
    transform: translateY(-2px);
}

.info-button:active {
    transform: translateY(0);
}
</style>