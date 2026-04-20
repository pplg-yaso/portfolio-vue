<script setup>
import RevealBlock from '../components/RevealBlock.vue'
import { contactLinks } from '../data/Data'
</script>

<template>
  <section class="space-y-6">
    <!-- Contact hero section -->
    <RevealBlock as="div" :delay="40" class="surface rounded-[2rem] p-7 sm:p-10">
      <p class="text-sm uppercase tracking-[0.28em] text-amber-300">Contact</p>
      <div class="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl">Let’s connect for opportunities, collaboration, or interviews.</h1>
          <p class="mt-4 text-base leading-8 text-stone-300">
            Bagian ini dibuat sederhana agar recruiter atau client bisa langsung menemukan cara menghubungi saya tanpa distraksi.
          </p>
        </div>
      
      </div>
    </RevealBlock>

    <!-- Contact list section -->
    <div class="grid gap-6 md:grid-cols-3">
      <RevealBlock
        v-for="(item, index) in contactLinks"
        :key="item.label"
        as="a"
        :href="item.href"
        target="_blank"
        rel="noreferrer"
        :delay="90 + (index * 70)"
        class="surface block rounded-[2rem] p-6 no-underline"
      >
        <p class="text-sm uppercase tracking-[0.22em] text-stone-400">{{ item.label }}</p>
        <h2 class="mt-3 break-all text-xl font-semibold text-white">{{ item.value }}</h2>
        <p class="mt-4 text-sm leading-7 text-stone-300">Klik untuk membuka channel kontak ini.</p>
      </RevealBlock>
    </div>

    <!-- Closing section -->
    <RevealBlock as="div" :delay="240" class="surface rounded-[2rem] p-7 sm:p-8">
      <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Closing note</p>
      <p class="mt-4 max-w-3xl text-base leading-8 text-stone-300">
        Thanks for visiting my portfolio. I hope my work gives you a glimpse of my passion for frontend development and UI/UX design.
      </p>
    </RevealBlock>
  </section>
</template>
