import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// import { createApp } from 'vue'
// import { registerPlugins } from '@/plugins'
// import App from '@/App.vue'

// const app = createApp(App)
// registerPlugins(app)

// app.mount('#app')