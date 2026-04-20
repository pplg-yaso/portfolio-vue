import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import about from '../view/about.vue'
import login from '../view/login.vue'
import services from '../view/services.vue'
import contact from '../view/contact.vue'
import register from '../view/register.vue'

const routes = [
{ path: '/', component: home },
{ path: '/about', component: about},
{ path: '/login', component: login},
{ path: '/home', component: home},
{ path: '/services', component: services},
{ path: '/contact', component: contact},
{ path: '/register', component: register}
]

export default createRouter({
history: createWebHistory(),
routes
})
