<script setup>
import RevealBlock from '../components/RevealBlock.vue'
import Typewriter from '../components/Typewriter.vue'
import { certificates, strengths, timeline } from '../data/Data'

const aboutTypewriterTexts = [
  'Halo, aku Fatan.',
  'Frontend Developer berbasis Vue.',
  'Fokus ke UI/UX dan desain modern.',
  'Suka membangun interface yang clean dan interaktif.',
]
</script>

<template>
  <section class="space-y-6">
    <!-- Profile intro section -->
    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <RevealBlock as="aside" :delay="40" class="surface rounded-[2rem] p-7 sm:p-8">
        <p class="text-sm uppercase tracking-[0.28em] text-amber-300">About</p>
        <h1 class="mt-5 text-4xl font-semibold leading-tight text-white">
          Frontend profile with a clean, focused, and professional presentation.
        </h1>
        <div class="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5">
          <p class="text-xs uppercase tracking-[0.22em] text-stone-500">Typewriter intro</p>
          <Typewriter
            :texts="aboutTypewriterTexts"
            :typing-speed="78"
            :deleting-speed="42"
            :pause-delay="1350"
            class="mt-3"
            text-class="text-lg font-medium leading-8 text-stone-100 sm:text-xl"
            cursor-class="text-amber-300"
          />
        </div>
        <p class="mt-5 text-base leading-8 text-stone-300">
          Halaman ini dirancang untuk menjelaskan siapa saya, bagaimana saya bekerja, dan kenapa project saya relevan untuk kebutuhan tim atau perusahaan.
        </p>

        <div class="mt-10 space-y-4 border-t border-white/10 pt-6 text-sm text-stone-300">
          <div class="flex items-center justify-between gap-4">
            <span class="text-stone-400">Based in</span>
            <span>Bandung, Indonesia</span>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span class="text-stone-400">Speciality</span>
            <span>Frontend and UI Portfolio</span>
          </div>
          <div class="flex items-center justify-between gap-4">
            <span class="text-stone-400">Style</span>
            <span>Minimal, editorial, refined</span>
          </div>
        </div>
      </RevealBlock>

      <div class="grid gap-6">
        <!-- Story section -->
        <RevealBlock as="article" :delay="130" class="surface rounded-[2rem] p-7 sm:p-8">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Short story</p>
          <p class="mt-4 text-base leading-8 text-stone-300">
            Saya berfokus pada frontend development dan presentasi visual yang rapi. Targetnya bukan hanya membuat halaman terlihat bagus,
            tetapi juga memudahkan orang memahami informasi penting dengan cepat. Pendekatan ini cocok untuk portfolio kerja karena memperlihatkan
            cara berpikir, perhatian pada detail, dan kemampuan menyusun pengalaman pengguna yang jelas.
          </p>
         
        </RevealBlock>

        <!-- Strengths section -->
        <div class="grid gap-6 sm:grid-cols-3">
          <RevealBlock
            v-for="(strength, index) in strengths"
            :key="strength"
            as="article"
            :delay="180 + (index * 50)"
            class="surface rounded-[2rem] p-6"
          >
            <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Strength 0{{ index + 1 }}</p>
            <p class="mt-3 text-sm leading-7 text-stone-300">
              {{ strength }}
            </p>
          </RevealBlock>
        </div>

        <!-- Capabilities section -->
        <RevealBlock as="article" :delay="280" class="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Capabilities</p>
          <div class="mt-5 flex flex-wrap gap-3">
            <span class="chip">UI Layout</span>
            <span class="chip">Responsive Design</span>
            <span class="chip">Vue Development</span>
            <span class="chip">Tailwind Styling</span>
            <span class="chip">Portfolio Site</span>
            <span class="chip">Landing Page</span>
          </div>
        </RevealBlock>
      </div>
    </div>

    <!-- Achievement timeline section -->
    <div class="grid gap-6 lg:grid-cols-3">
      <RevealBlock
        v-for="(item, index) in timeline"
        :key="item.year"
        as="article"
        :delay="100 + (index * 80)"
        class="surface rounded-[2rem] p-6"
      >
        <p class="text-sm uppercase tracking-[0.22em] text-amber-300">{{ item.year }}</p>
        <h2 class="mt-3 text-xl font-semibold text-white">{{ item.title }}</h2>
        <p class="mt-3 text-sm leading-7 text-stone-300">
          {{ item.description }}
        </p>
      </RevealBlock>
    </div>

    <!-- Recognition section -->
    <RevealBlock as="div" :delay="220" class="surface rounded-[2rem] p-7 sm:p-8">
      <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Recognition</p>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <div
          v-for="item in certificates"
          :key="`recognition-${item.title}`"
          class="rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
        >
          <p class="text-xs uppercase tracking-[0.2em] text-amber-300">{{ item.type }}</p>
          <h3 class="mt-3 text-lg font-semibold text-white">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-stone-300">{{ item.description }}</p>
        </div>
      </div>
    </RevealBlock>
  </section>
</template>
