<script setup lang="ts">

import { Expand, Fold } from "@element-plus/icons-vue"

// import { ref } from 'vue'

// let isCollapse = ref(false)

// const changeCollapse = () => {
//     //改变值
//     isCollapse.value = !isCollapse.value
//     console.log(isCollapse.value)
// }

import { ref, computed } from 'vue'
import { useStore} from 'vuex'

const store = useStore()

const localCollapse = ref(false)

const isCollapse = computed(()=>{
    localCollapse.value = store.getters['getCollpase']
    return store.getters['getCollapse']
})

const changeCollapse = () => {

    localCollapse.value = !isCollapse.value
    // 修改store-statte-collapse
    store.commit('setCollapse', localCollapse.value)
}

</script>

<template>
    <el-icon>
        <!-- <component class="icons" is="Fold" @click="changeCollapse"></component> -->
        <component class="icons" :is="isCollapse ? Expand : Fold" @click="changeCollapse"></component>
    </el-icon>

</template>

<style scoped>
.el-icon {
    font-size: 22px;
    margin-right: 10px;

}
</style>