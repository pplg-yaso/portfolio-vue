<script setup>

defineProps({
  nama: String,
kelas: String
});
</script>

<template>
    <div class="InfoSiswa">
         <p>Nama : {{ nama }}</p>
          <p v-if ="isActive">Kelas : {{ kelas }}</p>
    </div>
    <ul>
    <li v-for="(user, index) in users" :key="index">{{ user }}</li>
  </ul>
</template>

<style scoped>

</style>