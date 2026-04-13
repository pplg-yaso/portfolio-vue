<script setup>
import { ref } from 'vue'

defineProps({
  nama: String,
  kelas: String,
  jurusan: String,
  pria: Boolean,
})
const isActive = true;
const count = ref(0)
</script>

<template> 
   <div class="infosiswa">
  <p>Nama: {{ nama }}</p>
  <p v-if="isActive">kelas : {{ kelas }}</p>
  <p> gender : wanita</p>
  </div>

  <ul>
    <li v-for="(user, index) in users" :key="index">{{ user }} </li>
  </ul>
  </template>
<style src="./infosiswa.css"></style>
<style scoped>
.read-the-docs {
  color: #888;
}
</style> 
