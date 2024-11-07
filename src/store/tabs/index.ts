import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 定义选项卡数据类型
export type Tab = {
  title: string
  path: string
}

// 定义 state 的数据类型
export type TabState = {
  tabList: Tab[]
}

// 定义store
export const useTabStore = defineStore('tabStore', () => {
  // 定义 state
  const tabList = ref<Tab[]>([])

  // 计算属性获取选项卡列表
  const getTab = computed(() => tabList.value)

  // 添加选项卡数据
  const addTab = (tab: Tab) => {
    // 判断数据是否已存在选项卡列表中
    if (tabList.value.some((item) => item.path === tab.path)) return
    if (tab.path == '/dashboard') {
      // 如果是首页，加到第一个
      tabList.value.unshift(tab)
    } else {
      tabList.value.push(tab)
    }
  }

  return {
    tabList,
    getTab,
    addTab
  }
})
