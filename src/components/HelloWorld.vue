<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  description: String
})

const count = ref(0)
</script>

<template>
  <p>{{ title }}</p>
  <p> {{ description }}</p>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
