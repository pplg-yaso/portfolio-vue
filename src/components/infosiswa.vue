<script setup>
import { ref } from 'vue'

defineProps({
  nama: String,
  kelas: String,
  gender: String,
})

const islogin=ref(true);
const isActive="true"
const user= ["farel abuy", "ahmad abuy","zaina abuy"]
const count = ref(0)
</script>

<template>
    <p>{{ nama}}</p>
    <p>{{ kelas}}</p>
    <p>{{ gender}}</p>
    
  <ul>
    <li v-for="(user,index) in user " :key="index">{{ user }}</li>
  </ul>
</template>

<style src="./infoSiswa.css"scoped ></style>

