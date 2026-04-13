<script setup> 
window.scrollTo(0, 0)
</script>

<template> 
    <div class="about-page">
        <!-- INTRO -->
        <section class="about-intro">
            <div class="container">
                <h1 class="section-title">About Me</h1>
                <p class="intro-text">
                    I am a back-end focused student who enjoys building reliable systems, understanding application logic, and learning how modern web technologies work together behind the scenes.
                </p>
            </div>
        </section>

        <!-- FOCUS AREAS -->
        <section class="focus-areas">
            <div class="container">
                <h2 class="section-heading">What I Focus On</h2>

                <div class="focus-grid">
                    <div class="focus-item">
                        <h3 class="focus-title">Back-end development</h3>
                        <p class="focus-description">
                            Learning to build server-side logic, APIs, and data handling using modern tools and structured approaches.
                        </p>
                    </div>

                    <div class="focus-item">
                        <h3 class="focus-title">System Logic</h3>
                        <p class="focus-description">
                        Understanding how applications work internally including request flow, validation, and clean code structure.
                        </p>
                    </div>

                    <div class="focus-item">
                        <h3 class="focus-title">Database & Data Flow</h3>
                        <p class="focus-description">
                            Working with databases and learning how data is stored, retrieved,and processed efficiently.
                        </p>
                    </div>

                    <div class="focus-item">
                        <h3 class="focus-title">Problem Solving</h3>
                        <p class="focus-description">
                            Analyzing errors, debugging logic issues, and finding clear,practical solutions step by step.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <!-- SKILLS -->
        <section class="skills-section">
            <div class="container">
                <h2 class="section-heading">Skills & Tools</h2>

                <div class="skills-grid">
                    <div class="skill-group">
                        <h4 class="skill-group-tittle">Back-end</h4>
                        <ul class="skill-list">
                            <li>Node.js</li>
                            <li>MySQL</li>
                            <li>REST API Concepts</li>
                        </ul>
                    </div>

                    <div class="skill-group">
                        <h4 class="skill-group-tittle">Front-end</h4>
                        <ul class="skill-list">
                            <li>Vue.js</li>
                            <li>HTML & CSS</li>
                            <li>JavaScript (ES6)</li>
                        </ul>
                    </div>

                    <div class="skill-group">
                        <h4 class="skill-group-tittle">Tools</h4>
                        <ul class="skill-list">
                            <li>Github</li>
                            <li>Vs Code</li>
                            <li>AI</li>
                            <li>Postman</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <!-- WORK STYLE -->
        <section class="approuch-section">
            <div class="container">
                <h2 class="section-heading">How I Learn & Work</h2>

                <div class="approuch-grid">
                    
                    <div class="approuch-item">
                        <div class="approuch-number">01</div>
                        <h3 class="approuch-title">Structured Learning</h3>
                        <p class="approuch-desription">
                            Learning step by step by understanding concepts first, then applying them into real projects.
                        </p>
                    </div>

                    <div class="approuch-item">
                        <div class="approuch-number">02</div>
                        <h3 class="approuch-title">Clean Logic</h3>
                        <p class="approuch-desription">
                            Focusing on readable logic and simple solutions rather than complex or rushed implementations.
                        </p>
                    </div>

                    <div class="approuch-item">
                        <div class="approuch-number">03</div>
                        <h3 class="approuch-title">Continuous Improvement</h3>
                        <p class="approuch-desription">
                            Always reviewing mistakes, fixing errors, and improving code quality with every project.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.about-page {
    background-color: #1f1833;
    color: #ffffff;
    min-height: 100vh;
}

.container{
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
}

section {
    padding: 96px 0;
}

.about-intro{
    padding-top: 140px;
}

.section-title{
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #ffffff;
}

.intro-text {
    max-width: 760px;
    font-size: 1.05rem;
    line-height: 1.8;
    color: #cfcfcf;
}

.section-heading {
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 48px;
    position: relative;
    color: #ffffff;
}

.section-heading::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 48px;
    height: 3px;
    background-color: #ff4d4d;
}

.focus-areas {
    background-color: #231b3d;
}

.focus-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
}

.focus-item {
    padding: 32px;
    background-color: #1f1833;
    border-left: 3px solid #ff4d4d;
}

.focus-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #ffffff;
}

.focus-description {
    color: #cfcfcf;
    line-height: 1.7;
}

.skills-section {
    background-color: #1f1833;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.skill-group {
    background-color: #231b3d;
    padding: 32px;
    border-radius: 5px;
}

.skill-group-tittle {
    color: #ff4d4d;
    font-weight: 600;
    margin-bottom: 16px;
}

.skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.skill-list li {
    padding: 8px 0;
    color: #cfcfcf;
    border-bottom: 1px solid #2f2750;
}

.skill-list li:last-child {
    border-bottom: none;
}

.approuch-section {
    background-color: #231b3d;
}

.approuch-item{
    text-align: center;
    padding: 24px;
}

.approuch-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.approuch-number {
    font-size: 2.2rem;
    font-weight: 700;
    color: #ff4d4d;
    margin-bottom: 16px;
}

.approuch-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #ffffff;
}

.approuch-desription{
    color: #cfcfcf;
    line-height: 1.7;
}

</style>