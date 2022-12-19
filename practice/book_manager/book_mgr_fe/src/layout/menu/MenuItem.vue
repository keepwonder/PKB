<script setup lang="ts">
import { reactive } from 'vue'

let menuList = reactive([
    {
        path: '/',
        meta: {
            title: '首页',
            icon: 'HomeFilled',
        }
    },
    {
        path: '/book_mgr',
        meta: {
            title: '图书管理',
            icon: 'Notebook',
        },
        children: [
            {
                path: '/book_mgr/books',
                meta: {
                    title: '书籍管理',
                    icon: 'Setting',
                },
            },
            {
                path: '/book_mgr/publishers',
                meta: {
                    title: '出版社管理',
                    icon: 'Setting',
                },
            },
            {
                path: '/book_mgr/producers',
                meta: {
                    title: '出品方管理',
                    icon: 'Setting',
                },
            },
            {
                path: '/book_mgr/auhtors',
                meta: {
                    title: '作者管理',
                    icon: 'Setting',
                },
            },
        ]

    },
    {
        path: '/user_mgr',
        meta: {
            title: '用户管理',
            icon: 'UserFilled',
        },
        children: [
            {
                path: '/user_mgr/account',
                meta: {
                    title: '账号管理',
                    icon: 'Setting',
                },
            },
            {
                path: '/user_mgr/role',
                meta: {
                    title: '角色管理',
                    icon: 'Setting',
                },
            },
            {
                path: '/user_mgr/auhtorization',
                meta: {
                    title: '权限管理',
                    icon: 'Setting',
                },
            },
        ]

    },
])

</script>

<template>
    <template v-for="menu in menuList">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title style="padding-left: 40px;">
                <el-icon>
                    <component class="icons" :is="menu.meta.icon"></component>
                </el-icon>
                <span >{{ menu.meta.title }}</span>
            </template>
            <template v-for="child in menu.children">
                <el-menu-item :index="child.path">
                    <el-icon>
                        <component class="icons" :is="child.meta.icon"></component>
                    </el-icon>
                    <span>{{ child.meta.title }}</span>
                </el-menu-item>
            </template>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path">
            <el-icon>
                <component class="icons" :is="menu.meta.icon"></component>
            </el-icon>
            <span>{{ menu.meta.title }}</span>
        </el-menu-item>
    </template>
    <!-- 
        <el-menu-item index="0">首页</el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>图书管理</span>
            </template>
            <el-menu-item index="/books">书籍管理</el-menu-item>
            <el-menu-item index="/publishers">出版社管理</el-menu-item>
            <el-menu-item index="/producer">出品方管理</el-menu-item>
            <el-menu-item index="/authors">作者管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>电影管理</span>
            </template>
            <el-menu-item index="2-1">书籍管理</el-menu-item>
            <el-menu-item index="2-2">出版社管理</el-menu-item>
            <el-menu-item index="2-3">出品方管理</el-menu-item>
            <el-menu-item index="2-4">作者管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>音乐管理</span>
            </template>
            <el-menu-item index="3-1">书籍管理</el-menu-item>
            <el-menu-item index="3-2">出版社管理</el-menu-item>
            <el-menu-item index="3-3">出品方管理</el-menu-item>
            <el-menu-item index="3-4">作者管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>用户管理</span>
            </template>
            <el-menu-item index="4-1">登录账号</el-menu-item>
            <el-menu-item index="4-2">用户角色</el-menu-item>
            <el-menu-item index="4-3">菜单管理</el-menu-item>
            <el-menu-item index="4-4">权限信息</el-menu-item>
        </el-sub-menu>
 -->
</template>

<style scoped>
.el-menu-item {
    display: block;
    text-align: center;
    padding-right: 80px;
}
</style>