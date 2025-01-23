import './assets/main.css'
import LvToast from 'lightvue/toast'
import { createApp , provide} from 'vue'
import App from './App.vue'
//import {provideGlobalProperties} from './GlobalProperties'

const app = createApp(App)
app.use(LvToast)
app.mount('#app')
