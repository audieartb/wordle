import './assets/main.css'
import LvToast from 'lightvue/toast'
import { createApp , provide} from 'vue'
import App from './App.vue'
//import {provideGlobalProperties} from './GlobalProperties'

const app = createApp(App)
<<<<<<< HEAD
app.use(LvToast)
app.mount('#app')
=======

const rootComponent = app.use(LvToast).provide('app',app).mount('#app')
//app.component('LvToast',LvToast)

console.log(app.config.globalProperties)
//createApp(App).mount('#app')
>>>>>>> origin
