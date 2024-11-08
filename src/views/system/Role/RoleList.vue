<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          placeholder="请输⼊关键字"
          v-model="searchParm.roleName"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>
        <el-button icon="Close" type="danger" plain @click="resetBtn"
          >重置</el-button
        >
        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 新增、编辑弹框 -->
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form
          :model="addModel"
          ref="addRef"
          :rules="rules"
          label-width="80px"
          :inline="false"
          size="default"
        >
          <el-form-item prop="roleName" label="⻆⾊名称">
            <el-input v-model="addModel.roleName"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注">
            <el-input v-model="addModel.remark"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import SysDialog from '@/components/SysDialog.vue'
import useDialog from '@/hooks/useDialog'
import { ElMessage, FormInstance } from 'element-plus'
import { addApi } from '@/api/role'

//表单ref属性
const addRef = ref<FormInstance>()
//弹框属性
const { dialog, onClose, onShow } = useDialog()
//表单绑定的对象
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  roleName: ''
})

//新增按钮点击事件
const addBtn = () => {
  dialog.title = '新增角色'
  dialog.height = 180
  //显示弹框
  onShow()
}
//新增表单对象
const addModel = reactive({
  roleId: '',
  roleName: '',
  remark: ''
})
//表单验证规则
const rules = reactive({
  roleName: [
    {
      required: true,
      message: '请输⼊⻆⾊名称',
      trigger: 'change'
    }
  ]
})

//表单提交
const commit = () => {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log('表单验证通过')
      // 提交请求
      let res = await addApi(addModel)
      if (res && res.code == 200) {
        ElMessage.success(res.msg)
        //关闭弹框
        onClose()
      }
    }
  })
}

//搜索
const searchBtn = () => {}

//重置
const resetBtn = () => {}
</script>
