import router from '@/core/router'

import '@/common/styles/global.css'

import App from '@/App.vue'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
