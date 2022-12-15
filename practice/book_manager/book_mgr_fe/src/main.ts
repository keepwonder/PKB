import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'  // 引入ElementPlus
import 'element-plus/dist/index.css'  // 引入ElementPlus的CSS
import router from './router'

createApp(App).use(router).use(ElementPlus).mount('#app')
