import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

// import Index from '../layout/Index.vue'
import Layput from '../layout/Index.vue'

// 创建路由匹配的数据集合 ---Array
const routes: Array<RouteRecordRaw> =  [
    // {
    //     path: '/',
    //     component: Index,
    // },
    {
        path: '/', 
        component: Layput,
        name: 'Layput',
        redirect: '/dashboard', //自动跳转
        children: [
            {
                path: '/dashboard',
                component: ()=> import('../views/index/Dashboard.vue'),
                name: 'Dashboard'
            }
        ],
    },

    // 图书管理
    {
        path: '/book_mgr', 
        component: Layput,
        name: 'book_mgr',
        children: [
            {
                path: '/book_mgr/books',
                component: ()=> import('../views/book/Book.vue'),
                name: 'Book'
            },
            {
                path: '/book_mgr/authors',
                component: ()=> import('../views/book/Author.vue'),
                name: 'Auhtor'
            },
            {
                path: '/book_mgr/producers',
                component: ()=> import('../views/book/Producer.vue'),
                name: 'Producer'
            },
            {
                path: '/book_mgr/publishers',
                component: ()=> import('../views/book/Publisher.vue'),
                name: 'Publisher'
            },
            
        ],
    },

    // 图书管理
    {
        path: '/user_mgr', 
        component: Layput,
        name: 'user_mgr',
        children: [
            {
                path: '/user_mgr/account',
                component: ()=> import('../views/user/Account.vue'),
                name: 'Account'
            },
            {
                path: '/user_mgr/role',
                component: ()=> import('../views/user/Role.vue'),
                name: 'Role'
            },
            {
                path: '/user_mgr/authorization',
                component: ()=> import('../views/user/Authorization.vue'),
                name: 'Auhtorization'
            },

        ],
    },
    
]


// 创建一个vue-router对象
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router