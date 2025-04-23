import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

axios.defaults.baseURL = 'https://tallguys.newway.com.mm/api'
axios.defaults.headers.common['Content-Type'] = 'application/json'

app.mount('#app')
