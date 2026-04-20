<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  texts: {
    type: Array,
    default: () => [],
  },
  typingSpeed: {
    type: Number,
    default: 85,
  },
  deletingSpeed: {
    type: Number,
    default: 45,
  },
  pauseDelay: {
    type: Number,
    default: 1500,
  },
  startDelay: {
    type: Number,
    default: 250,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  cursorClass: {
    type: String,
    default: 'text-amber-300',
  },
  textClass: {
    type: String,
    default: '',
  },
})

const displayText = ref('')
const currentTextIndex = ref(0)
const isDeleting = ref(false)
const timeoutId = ref(null)

const safeTexts = computed(() =>
  props.texts.filter((text) => typeof text === 'string' && text.trim().length > 0),
)

const activeSentence = computed(() => safeTexts.value[currentTextIndex.value] ?? '')

const clearTypingTimeout = () => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
  }
}

const resetTypewriter = () => {
  clearTypingTimeout()
  displayText.value = ''
  currentTextIndex.value = 0
  isDeleting.value = false
}

const scheduleNextStep = (delay) => {
  clearTypingTimeout()
  timeoutId.value = window.setTimeout(runTypewriter, delay)
}

const runTypewriter = () => {
  const sentence = activeSentence.value

  if (!sentence) {
    displayText.value = ''
    return
  }

  if (!isDeleting.value) {
    const nextLength = displayText.value.length + 1
    displayText.value = sentence.slice(0, nextLength)

    if (displayText.value === sentence) {
      if (!props.loop && currentTextIndex.value === safeTexts.value.length - 1) {
        return
      }

      isDeleting.value = true
      scheduleNextStep(props.pauseDelay)
      return
    }

    scheduleNextStep(props.typingSpeed)
    return
  }

  const nextLength = Math.max(displayText.value.length - 1, 0)
  displayText.value = sentence.slice(0, nextLength)

  if (nextLength === 0) {
    isDeleting.value = false

    if (safeTexts.value.length > 1) {
      currentTextIndex.value = (currentTextIndex.value + 1) % safeTexts.value.length
    }

    if (!props.loop && currentTextIndex.value === 0) {
      return
    }

    scheduleNextStep(props.typingSpeed)
    return
  }

  scheduleNextStep(props.deletingSpeed)
}

watch(
  () => props.texts,
  () => {
    resetTypewriter()

    if (safeTexts.value.length > 0) {
      scheduleNextStep(props.startDelay)
    }
  },
  { deep: true },
)

onMounted(() => {
  if (safeTexts.value.length > 0) {
    scheduleNextStep(props.startDelay)
  }
})

onBeforeUnmount(() => {
  clearTypingTimeout()
})
</script>

<template>
  <div class="inline-flex min-h-[1.4em] items-center gap-1 align-middle">
    <span
      class="typewriter-text transition-opacity duration-300"
      :class="textClass"
      aria-live="polite"
    >
      {{ displayText }}
    </span>
    <span
      class="typewriter-cursor animate-pulse font-medium"
      :class="cursorClass"
      aria-hidden="true"
    >
      |
    </span>
  </div>
</template>

<style scoped>
.typewriter-text {
  will-change: contents;
}

.typewriter-cursor {
  animation: blink-cursor 0.9s step-end infinite;
}

@keyframes blink-cursor {
  0%,
  45% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0.18;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-cursor {
    animation: none;
    opacity: 1;
  }

  .typewriter-text {
    transition: none;
  }
}
</style>
