<!-- 此处注意，如果使用 v-model="visible" 绑定的形式，
上线会报错修改为: model-value="visible"  -->
<template>
  <el-dialog
    :title="title"
    :model-value="visible"
    :before-close="onClose"
    append-to-body
    :width="width + 'px'"
    :close-on-click-modal="false"
  >
    <div class="container" :style="{ height: height + 'px' }">
      <slot name="content"></slot>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="onClose">取消</el-button>
        <el-button type="primary" @click="onConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
interface DialogProps {
  title: string
  visible: boolean
  width: number
  height: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const props = withDefaults(defineProps<DialogProps>(), {
  title: '标题',
  visible: false,
  width: 600,
  height: 250
})

const emit = defineEmits(['onClose', 'onConfirm'])
// 定义弹框的关闭
const onClose = () => {
  emit('onClose')
}
// 定义弹框的确定
const onConfirm = () => {
  emit('onConfirm')
}
</script>

<style lang="scss">
.container {
  overflow-x: initial;
  overflow-y: auto;
}

.el-dialog {
  border-top-left-radius: 7px !important;
  border-top-right-radius: 7px !important;

  .el-dialog__header {
    margin-right: 0px;
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
    background-color: #009688 !important;

    .el-dialog__title {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .el-dialog__headerbtn {
    .el-dialog__close {
      color: #fff;
    }
  }

  .el-dialog__body {
    padding: 10px;
  }

  .el-dialog__footer {
    border-top: 1px solid #e8eaec !important;
    padding: 10px;
  }
}
</style>
