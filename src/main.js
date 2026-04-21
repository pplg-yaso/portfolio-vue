import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index.js' 

const app = createApp(App)

app.use(router) // <--- Ini "colokan listriknya" supaya router-link bisa jalan
app.mount('#app')