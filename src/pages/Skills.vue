<script setup>
import RevealBlock from '../components/RevealBlock.vue'
import { skillGroups } from '../data/Data'
</script>

<template>
  <section class="space-y-6">
    <!-- Skills hero section -->
    <RevealBlock as="div" :delay="40" class="surface rounded-[2rem] p-7 sm:p-10">
      <p class="text-sm uppercase tracking-[0.28em] text-amber-300">Skills</p>
      <div class="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl">Design & Development</h1>
          <p class="mt-4 text-base leading-8 text-stone-300">
            I enjoy turning ideas into interactive and visually pleasing web experiences using modern frontend tools and thoughtful design.
          </p>
        </div>
        <div class="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Positioning</p>
          <p class="mt-4 text-sm leading-7 text-stone-300">
           Designing Experiences, Building Interfaces
          Frontend Developer & UI/UX Enthusiast
          </p>
        </div>
      </div>
    </RevealBlock>

    <!-- Skill group section -->
    <div class="grid gap-6 lg:grid-cols-3">
      <RevealBlock
        v-for="(group, index) in skillGroups"
        :key="group.title"
        as="article"
        :delay="90 + (index * 70)"
        class="surface rounded-[2rem] p-6"
      >
        <p class="text-sm uppercase tracking-[0.22em] text-stone-400">{{ group.title }}</p>
        <p class="mt-3 text-sm leading-7 text-stone-300">{{ group.description }}</p>
        <div class="mt-5 flex flex-wrap gap-3">
          <span v-for="item in group.items" :key="item" class="chip">
            {{ item }}
          </span>
        </div>
      </RevealBlock>
    </div>

    <!-- Skill summary section -->
    <RevealBlock as="div" :delay="240" class="surface rounded-[2rem] p-7 sm:p-8">
      <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Summary</p>
      <h2 class="mt-3 text-3xl font-semibold text-white">Skill set yang cukup kuat untuk membangun dan mempresentasikan web modern.</h2>
      <p class="mt-4 max-w-3xl text-base leading-8 text-stone-300">
        Fokus saya bukan hanya mengerjakan tampilan, tetapi juga memastikan struktur, konsistensi, dan pengalaman pengguna tetap terjaga.
        Ini membuat portfolio lebih relevan untuk peran yang menuntut kombinasi antara ketelitian visual dan implementasi frontend.
      </p>
    </RevealBlock>
  </section>
</template>
