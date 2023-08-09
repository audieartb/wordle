import './assets/main.css'
import LvToast from 'lightvue/toast'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
//app.use(LvToast)
app.component('LvToast',LvToast)
app.mount('#app')
console.log(app)
//createApp(App).mount('#app')
