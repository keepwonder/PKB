import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import Index from '../layout/Index.vue'

// 创建路由匹配的数据集合 ---Array
const routes: Array<RouteRecordRaw> =  [
    {
        path: '/',
        component: Index,
    },
    
]


// 创建一个vue-router对象
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router