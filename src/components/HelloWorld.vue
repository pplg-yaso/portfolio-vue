<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  description: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ title }}</h1>
  <h2>{{ description}}</h2>

  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
