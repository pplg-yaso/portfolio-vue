<script setup> 

</script>

<template> 
    <section class="hero">
        <div class="hero-container">
            <div class="hero-contain">
                <h1 class="hero-tittle">
                    Crafting Digital Experiences Through Code
                </h1>
                <p class="hero-subtittle">
                    Back-end developer in training, focused on building reliable systems and learning modern web technologies. 
                </p>
                <RouterLink to="/portfolio" class="hero-cta">
                    view portfolio
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    background-color: #1f1833;
    padding: 64px 24px;
}

.hero-container {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
}

.hero-contain {
    max-width: 720px;
}

.hero-tittle {
font-size: 3rem;
font-weight: 700;
color: #ffffff;
line-height: 1.25;
margin-bottom: 16px;
letter-spacing: -0.02cm;
}

.hero-subtittle {
    font-size: 1.1rem;
    color: #cfcfcf;
    line-height: 1.7;
    margin-bottom: 32px;
}

.hero-cta {
    display: inline-block;
    padding: 12px 28px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #ff4d4d;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2 ease, transform 0.2s ease;
}

.hero-cta:hover {
    background-color: #e04343;
    transform: translateY(-2px);
}

.hero-cta:active {
    transform: translateY(0);
}


</style>