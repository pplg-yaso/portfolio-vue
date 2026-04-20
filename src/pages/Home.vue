<script setup>
import { RouterLink } from 'vue-router'
import RevealBlock from '../components/RevealBlock.vue'
import { achievements, certificates } from '../data/Data'
</script>

<template>
  <section class="space-y-10">
    <!-- Hero section -->
    <div class="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
      <RevealBlock as="div" :delay="40" class="surface rounded-[2rem] p-7 sm:p-10">
        <p class="mb-6 text-sm uppercase tracking-[0.28em] text-amber-300">Student portfolio</p>
        <div class="max-w-3xl space-y-6">
          <p class="text-lg font-medium text-stone-300 sm:text-xl">Hi, I&apos;m Fatan Nur Rizqi</p>
          <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            A student portfolio that highlights my skills, projects, and creative journey.
          </h1>
          <p class="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            Saya adalah Fatan Nur Rizqi, seorang siswa yang tertarik pada frontend development, UI/UX design,
            dan creative editing. Portfolio ini saya buat untuk menampilkan proses belajar, hasil karya, dan perkembangan skill saya dengan cara yang rapi dan jelas.
          </p>
        </div>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <RouterLink to="/project" class="btn-primary">
            Explore Projects
          </RouterLink>
          <RouterLink to="/contact" class="btn-secondary">
            Contact Me
          </RouterLink>
        </div>

        <div class="mt-12 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          <div v-for="item in achievements" :key="item.value">
            <p class="text-3xl font-semibold text-white">{{ item.value }}</p>
            <p class="mt-2 text-sm text-stone-400">{{ item.label }}</p>
          </div>
        </div>
      </RevealBlock>

      <div class="grid gap-6">
        <RevealBlock as="article" :delay="140" class="surface rounded-[2rem] p-6">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Student focus</p>
          <h2 class="mt-4 text-2xl font-semibold text-white">Portfolio yang menunjukkan semangat belajar dan hasil karya.</h2>
          <p class="mt-4 text-sm leading-7 text-stone-300">
            As a vocational high school student in Software Engineering, I focus on developing frontend skills and UI/UX design while continuously improving through real projects.
          </p>
        </RevealBlock>

        <RevealBlock as="article" :delay="220" class="rounded-[2rem] border border-amber-300/30 bg-amber-300 p-6 text-stone-950">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-700">Learning journey</p>
          <h2 class="mt-4 text-2xl font-semibold">Still learning, still growing, and ready for new opportunities.</h2>
          <p class="mt-4 text-sm leading-7 text-stone-800">
            Portfolio ini menampilkan perjalanan saya sebagai siswa yang aktif belajar dan mengembangkan kemampuan di bidang teknologi dan desain.
          </p>
        </RevealBlock>
      </div>
    </div>

    <!-- Approach section -->
    <div class="grid gap-6 lg:grid-cols-3">
      <RevealBlock as="article" :delay="40" class="surface rounded-[2rem] p-6">
        <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Approach 01</p>
        <h3 class="mt-3 text-xl font-semibold text-white">Structure first</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">
          Hirarki konten dibuat jelas lebih dulu agar orang bisa memahami profilmu tanpa perlu mencari-cari informasi penting.
        </p>
      </RevealBlock>

      <RevealBlock as="article" :delay="140" class="surface rounded-[2rem] p-6">
        <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Approach 02</p>
        <h3 class="mt-3 text-xl font-semibold text-white">Growing with intention</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">
          Visual dibuat minimalis supaya perjalanan belajar, karya, dan potensi saya bisa terlihat lebih jelas dan terarah.
        </p>
      </RevealBlock>

      <RevealBlock as="article" :delay="240" class="surface rounded-[2rem] p-6">
        <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Approach 03</p>
        <h3 class="mt-3 text-xl font-semibold text-white">Responsive clarity</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">
          Tampilan mobile dan desktop sama-sama diprioritaskan supaya portfolio tetap nyaman dibuka recruiter dari device apa pun.
        </p>
      </RevealBlock>
    </div>

    <!-- Quick navigation section -->
    <RevealBlock as="div" :delay="120" class="surface rounded-[2rem] p-7 sm:p-8">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Explore sections</p>
          <h2 class="mt-3 text-3xl font-semibold text-white">Navigate through my portfolio</h2>
        </div>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/about" class="btn-secondary">About</RouterLink>
          <RouterLink to="/skills" class="btn-secondary">Skills</RouterLink>
          <RouterLink to="/project" class="btn-secondary">Projects</RouterLink>
          <RouterLink to="/contact" class="btn-secondary">Contact</RouterLink>
        </div>
      </div>
    </RevealBlock>

    <!-- Achievement section -->
    <div class="grid gap-6 lg:grid-cols-3">
      <RevealBlock
        v-for="(item, index) in certificates"
        :key="item.title"
        as="article"
        :delay="90 + (index * 70)"
        class="surface rounded-[2rem] p-6"
      >
        <p class="text-sm uppercase tracking-[0.22em] text-amber-300">{{ item.type }}</p>
        <h3 class="mt-3 text-xl font-semibold text-white">{{ item.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">
          {{ item.description }}
        </p>
      </RevealBlock>
    </div>
  </section>
</template>
