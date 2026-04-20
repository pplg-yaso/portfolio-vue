<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { contactLinks } from './data/Data'

const route = useRoute()
const currentYear = new Date().getFullYear()
const isBootLoading = ref(true)

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Project', path: '/project' },
  { name: 'Contact', path: '/contact' },
]

onMounted(() => {
  window.setTimeout(() => {
    isBootLoading.value = false
  }, 1100)
})
</script>

<template>
  <div class="min-h-screen bg-stone-950 text-stone-100">
    <Transition name="boot-loader">
      <div
        v-if="isBootLoading"
        class="boot-loader fixed inset-0 z-50 flex items-center justify-center px-6"
      >
        <div class="boot-loader-panel">
          <div class="flex items-center justify-center gap-3">
            <span class="boot-loader-mark">FA</span>
            <div>
              <p class="text-xs uppercase tracking-[0.34em] text-amber-300">Loading portfolio</p>
              <p class="mt-2 text-sm text-stone-400">Preparing a clean and focused presentation.</p>
            </div>
          </div>

          <div class="boot-loader-bar mt-6 overflow-hidden rounded-full">
            <div class="boot-loader-bar-fill"></div>
          </div>
        </div>
      </div>
    </Transition>

    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="ambient-orb absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_55%)]"></div>
      <div class="ambient-orb ambient-orb-delay absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl"></div>
      <div class="grid-pattern absolute inset-0 opacity-40"></div>
    </div>

    <div
      class="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 pt-6 transition-opacity duration-500 sm:px-6 lg:px-8"
      :class="isBootLoading ? 'pointer-events-none opacity-0' : 'opacity-100'"
    >
      <!-- App header / navigation -->
      <header class="sticky top-4 z-20 mb-8">
        <div class="surface flex items-center justify-between rounded-full px-5 py-3">
          <RouterLink to="/" class="flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-sm font-semibold text-stone-950">
              FA
            </span>
            <div>
              <p class="text-sm font-semibold tracking-[0.24em] text-stone-200 uppercase">Portfolio</p>
              <p class="text-xs text-stone-400">Student portfolio and creative journey</p>
            </div>
          </RouterLink>

          <nav class="hidden items-center gap-2 md:flex">
            <RouterLink
              v-for="item in navigation"
              :key="item.path"
              :to="item.path"
              class="rounded-full px-4 py-2 text-sm text-stone-300 transition hover:bg-white/10 hover:text-white"
              :class="route.path === item.path ? 'bg-white text-stone-950' : 'bg-transparent'"
            >
              {{ item.name }}
            </RouterLink>
          </nav>
        </div>

        <nav class="mt-3 flex gap-2 overflow-x-auto md:hidden">
          <RouterLink
            v-for="item in navigation"
            :key="`${item.path}-mobile`"
            :to="item.path"
            class="surface shrink-0 rounded-full px-4 py-2 text-sm text-stone-300 transition hover:bg-white/10 hover:text-white"
            :class="route.path === item.path ? 'bg-white text-stone-950' : 'bg-transparent'"
          >
            {{ item.name }}
          </RouterLink>
        </nav>
      </header>

      <main class="flex-1">
        <RouterView v-slot="{ Component, route: currentRoute }">
          <Transition name="page-slide" mode="out-in">
            <component :is="Component" :key="currentRoute.fullPath" />
          </Transition>
        </RouterView>
      </main>

      <!-- App footer -->
      <footer class="mt-12">
        <div class="surface rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8">
          <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_1fr]">
            <div class="max-w-md">
              <div class="flex items-center gap-3">
                <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 text-sm font-semibold text-stone-950">
                  FA
                </span>
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.24em] text-stone-200">Fatan Portfolio</p>
                  <p class="text-xs text-stone-500">Frontend, UI/UX, and creative editing</p>
                </div>
              </div>

              <p class="mt-4 text-sm leading-7 text-stone-400">
                Portfolio ini dirancang untuk menampilkan skill, proyek pilihan, dan karya visual dengan presentasi
                yang ringkas, profesional, dan mudah dijelajahi.
              </p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-stone-500">Quick links</p>
              <nav class="mt-4 flex flex-wrap gap-2">
                <RouterLink
                  v-for="item in navigation"
                  :key="`footer-${item.path}`"
                  :to="item.path"
                  class="chip"
                  :class="route.path === item.path ? '!border-amber-300/30 !bg-amber-300/10 !text-white' : ''"
                >
                  {{ item.name }}
                </RouterLink>
              </nav>
            </div>

            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-stone-500">Contact</p>
              <div class="mt-4 space-y-3">
                <a
                  v-for="item in contactLinks"
                  :key="item.label"
                  :href="item.href"
                  class="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-stone-300 transition hover:border-amber-300/20 hover:bg-amber-300/[0.06] hover:text-white"
                  :target="item.href.startsWith('http') ? '_blank' : undefined"
                  :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
                >
                  <span class="text-stone-500">{{ item.label }}</span>
                  <span class="text-right">{{ item.value }}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {{ currentYear }} Fatan Nur Rizqi. Built for applications, networking, and selected freelance work.</p>
            <p class="text-stone-600">Minimal layout, clear structure, and responsive presentation.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
