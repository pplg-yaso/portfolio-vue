import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      components: Home
    },
    {
      path: '/Home',
      redirect: { name: 'Home'}
    },
    {
      path:'/About',
      name:'About',
      component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    router
})

export default router