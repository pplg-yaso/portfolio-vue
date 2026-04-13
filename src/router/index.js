import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Portofolio from '../views/portofolio.vue'

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  {
    path: '/portofolio',
    component: Portofolio // ✅ harus sama
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})