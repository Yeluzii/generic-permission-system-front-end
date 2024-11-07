<template>
  <h1>{{ store.count }}</h1>
  <h2>{{ count }}</h2>
  <h2>{{ msg }}</h2>
  <el-button type="primary" size="default" @click="addBtn">新增</el-button>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store/test'
import { storeToRefs } from 'pinia'

// 使用 storeToRefs 批量结构 Store 中的响应式数据
const store = useTestStore()
const { count, msg } = storeToRefs(store)

const addBtn = () => {
  // 第一种
  // store.count++;

  // 第二种
  // store.setCount(++store.count)

  // 第三种
  // store.$patch({
  //   count: ++store.count
  // })

  // 第四种
  store.$patch((state) => {
    state.count = ++state.count
  })
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
