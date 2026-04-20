<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  delay: {
    type: Number,
    default: 0,
  },
  distance: {
    type: Number,
    default: 28,
  },
})

const root = ref(null)
const isVisible = ref(false)

let observer

const animationStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-distance': `${props.distance}px`,
}))

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  if (root.value) {
    observer.observe(root.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <component
    :is="as"
    ref="root"
    class="reveal-block"
    :class="{ 'is-visible': isVisible }"
    :style="animationStyle"
  >
    <slot />
  </component>
</template>
