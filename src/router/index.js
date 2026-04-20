import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Portofolio from "../views/Portofolio.vue"
import MyBini from "../views/MyBini.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/portofolio', component: Portofolio},
  { path: '/mybini', component: MyBini}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
