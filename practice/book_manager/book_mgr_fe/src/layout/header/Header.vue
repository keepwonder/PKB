<script setup lang="ts">
import CollapseVue from "./Collapse.vue"
import BreadCrumbVue from "./BreadCrumb.vue"
import UserInfoVue from "./UserInfo.vue"

</script>

<template>
    <div style="display: flex; align-items: center">
        <CollapseVue></CollapseVue>
        <BreadCrumbVue></BreadCrumbVue>
    </div>

    <UserInfoVue></UserInfoVue>

</template>

<style scoped>

</style>