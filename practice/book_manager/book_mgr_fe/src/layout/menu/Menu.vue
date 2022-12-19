<script setup lang="ts">
import MenuLogoVue from './MenuLogo.vue'

</script>

<template>
    <!-- logo区域 -->
    <MenuLogoVue class="layout-logo"></MenuLogoVue>
    <!-- 侧边栏导航 -->
    <el-menu active-text-color="#ffd04b" background-color="#304156" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>图书管理</span>
            </template>
            <el-menu-item index="1-1">书籍管理</el-menu-item>
            <el-menu-item index="1-2">出版社管理</el-menu-item>
            <el-menu-item index="1-3">出品方管理</el-menu-item>
            <el-menu-item index="1-4">作者管理</el-menu-item>
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
    </el-menu>
</template>

<style scoped>
.el-menu-item {
    display: block;
    text-align: center;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
}

.el-menu {
    border-right: none;
}

.el-menu-item {
    color: #f4f4f5 !important;
}

:deep(.el-sub-menu .el-sub-menu__title) {
    color: #f4f4f5 !important;
}

/* .el-submenu .is-active .el-submenu__title {
  border-bottom-color: #1890ff;
} */
:deep(.el-menu .el-menu-item) {
    color: #bfcbd9;
}

/* 菜单点中文字的颜色 */
:deep(.el-menu-item.is-active) {
    color: #409eff !important;
}

/* 当前打开菜单的所有子菜单颜色 */
:deep(.is-opened .el-menu-item) {
    background-color: #1f2d3d !important;
}

/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
    background-color: #001528 !important;
}

/* Logo CSS部分的动画 */
@keyframes logoAnimation {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(1);
    }
}

.layout-logo {
    animation: logoAnimation 1s ease-out;
}
</style>