<script setup lang="ts">
import HeaderVue from "./header/Header.vue"
import MenuVue from "./menu/Menu.vue"
</script>

<template>

    <el-container class="layout">
        <el-aside class="aside" width="200px"><MenuVue></MenuVue></el-aside>
        <el-container>
            <el-header class="header"><HeaderVue></HeaderVue></el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>

</template>

<style scoped>
.layout {
    height: 100%;
}

.header {
    background-color: #d3f5e6;
    background-color: lightblue;
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.aside {
    background-color: #e3f4d2
}

.main {
    background-color: #eee3d2
}
</style>