<script setup>
import { RouterLink } from 'vue-router'
import RevealBlock from '../components/RevealBlock.vue'
import { projects } from '../data/Data'
</script>

<template>
  <section class="space-y-6">
    <!-- Project hero section -->
    <RevealBlock as="div" :delay="40" class="surface rounded-[2rem] p-7 sm:p-10">
      <p class="text-sm uppercase tracking-[0.28em] text-amber-300">Projects</p>
      <div class="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl">Selected work that supports a stronger professional profile.</h1>
          <p class="mt-4 text-base leading-8 text-stone-300">
            Kumpulan project ini menonjolkan kemampuan menyusun tampilan bersih, struktur konten yang jelas, dan eksekusi frontend yang rapi.
          </p>
        </div>
        
      </div>
    </RevealBlock>

    <!-- Project list section -->
    <div class="grid gap-6">
      <RevealBlock
        v-for="project in projects"
        :key="project.title"
        as="article"
        :delay="80"
        class="surface group rounded-[2rem] p-6 sm:p-8"
      >
        <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div class="project-preview rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 overflow-hidden">
            <div class="flex h-full min-h-52 flex-col justify-between">
              <div class="flex items-center justify-between text-sm text-stone-400">
                <span>{{ project.category }}</span>
                <span>{{ project.year }}</span>
              </div>
              <div v-if="project.image">
                <img :src="project.image" :alt="project.title" class="mt-4 w-full rounded-lg object-cover" />
              </div>
              <div v-else>
                <p class="text-sm uppercase tracking-[0.24em] text-amber-300">Case study</p>
                <h2 class="mt-3 text-3xl font-semibold text-white">
                  {{ project.subTitle || project.title }}
                </h2>
              </div>
            </div>
          </div>

          <div class="flex h-full flex-col justify-between">
            <div>
              <p class="text-base leading-8 text-stone-300">{{ project.description }}</p>
              <div class="mt-4 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-200">
                Role: {{ project.role }}
              </div>
              <p class="mt-4 text-sm leading-7 text-stone-400">{{ project.impact }}</p>
              <div class="mt-6 flex flex-wrap gap-3">
                <span v-for="item in project.tech" :key="item" class="chip">
                  {{ item }}
                </span>
              </div>
            </div>

            <div class="mt-8 border-t border-white/10 pt-5">
              <div class="flex flex-wrap gap-3">
                <component
                  v-for="link in project.links"
                  :key="`${project.title}-${link.label}`"
                  :is="link.href.startsWith('/') ? RouterLink : 'a'"
                  :to="link.href.startsWith('/') ? link.href : undefined"
                  :href="link.href.startsWith('/') ? undefined : link.href"
                  :target="link.href.startsWith('/') ? undefined : '_blank'"
                  :rel="link.href.startsWith('/') ? undefined : 'noreferrer'"
                  class="project-link"
                >
                  {{ link.label }}
                </component>
              </div>
              <div class="mt-5 flex items-center justify-between text-sm text-stone-400">
                <span>Relevant for student and creative portfolio</span>
                <span class="transition group-hover:text-white">Selected work</span>
              </div>
            </div>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
