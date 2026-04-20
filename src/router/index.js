import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'

const routes = [
  { 
    path: '/home', 
    component: Home 
  },
  { path: '/about', 
    component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})