<template>
    <!-- :rules="rules" -->
  <el-form
    v-if="isInitFormData && computedConfig.item"
    ref="refForm"
    :model="formData"
    :inline="computedConfig.inline"
    :label-position="computedConfig.labelPosition"
    :label-width="computedConfig.labelWidth"
    :label-suffix="computedConfig.labelSuffix"
    :hide-required-asterisk="computedConfig.hideRequiredAsterisk"
    :show-message="computedConfig.showMessage"
    :inline-message="computedConfig.inlineMessage"
    :status-icon="computedConfig.statusIcon"
    :validate-on-rule-change="computedConfig.validateOnRuleChange"
    :size="computedConfig.size"
    :disabled="computedConfig.disabled"

    @validate="(a, b, c) => computeFunction(computedConfig.validate, a, b, c)"
  >

    <!-- 输入项 -->
    <template v-for="(configItem, configItemIndex) in computedConfig.item">
      <slot v-if="typeof configItem.slot === 'string' && computeBoolen(configItem.show, true)" :name="configItem.slot" />
      <!-- 动态加载组件 -->
      <el-form-item 
        v-else-if="computeBoolen(configItem.show, true)"
        :key="configItemIndex"
        :prop="configItem.name"
        :label="configItem.label + '：'"
        :rules="configItem.rules"
        >
        <slot v-if="getComponentType(configItem) === 'slot'" :name="configItem.name" />
        <component
          v-else
          :style="configItem.style ? configItem.style : computedConfig.itemStyle"
          :is="getComponentType(configItem)"
          v-model="formData[configItem.name]"
          :config="configItem"
        />
      </el-form-item>
    </template>

    <!-- 按钮 -->
    <el-form-item v-if="computedConfig.operate">
      <template v-for="(operateItem, operateItemIndex) in computedConfig.operate">
        <el-button 
          v-if="computeBoolen(operateItem.show, true)" 
          :key="operateItemIndex" 
          :size='operateItem.size'
          :type='operateItem.type'
          :plain='operateItem.plain'
          :round='operateItem.round'
          :circle='operateItem.circle'
          :loading='operateItem.loading'
          :disabled='operateItem.disabled'
          :icon='operateItem.icon'
          :autofocus='operateItem.autofocus'
          :native-type='operateItem.nativeType'

          @click="operateItem.click()"
          >
          {{ operateItem.text }}
        </el-button>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
import mixinComponent from '../../common/xMixin'

import xCascader from './xCascader'
import xCheckbox from './xCheckbox'
import xColorPicker from './xColorPicker'
import xDatePicker from './xDatePicker'
import xInput from './xInput'
import xAutocomplete from './xAutocomplete'
import xInputNumber from './xInputNumber'
import xRadio from './xRadio'
import xRate from './xRate'
import xSelect from './xSelect'
import xSlider from './xSlider'
import xSwitch from './xSwitch'
import xTimePicker from './xTimePicker'
import xTimeSelect from './xTimeSelect'
import xTransfer from './xTransfer'
import xTree from './xTree'

export default {
  name: 'XForm',
  components: { xInput, xAutocomplete, xRadio, xCheckbox, xSelect, xDatePicker, xTree, xCascader },
  mixins: [mixinComponent()],
  data() {
    return {
      rules: {},
      isInitFormData: false
    }
  },
  created() {
    this.initFormData()
    this.isInitFormData = true
  },
  computed: {
    computedConfig() {
      const c = {}
      _.merge(c, this.golbalConfig.xform.form, this.config)
      for(let i = 0; i < this.config.item.length; i++) {
        let item = this.config.item[i];
        c.item[i] = _.merge({}, this.golbalConfig[item.xType], item)
      }
      if(this.config.operate) {
        for(let i = 0; i < this.config.operate.length; i++) {
          let operate = this.config.operate[i];
          c.operate[i] = _.merge({}, this.golbalConfig.xform.operate.btn, operate)
        }
      }
      return c;
    }
  },
  methods: {
    // 初始化表单数据
    initFormData() {
      const xTypeArr = ['checkbox']
      const typeArr = ['datetimerange', 'daterange', 'monthrange']
      this.config.item.forEach(item => {
        if (item.multiple || xTypeArr.includes(item.xType) || typeArr.includes(item.type)) {
          if (!this.formData[item.name]) {
            this.formData[item.name] = []
          }
        } else {
          if (this.formData[item.name] === undefined) {
            this.formData[item.name] = ''
          }
        }
      })
      this.formData = JSON.parse(JSON.stringify(this.formData))
    },
    // 获取动态组件类型
    getComponentType(configItem) {
      let xType = configItem.xType;
      let type = configItem.type;

      if (xType === 'slot') {
        return 'slot'
      } else if (xType === 'cascader') {
        return 'xCascader'
      } else if (xType === 'checkbox') {
        return 'xCheckbox'
      } else if (xType === 'colorPicker') {
        return 'xColorPicker'
      } else if (xType === 'datePicker') {
        return 'xDatePicker'
      } else if (xType === 'input') {
        return 'xInput'
      } else if (xType === 'autocomplete') {
        return 'xAutocomplete'
      } else if (xType === 'inputNumber') {
        return 'xInputNumber'
      } else if (xType === 'radio') {
        return 'xRadio'
      } else if (xType === 'rate') {
        return 'xRate'
      } else if (xType === 'select') {
        if (type === 'tree') {
          return 'xTree'
        }
        return 'xSelect'
      } else if (xType === 'slider') {
        return 'xSlider'
      } else if (xType === 'switch') {
        return 'xSwitch'
      } else if (xType === 'timePicker') {
        return 'xTimePicker'
      } else if (xType === 'timeSelect') {
        return 'xTimeSelect'
      } else if (xType === 'transfer') {
        return 'xTransfer'
      }
    },
    // 重置表单
    resetFields() {
      this.$refs['refForm'].resetFields()
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

</style>
