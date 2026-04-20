import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Skills from '../pages/Skills.vue'
import Project from '../pages/Project.vue'
import Contact from '../pages/Contact.vue'
import Album from '../pages/Album.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/project', component: Project },
  { path: '/contact', component: Contact },
  { path: '/album', component: Album },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
