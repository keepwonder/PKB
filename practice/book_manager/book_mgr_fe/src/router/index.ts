import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Demo from '../components/Demo.vue'

// 创建路由匹配的数据集合 ---Array
const routes: Array<RouteRecordRaw> =  [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/demo',
        component: Demo,
    },
]


// 创建一个vue-router对象
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router