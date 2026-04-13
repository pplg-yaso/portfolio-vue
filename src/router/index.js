import { createRouter, createWebHistory } from 'vue-router'
import home from "../view/home.vue";
import about from "../view/about.vue";
import services from "../view/services.vue";
import portfolio from "../view/portfolio.vue";
import contact from "../view/contact.vue";
import login from "../view/login.vue";

const routes = [
{ path: '/', component: home },
{ path: '/about', component: about },
{ path: '/services', component: services },
{ path: '/portfolio', component: portfolio },
{ path: '/contact', component: contact },
{ path: '/login', component: login}
]

export default createRouter({
history: createWebHistory(),
routes
})
