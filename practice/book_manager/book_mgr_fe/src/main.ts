import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus, { affixProps } from 'element-plus'  // 引入ElementPlus
import 'element-plus/dist/index.css'  // 引入ElementPlus的CSS
import router from './router'
import * as Icons from '@element-plus/icons-vue'  // 导入所有的icon的图标

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app')

// 遍历所有的icon,把每个icon图标以组建的方式加载到app中
Object.keys(Icons).forEach((key) =>{
    app.component(key, Icons[key as keyof typeof Icons])
})
