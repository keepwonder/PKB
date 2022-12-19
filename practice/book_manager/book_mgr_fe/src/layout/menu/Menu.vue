<script setup lang="ts"></script>

<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
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

</style>