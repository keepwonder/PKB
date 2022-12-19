<script setup lang="ts">

import { ref } from 'vue'

let isCollapse = ref(false)

const changeCollapse = () => {
    //改变值
    isCollapse.value = !isCollapse.value
    console.log(isCollapse.value)
}

</script>

<template>
    <el-icon>
        <component class="icons" is="Fold" @click="changeCollapse"></component>
    </el-icon>

</template>

<style scoped>
.el-icon {
    font-size: 22px;
    margin-right: 10px;

}
</style>