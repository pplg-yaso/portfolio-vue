<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import RevealBlock from '../components/RevealBlock.vue'
import { albumWorks } from '../data/Data'

const albumScroller = ref(null)
const cardRefs = ref([])
const activeIndex = ref(0)
const isPointerDown = ref(false)

let dragState = null

const activeWork = computed(() => albumWorks[activeIndex.value] ?? albumWorks[0])

const setCardRef = (element, index) => {
  if (element) {
    cardRefs.value[index] = element
  }
}

const updateActiveFromScroll = () => {
  const scroller = albumScroller.value

  if (!scroller) {
    return
  }

  const scrollerCenter = scroller.scrollLeft + (scroller.clientWidth / 2)
  let closestIndex = 0
  let closestDistance = Number.POSITIVE_INFINITY

  cardRefs.value.forEach((card, index) => {
    if (!card) {
      return
    }

    const cardCenter = card.offsetLeft + (card.offsetWidth / 2)
    const distance = Math.abs(cardCenter - scrollerCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  activeIndex.value = closestIndex
}

const scrollToCard = (index) => {
  const nextIndex = Math.max(0, Math.min(index, albumWorks.length - 1))
  const card = cardRefs.value[nextIndex]

  if (!card) {
    return
  }

  card.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })

  activeIndex.value = nextIndex
}

const scrollByDirection = (direction) => {
  scrollToCard(activeIndex.value + direction)
}

const handlePointerDown = (event) => {
  const scroller = albumScroller.value

  if (!scroller || event.pointerType === 'touch') {
    return
  }

  dragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startScrollLeft: scroller.scrollLeft,
  }

  isPointerDown.value = true
  scroller.setPointerCapture(event.pointerId)
}

const handlePointerMove = (event) => {
  const scroller = albumScroller.value

  if (!scroller || !dragState || dragState.pointerId !== event.pointerId) {
    return
  }

  const delta = event.clientX - dragState.startX
  scroller.scrollLeft = dragState.startScrollLeft - delta
}

const clearPointerState = (event) => {
  const scroller = albumScroller.value

  if (dragState && scroller?.hasPointerCapture?.(event.pointerId)) {
    scroller.releasePointerCapture(event.pointerId)
  }

  dragState = null
  isPointerDown.value = false
}

onMounted(async () => {
  await nextTick()
  updateActiveFromScroll()
})
</script>

<template>
  <section class="space-y-8">
    <!-- Album hero section -->
    <RevealBlock as="div" :delay="40" class="album-shell rounded-[2.5rem] p-7 sm:p-10">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
          <p class="text-sm uppercase tracking-[0.28em] text-amber-300">Creative album</p>
          <h1 class="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Poster, photo, and visual editing collected in one playful gallery.
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-stone-300">
            Halaman ini dibuat khusus untuk karya visual. Gayanya lebih eksperimental dari halaman lain,
            dengan gallery yang bisa digeser dan card yang terasa seperti kumpulan karya di meja kreatif.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <RouterLink to="/project" class="btn-secondary">
            Back to Projects
          </RouterLink>
          <a href="mailto:fatannurrizqi@gmail.com?subject=Album%20Portfolio" class="btn-primary">
            Request Full Portfolio
          </a>
        </div>
      </div>
    </RevealBlock>

    <!-- Album scroller section -->
    <RevealBlock as="section" :delay="100" class="space-y-5">
      <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Swipe gallery</p>
          <h2 class="mt-2 text-2xl font-semibold text-white">Geser untuk menjelajahi karya visual.</h2>
          <p class="mt-3 text-sm leading-7 text-stone-400 sm:text-base">
            Setiap kartu dibuat seperti lembar karya di meja kreatif, tapi sekarang interaksinya lebih stabil
            supaya eksplorasinya terasa nyaman di desktop maupun mobile.
          </p>
        </div>

        <div class="album-toolbar">
          <div class="album-status">
            <p class="text-xs uppercase tracking-[0.22em] text-amber-300">Now viewing</p>
            <h3 class="mt-2 text-lg font-semibold text-white">{{ activeWork.title }}</h3>
            <p class="mt-1 text-sm text-stone-400">{{ activeIndex + 1 }} / {{ albumWorks.length }} • {{ activeWork.type }}</p>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" class="album-nav-btn" @click="scrollByDirection(-1)">
              Prev
            </button>
            <button type="button" class="album-nav-btn" @click="scrollByDirection(1)">
              Next
            </button>
          </div>
        </div>
      </div>

      <div
        ref="albumScroller"
        class="album-scroller"
        :class="{ 'is-dragging': isPointerDown }"
        @scroll="updateActiveFromScroll"
        @pointerdown="handlePointerDown"
        @pointermove="handlePointerMove"
        @pointerup="clearPointerState"
        @pointercancel="clearPointerState"
        @pointerleave="clearPointerState"
      >
        <article
          v-for="(work, index) in albumWorks"
          :key="work.title"
          class="album-card"
          :class="[
            `album-${work.size}`,
            `album-rotate-${(index % 4) + 1}`,
            { 'is-active': activeIndex === index },
          ]"
          :ref="(element) => setCardRef(element, index)"
          tabindex="0"
          @focus="scrollToCard(index)"
          @mouseenter="activeIndex = index"
        >
          <div class="album-frame">
            <div class="album-art" :class="`bg-gradient-to-br ${work.palette}`">
              <div class="album-art-overlay"></div>
              <div class="album-art-lines"></div>
              <div class="album-art-glow"></div>
              <div class="album-art-copy">
                <p class="text-xs uppercase tracking-[0.3em] text-white/70">{{ work.type }}</p>
                <h3 class="mt-3 text-2xl font-semibold text-white sm:text-3xl">{{ work.title }}</h3>
              </div>
            </div>

            <div class="album-meta">
              <div class="flex items-center justify-between gap-4">
                <span class="album-pill">{{ work.type }}</span>
                <span class="text-xs uppercase tracking-[0.2em] text-stone-500">2025</span>
              </div>
              <p class="mt-4 text-sm leading-7 text-stone-300">
                {{ work.note }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div class="album-progress" aria-hidden="true">
        <button
          v-for="(work, index) in albumWorks"
          :key="`${work.title}-dot`"
          type="button"
          class="album-progress-dot"
          :class="{ 'is-active': activeIndex === index }"
          @click="scrollToCard(index)"
        ></button>
      </div>
    </RevealBlock>

    <!-- Album spotlight section -->
    <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <RevealBlock as="article" :delay="120" class="surface rounded-[2rem] p-7 sm:p-8">
        <p class="text-sm uppercase tracking-[0.22em] text-stone-400">Creative direction</p>
        <h2 class="mt-3 text-3xl font-semibold text-white">Visual work yang lebih bebas, ekspresif, dan tetap terstruktur.</h2>
        <p class="mt-4 text-base leading-8 text-stone-300">
          Berbeda dari halaman portfolio utama yang cenderung tenang, bagian album ini sengaja dibuat lebih playful
          agar karakter karya poster, foto, dan video editing bisa terasa lebih hidup.
        </p>
      </RevealBlock>

      <RevealBlock as="article" :delay="200" class="album-board rounded-[2rem] p-7 sm:p-8">
        <p class="text-sm uppercase tracking-[0.22em] text-amber-300">Creative notes</p>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div class="album-note rotate-[-2deg]">
            <p class="text-xs uppercase tracking-[0.18em] text-stone-600">Focus</p>
            <p class="mt-3 text-base leading-7 text-stone-800">Poster design, social media visual, photo retouch, dan video mood editing.</p>
          </div>
          <div class="album-note rotate-[2deg]">
            <p class="text-xs uppercase tracking-[0.18em] text-stone-600">Style</p>
            <p class="mt-3 text-base leading-7 text-stone-800">Bold typography, kontras warna, layout eksploratif, dan framing yang komunikatif.</p>
          </div>
          <div class="album-note rotate-[1deg]">
            <p class="text-xs uppercase tracking-[0.18em] text-stone-600">Use case</p>
            <p class="mt-3 text-base leading-7 text-stone-800">Cocok untuk event poster, social campaign, promosi sekolah, dan portfolio kreatif.</p>
          </div>
          <div class="album-note rotate-[-1deg]">
            <p class="text-xs uppercase tracking-[0.18em] text-stone-600">Next step</p>
            <p class="mt-3 text-base leading-7 text-stone-800">Nanti kita bisa ganti card ini dengan gambar asli karya kamu supaya album terasa lebih personal.</p>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
