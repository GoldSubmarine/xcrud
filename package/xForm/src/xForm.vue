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
      <!-- tabs表格 -->
      <el-tabs
        class="tab-table"
        v-else-if="configItem.xType === 'tabs'"
        v-model="activeTab"
        :key="configItemIndex"
        :type="computedConfig.tabs.type"
        :closable="computedConfig.tabs.closable"
        :addable="computedConfig.tabs.addable"
        :editable="computedConfig.tabs.editable"
        :tab-position="computedConfig.tabs.tabPosition"
        :stretch="computedConfig.tabs.stretch"
        @tab-click="(a) => computeFunction(computedConfig.tabs.tabClick, a)"
        @tab-remove="(a) => computeFunction(computedConfig.tabs.tabRemove, a)"
        @tab-add="() => computeFunction(computedConfig.tabs.tabAdd)"
        @edit="(a, b) => computeFunction(computedConfig.tabs.edit, a, b)"
      >
        <el-tab-pane
          v-for="tabConfig in configItem.tabs.filter(item => item.show !== false)"
          :key="tabConfig.label"
          :name="tabConfig.name"
          :disabled="computeBoolen(tabConfig.disabled, false)"
          :closable="computeBoolen(tabConfig.closable, false)"
          :lazy="computeBoolen(tabConfig.lazy, false)"
          :label="tabConfig.label">
          <el-button type="primary" size="mini" style="margin-bottom:14px;" @click="addDynamic(tabConfig.add, formData[tabConfig.name])">新增</el-button>
          <el-table
            :data="formData[tabConfig.name]"
            :height="computedConfig.tabs.table.height"
            :max-height="computedConfig.tabs.table.maxHeight"
            :stripe="computedConfig.tabs.table.stripe"
            :border="computedConfig.tabs.table.border"
            :size="computedConfig.tabs.table.size"
            :fit="computedConfig.tabs.table.fit"
            :show-header="computedConfig.tabs.table.showHeader"
            :highlight-current-row="computedConfig.tabs.table.highlightCurrentRow"
            :current-row-key="computedConfig.tabs.table.currentRowKey"
            :row-class-name="computedConfig.tabs.table.rowClassName"
            :row-style="computedConfig.tabs.table.rowStyle"
            :cell-class-name="computedConfig.tabs.table.cellClassName"
            :cell-style="computedConfig.tabs.table.cellStyle"
            :header-row-class-name="computedConfig.tabs.table.headerRowClassName"
            :header-row-style="computedConfig.tabs.table.headerRowStyle"
            :header-cell-class-name="computedConfig.tabs.table.headerCellClassName"
            :header-cell-style="computedConfig.tabs.table.headerCellStyle"
            :row-key="computedConfig.tabs.table.rowKey"
            :empty-text="computedConfig.tabs.table.emptyText"
            :default-expand-all="computedConfig.tabs.table.defaultExpandAll"
            :expand-row-keys="computedConfig.tabs.table.expandRowKeys"
            :default-sort="computedConfig.tabs.table.defaultSort"
            :tooltip-effect="computedConfig.tabs.table.tooltipEffect"
            :show-summary="computedConfig.tabs.table.showSummary"
            :sum-text="computedConfig.tabs.table.sumText"
            :summary-method="computedConfig.tabs.table.summaryMethod"
            :span-method="computedConfig.tabs.table.spanMethod"
            :select-on-indeterminate="computedConfig.tabs.table.selectOnIndeterminate"
            :indent="computedConfig.tabs.table.indent"
            :lazy="computedConfig.tabs.table.lazy"
            :load="computedConfig.tabs.table.load"
            :tree-props="computedConfig.tabs.table.treeProps"

            @select="(a, b) => computeFunction(computedConfig.tabs.select, a, b) "
            @select-all="(a) => computeFunction(computedConfig.tabs.selectAll, a) "
            @selection-change="(a) => computeFunction(computedConfig.tabs.selectionChange, a)"
            @cell-mouse-enter="(a, b, c, d) => computeFunction(computedConfig.tabs.cellMouseEnter, a, b, c, d) "
            @cell-mouse-leave="(a, b, c, d) => computeFunction(computedConfig.tabs.cellMouseLeave, a, b, c, d) "
            @cell-click="(a, b, c, d) => computeFunction(computedConfig.tabs.cellClick, a, b, c, d) "
            @cell-dblclick="(a, b, c, d) => computeFunction(computedConfig.tabs.cellDblclick, a, b, c, d) "
            @row-click="(a, b, c) => computeFunction(computedConfig.tabs.rowClick, a, b, c) "
            @row-contextmenu="(a, b, c) => computeFunction(computedConfig.tabs.rowContextmenu, a, b, c) "
            @row-dblclick="(a, b, c) => computeFunction(computedConfig.tabs.rowDblclick, a, b, c) "
            @header-click="(a, b) => computeFunction(computedConfig.tabs.headerClick, a, b) "
            @header-contextmenu="(a, b) => computeFunction(computedConfig.tabs.headerContextmenu, a, b) "
            @sort-change="(a) => computeFunction(computedConfig.tabs.sortChange, a) "
            @filter-change="(a) => computeFunction(computedConfig.tabs.filterChange, a) "
            @current-change="(a, b) => computeFunction(computedConfig.tabs.currentChange, a, b) "
            @header-dragend="(a, b, c, d) => computeFunction(computedConfig.tabs.headerDragend, a, b, c, d) "
            @expand-change="(a, b) => computeFunction(computedConfig.tabs.expandChange, a, b) "
          >
            <el-table-column
              v-for="(columnConfig, columnIndex) in tabConfig.column"
              header-align="center"
              :prop="columnConfig.name"
              :label="columnConfig.label"
              :width="columnConfig.width"
              :align="columnConfig.align"
              :class-name="columnConfig.className"
              :key="columnIndex">
              <template slot="header">
                {{ columnConfig.label }}
                <el-tooltip v-if="columnConfig.tooltip" :effect="computedConfig.tooltip.effect" :placement="computedConfig.tooltip.placement">
                  <div slot="content"><span v-html="columnConfig.tooltip"></span></div>
                  <i :class="computedConfig.tooltip.iconName" :style="computedConfig.tooltip.iconStyle"></i>
                </el-tooltip>
              </template>
              <template v-slot="scope">
                <el-form-item
                  label-width="0px"
                  :prop="tabConfig.name + '.' + scope.$index + '.' + columnConfig.name"
                  :rules="columnConfig.rules"
                >
                  <slot v-if="getComponentType(columnConfig) === 'slot'" :name="columnConfig.name" />
                  <component
                    v-else
                    :style="columnConfig.style"
                    :is="getComponentType(columnConfig)"
                    v-model="scope.row[columnConfig.name]"
                    :config="columnConfig"
                  />
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="60px" header-align="center" align="center">
              <template v-slot="scope">
                <el-form-item label-width="0px">
                  <el-button type="danger" icon="el-icon-close" circle size="mini" @click="removeDynamic(tabConfig.remove, formData[tabConfig.name], scope.$index)"></el-button>
                </el-form-item>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <!-- 动态加载组件 -->
      <el-form-item 
        v-else-if="computeBoolen(configItem.show, true)"
        :key="configItemIndex"
        :prop="configItem.name"
        :label="configItem.label + '：'"
        :rules="configItem.rules"
        >
        <span slot="label">
          {{ configItem.label }}
          <el-tooltip v-if="configItem.tooltip" :effect="computedConfig.tooltip.effect" :placement="computedConfig.tooltip.placement">
            <div slot="content"><span v-html="configItem.tooltip"></span></div>
            <i :class="computedConfig.tooltip.iconName" :style="computedConfig.tooltip.iconStyle"></i>
          </el-tooltip>
          ：
        </span>
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
      isInitFormData: false,
      activeTab: ''
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
        } else if(item.xType === 'tabs') {
          item.tabs.forEach((tab, tabIndex) => {
            if(tabIndex === 0) this.activeTab = tab.name
            if (!this.formData[tab.name]) {
              this.formData[tab.name] = []
            }
          })
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
      let validPromise = new Promise((resolve, reject) => {
        this.$refs['refForm'].validate((valid, obj) => {
          if(valid) {
            resolve()
          } else {
            for(let key in obj) {
              if(/\.\d\./.test(key)) {
                this.activeTab = key.split('.')[0]
              }
            }
            reject()
          }
          if(fun) {
            fun(valid, obj)
          }
        })
      })
      if(fun === undefined) {
        return validPromise
      }
    },
    // 动态 table 表单
    addDynamic(fun, arr) {
      if(fun) {
        fun(arr)
        return
      }
      arr.splice(arr.length, 0, {})
    },
    removeDynamic(fun, arr, index) {
      if(fun) {
        fun(arr, index)
        return
      }
      arr.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.tab-table .el-form-item {
  margin-bottom: 16px;
}
.tab-table tbody td {
  padding-bottom: 0px;
}
.tab-table {
  margin-bottom: 22px;
}
</style>
