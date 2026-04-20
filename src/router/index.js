import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import about from '../view/about.vue'
import login from '../view/login.vue'

const routes = [
{ path: '/', component: home },
{ path: '/about', component: about},
{ path: '/login', component: login},
{ path: '/home', component: home},
]

export default createRouter({
history: createWebHistory(),
routes
})
