import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Service.vue'
import Portfolio from '../views/Fortfolio.vue'
import Contact from '../views/Contact.vue'

const routes = [
{ path: '/', component: Home },
{ path: '/about', component: About },
{ path: '/services', component: Services },
{ path: '/portfolio', component: Portfolio },
{ path: '/contact', component: Contact }
]
export default createRouter({
history: createWebHistory(),
routes
})
