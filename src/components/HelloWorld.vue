<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  description: String
})

const count = ref(0)
</script>

<template>
  <div>
   <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
