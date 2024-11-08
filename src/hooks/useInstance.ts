// 导入 Vue 的 `getCurrentInstance` 函数和 `ComponentInternalInstance` 类型，用于获取当前组件实例
import { getCurrentInstance, ComponentInternalInstance } from 'vue'

// 定义并导出一个自定义的钩子函数 `useInstance`，用于在 Vue 3 组合式 API 中访问当前组件的实例
export default function useInstance() {
  // 使用 `getCurrentInstance()` 获取当前组件实例，并将其断言为 `ComponentInternalInstance` 类型
  const { appContext, proxy } =
    getCurrentInstance() as ComponentInternalInstance

  // 从 `appContext.config` 中获取全局属性（`globalProperties`），
  // 这样可以访问整个应用程序范围内定义的全局属性和方法
  const global = appContext.config.globalProperties

  // 返回一个对象，包含组件实例的 `proxy` 和全局属性 `global`
  // `proxy` 指向当前组件实例的代理对象，可以用于访问组件中的数据、方法等
  // `global` 指向应用的全局属性
  return {
    proxy,
    global
  }
}
