import { createApp } from 'vue'
import { createPinia } from 'pinia'

import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)  

app.use(vue3GoogleLogin, {
    clientId: '362140465213-nuar8g80d2ona9a7e200j99lnj0vkouf.apps.googleusercontent.com'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
