<template>
  <el-form
    v-if="isInitFormData && config.items"
    ref="refForm"
    :disabled="config.disabled"
    :inline="config.inline"
    :rules="rules"
    :validate-on-rule-change="false"
    :model="formData"
    :label-width="config.inline ? '80px' : '120px'"
    class="formComponent"
  >
    <template v-for="(configItem, configItemIndex) in config.items">
      <slot v-if="configItem.slot && computeBoolen(configItem.show, true)" :name="configItem.slot" />
      <!-- 动态加载组件 -->
      <el-form-item v-else-if="computeBoolen(configItem.show, true)" :key="configItemIndex" :label="configItem.label + '：'" :prop="configItem.name">
        <component
          :is="getComponentType(configItem.xType)"
          v-model="formData[configItem.name]"
          class="w300"
          :config="configItem"
        />
      </el-form-item>
    </template>

    <el-form-item v-if="config.operate">
      <template v-for="(operateItem, operateItemIndex) in config.operate">
        <el-button v-if="computeBoolen(operateItem.show, true)" :key="operateItemIndex" type="primary" :icon="operateItem.icon" @click="operateItem.click(formData, $refs[config.ref ? config.ref : 'refForm'])">{{ operateItem.text }}</el-button>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
import mixinComponent from '../../common/xMixin'

import xInput from './xInput'
import xRadio from './xRadio'
import xCheckbox from './xCheckbox'
import xSelect from './xSelect'
// import xTime from './xTime'
import xDatePicker from './xDatePicker'
import xTree from './xTree'

export default {
  name: 'XForm',
  components: { xInput, xRadio, xCheckbox, xSelect, xDatePicker, xTree },
  mixins: [mixinComponent()],
  data() {
    return {
      OriginalFormData: {},
      rules: {},
      ruleEnable: true,
      isInitFormData: false
    }
  },
  computed: {

  },
  created() {
    this.initFormData()
    this.rulesGenerate()
    this.isInitFormData = true
  },
  methods: {
    // 初始化表单数据
    initFormData() {
      const xTypeArr = ['checkbox']
      const typeArr = ['datetimerange', 'daterange', 'monthrange']
      this.OriginalFormData = JSON.parse(JSON.stringify(this.formData))
      // todo:
      this.config.items.forEach(item => {
        if (item.multiple || xTypeArr.includes(item.xType) || typeArr.includes(item.type)) {
          if (!this.OriginalFormData[item.name]) {
            this.OriginalFormData[item.name] = []
          }
        } else {
          if (this.OriginalFormData[item.name] === undefined) {
            this.OriginalFormData[item.name] = ''
          }
        }
      })
      this.formData = JSON.parse(JSON.stringify(this.OriginalFormData))
    },
    // 检验规则
    rulesGenerate() {
      for (let index = 0; index < this.config.items.length; index++) {
        const item = this.config.items[index]
        // 不存在跳过当前item
        if (!item.rules) continue
        if (item.rules instanceof Array) {
          this.rules[item.name] = item.rules
        } else {
          console.error(`校验规则：${item.rules}配置错误，请检查！`)
        }
      }
    },
    // 获取动态组件类型
    getComponentType(xType) {
      if (xType === 'text' || xType === 'textarea') {
        return 'xInput'
      } else if (xType === 'radio') {
        return 'xRadio'
      } else if (xType === 'checkbox') {
        return 'xCheckbox'
      } else if (xType === 'tree') {
        return 'xTree'
      } else if (xType === 'select') {
        return 'xSelect'
      } else if (xType === 'time') {
        return 'xTime'
      } else if (xType === 'datePicker') {
        return 'xDatePicker'
      }
    },
    // 重置表单
    resetFields() {
      // this.ruleEnable = false;
      // this.formData = JSON.parse(JSON.stringify(this.OriginalFormData));
      this.$refs['refForm'].resetFields()
      // this.$nextTick().then(() => {
      //     this.ruleEnable = true;
      // })
    },
    // 清除校验
    clearValidate() {
      this.$refs['refForm'].clearValidate()
    },
    // 校验
    validate(fun) {
      if (fun) {
        return this.$refs['refForm'].validate(fun)
      }
      return this.$refs['refForm'].validate()
    }
  }
}
</script>

<style lang="scss" scoped>
.w300 {
    max-width: 300px;
    min-width: 220px;
    width: 100%;
    border-radius: 6px;
    display: flex;
}
</style>
