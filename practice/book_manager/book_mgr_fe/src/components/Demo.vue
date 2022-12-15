<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus';

// 定义一个函数
const queryBook = () => {
    ElMessageBox.alert('这是一个消息提示框', '标题', {
        confirmButtonText: '确定',
    })
}
</script>

<template>
    <h3>This is from Demo.vue</h3>
    <el-row class="mb-4">
        <el-button type="primary" @click="queryBook">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
</template>

<style scoped>

</style>