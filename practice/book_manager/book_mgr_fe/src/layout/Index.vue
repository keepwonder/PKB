<script setup lang="ts">
import HeaderVue from "./header/Header.vue"
import MenuVue from "./menu/Menu.vue"

// 导入图标
import { Edit } from '@element-plus/icons-vue'
</script>

<template>

    <el-container class="layout">
        <el-aside class="aside" width="auto">
            <MenuVue></MenuVue>
        </el-aside>
        <el-container>
            <el-header class="header">
                <HeaderVue></HeaderVue>
            </el-header>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<style scoped>
.layout {
    height: 100%;
}

.header {
    background-color: lightblue;
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.aside {
    background-color: #304156
}
</style>