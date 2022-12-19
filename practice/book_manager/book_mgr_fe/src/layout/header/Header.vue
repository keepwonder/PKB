<script setup lang="ts">

// import { ref } from 'vue'

import CollapseVue from "./Collapse.vue"
import BreadCrumbVue from "./BreadCrumb.vue"
import UserInfoVue from "./UserInfo.vue"

// let name = ref('小栗子')

</script>
F
<template>
    <div style="display: flex; align-items: center">
        <CollapseVue></CollapseVue>
        <BreadCrumbVue></BreadCrumbVue>
    </div>

    <!-- <UserInfoVue :username="name"></UserInfoVue> -->
    <UserInfoVue :username="name"></UserInfoVue>

</template>

<style scoped>

</style>