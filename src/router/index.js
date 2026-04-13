import{ createRouter,createWebHistory} from'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
{ path: '/', component: Home },
{ path: '/about', component: About },
{ path: '/services', component: Services },
{ path: '/contact', component: Contact },
{ path: '/Portfolio', component: Portfolio},
]
export default createRouter({
history: createWebHistory(),
routes
})
