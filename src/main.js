import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)

app.mixin({
  mounted() {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})

app.mount('#app')
