import { createApp } from 'vue'
import App from './App.vue'

import { router } from './providers'
import { createPinia } from 'pinia'


export const app = createApp(App)
    .use(createPinia())
    .use(router)