import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import History from '../components/History.vue'
import Player from '../components/Player.vue'
import Trophy from '../components/Tropy.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/history', component: History },
  { path: '/player', component: Player },
  { path: '/trophy', component: Trophy }
]

export default createRouter({
  history: createWebHistory(),
  routes
})