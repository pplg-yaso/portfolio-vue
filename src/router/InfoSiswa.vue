<script setup>
import { ref } from 'vue'

defineProps({
  nama: String,
   kelas: String,
})

const isActive = false;
</script>


<template>
<div class="info-siswa">
  <p>Nama : {{ nama }}</p>
  <p>Kelas : {{ kelas }}</p>
  <p v-if="isActive"> Gender : Pria</p>
  <p v-else> Gender : Wanita</p>
   </div>
</template>

<style scoped> 
.read-the-docs {
  color: #888;
}
</style>
