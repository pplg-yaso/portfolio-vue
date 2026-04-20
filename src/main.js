import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import router from './routers/routers'

const app = createApp(App)
app.use(router)
app.mount('#app')
