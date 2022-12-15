import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'  // 引入ElementPlus
import 'element-plus/dist/index.css'  // 引入ElementPlus的CSS

createApp(App).use(ElementPlus).mount('#app')
