import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router";


const app = createApp(App)
// 使用配置的路由
// app.use(routerIndex)
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app')
