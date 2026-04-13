<script setup>
import { ref } from 'vue'

defineProps({
  nama: String,
  kelas: String,
  gender: Boolean
})

const  InActive  = true
const gender = true
const users = ["adi","parij","kiki sampah"]
</script>

<template>

  <div class="info-siswa">
    <p>nama {{ nama }}</p>
    <p v-if="  InActive">{{ kelas }}</p>
    <p v-if="gender">gender : laki laki</p>

    <p v-else>gender : Perempuan</p>

  </div>
  <ul>
    <li v-for="(user, index) in users" :key="index"> {{ user }}</li>
  </ul>

</template>
<style src="./InfoSiswa.css" scoped></style> 

