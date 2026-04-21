import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClothesView from '../views/ClothesView.vue'
import FoodView from '../views/FoodView.vue'
import JewelryView from '../views/JewelryView.vue'
// 1. Import halaman baru kamu di sini
import SkincareView from '../views/SkincareView.vue'
import PerfumeView from '../views/PerfumeView.vue'
import MakeupView from '../views/MakeupView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/clothes', name: 'clothes', component: ClothesView },
    { path: '/food', name: 'food', component: FoodView },
    { path: '/jewelry', name: 'jewelry', component: JewelryView },
    // 2. Tambahkan rutenya di sini
    { path: '/skincare', name: 'skincare', component: SkincareView },
    { path: '/perfume', name: 'perfume', component: PerfumeView },
    { path: '/makeup', name: 'makeup', component: MakeupView },
  ]
})

export default router