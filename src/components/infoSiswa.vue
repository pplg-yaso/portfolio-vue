<script setup>
const isLogin = true;

defineProps({
  nama: String,
  kelas: String,
  gender: String,
});


</script>

<template>
  <div class="text">
    <h1>Nama:{{ nama }}</h1>
    <h1 v-if="isLogin">Kelas:{{ kelas }}</h1>
    <h1>Gender:{{ gender }}</h1>
  </div>
</template>

<style src="./awoo.css" scoped ></style>