<template>
  <div>
    <x-form v-if="formConfig" ref="xForm" v-model="formData" :config="formConfig" @reset="reset" @submit="getList" />
    <el-table
      :data="data"
      :height="computedConfig.height"
      :max-height="computedConfig.maxHeight"
      :stripe="computedConfig.stripe"
      :border="computedConfig.border"
      :size="computedConfig.size"
      :fit="computedConfig.fit"
      :show-header="computedConfig.showHeader"
      :highlight-current-row="computedConfig.highlightCurrentRow"
      :current-row-key="computedConfig.currentRowKey"
      :row-class-name="computedConfig.rowClassName"
      :row-style="computedConfig.rowStyle"
      :cell-class-name="computedConfig.cellClassName"
      :cell-style="computedConfig.cellStyle"
      :header-row-class-name="computedConfig.headerRowClassName"
      :header-row-style="computedConfig.headerRowStyle"
      :header-cell-class-name="computedConfig.headerCellClassName"
      :header-cell-style="computedConfig.headerCellStyle"
      :row-key="computedConfig.rowKey"
      :empty-text="computedConfig.emptyText"
      :default-expand-all="computedConfig.defaultExpandAll"
      :expand-row-keys="computedConfig.expandRowKeys"
      :default-sort="computedConfig.defaultSort"
      :tooltip-effect="computedConfig.tooltipEffect"
      :show-summary="computedConfig.showSummary"
      :sum-text="computedConfig.sumText"
      :summary-method="computedConfig.summaryMethod"
      :span-method="computedConfig.spanMethod"
      :select-on-indeterminate="computedConfig.selectOnIndeterminate"
      :indent="computedConfig.indent"
      :lazy="computedConfig.lazy"
      :load="computedConfig.load"
      :tree-props="computedConfig.treeProps"

      @select="(a, b) => computeFunction(computedConfig.select, a, b) "
      @select-all="(a) => computeFunction(computedConfig.selectAll, a, b) "
      @selection-change="(a) => computeFunction(computedConfig.selectionChange, a, b) "
      @cell-mouse-enter="(a, b, c, d) => computeFunction(computedConfig.cellMouseEnter, a, b, c, d) "
      @cell-mouse-leave="(a, b, c, d) => computeFunction(computedConfig.cellMouseLeave, a, b, c, d) "
      @cell-click="(a, b, c, d) => computeFunction(computedConfig.cellClick, a, b, c, d) "
      @cell-dblclick="(a, b, c, d) => computeFunction(computedConfig.cellDblclick, a, b, c, d) "
      @row-click="(a, b, c) => computeFunction(computedConfig.rowClick, a, b) "
      @row-contextmenu="(a, b, c) => computeFunction(computedConfig.rowContextmenu, a, b) "
      @row-dblclick="(a, b, c) => computeFunction(computedConfig.rowDblclick, a, b) "
      @header-click="(a, b) => computeFunction(computedConfig.headerClick, a, b) "
      @header-contextmenu="(a, b) => computeFunction(computedConfig.headerContextmenu, a, b) "
      @sort-change="(a) => computeFunction(computedConfig.sortChange, a) "
      @filter-change="(a) => computeFunction(computedConfig.filterChange, a) "
      @current-change="(a, b) => computeFunction(computedConfig.currentChange, a, b) "
      @header-dragend="(a, b, c, d) => computeFunction(computedConfig.headerDragend, a, b) "
      @expand-change="(a, b) => computeFunction(computedConfig.expandChange, a, b) "
    >
      <!-- 生成动态列 -->
      <template v-for="(configItem, configIndex) in computedConfig.column">
        <el-table-column
          :key="configIndex"
          :type="configItem.type"
          :index="configItem.index"
          :column-key="configItem.columnKey"
          :label="configItem.label"
          :prop="configItem.prop"
          :width="configItem.width"
          :min-width="configItem.minWidth"
          :fixed="configItem.fixed"
          :render-header="configItem.renderHeader"
          :sortable="configItem.sortable"
          :sort-method="configItem.sortMethod"
          :sort-by="configItem.sortBy"
          :sort-orders="configItem.sortOrders"
          :resizable="configItem.resizable"
          :formatter="configItem.formatter"
          :show-overflow-tooltip="configItem.showOverflowTooltip"
          :align="configItem.align"
          :header-align="configItem.headerAlign"
          :class-name="configItem.className"
          :label-class-name="configItem.labelClassName"
          :selectable="configItem.selectable"
          :reserve-selection="configItem.reserveSelection"
          :filters="configItem.filters"
          :filter-placement="configItem.filterPlacement"
          :filter-multiple="configItem.filterMultiple"
          :filter-method="configItem.filterMethod"
          :filtered-value="configItem.filteredValue">

          <template slot-scope="scope">
            <span :style="columnStyleOrClass(configItem.style, scope.row)" :class="columnStyleOrClass(configItem.class, scope.row)">
              {{ filterTableData(configItem, scope.row, scope) }}
            </span>
          </template>

        </el-table-column>
      </template>
      <!-- <el-table-column v-if="config.select" type="selection" width="55" />
      <el-table-column v-if="config.index !== false" type="index" width="50" align="center" label="编号" />
      <template v-for="(configItem, configIndex) in config.columns">
        <el-table-column v-if="computeBoolen(configItem.show, true)" :key="configIndex" :prop="configItem.name" :label="configItem.label" show-overflow-tooltip :align="computeData(configItem.align, 'center')">
          <template slot-scope="scope">
            <span :style="columnStyleOrClass(configItem.style, scope.row)">
              {{ filterTableData(configItem, scope.row, scope) }}
            </span>
          </template>
        </el-table-column>
      </template> -->

      <!-- 表格的操作按钮 -->
      <el-table-column
        v-if="operateConfig"
        :label="operateConfig.label"
        :width="operateConfig.width"
        :min-width="operateConfig.minWidth"
        :fixed="operateConfig.fixed"
        :render-header="operateConfig.renderHeader"
        :resizable="operateConfig.resizable"
        :align="operateConfig.align"
        :header-align="operateConfig.headerAlign"
        :class-name="operateConfig.className"
        :label-class-name="operateConfig.labelClassName">
        <template slot-scope="scope">
          <template v-for="(operateItem, operateIndex) in operateConfig.btn">
            <el-button
              v-if="operateShow(operateItem, scope.row)"
              :key="operateIndex"
              :show="operateItem.show"
              :size="operateItem.size"
              :type="operateItem.type"
              :plain="operateItem.plain"
              :round="operateItem.round"
              :circle="operateItem.circle"
              :loading="operateItem.loading"
              :disabled="operateItem.disabled"
              :icon="operateItem.icon"
              :autofocus="operateItem.autofocus"
              :nativeType="operateItem.nativeType"
              @click="operateItem.click(scope.row)">

              {{ operateItem.text }}

            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div v-if="page && page.total" class="block foot">
      <el-pagination
        :current-page="page.pageNum"
        :page-sizes="pageSizes"
        :page-size="page.pageSize"
        style="margin-top: 8px;"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
/**
 * <x-table v-model="searchData" :config="configTable" :data="tableData" :page="page" :load="getTableList"/>
 * 1. v-model 可选，一般不需要，搜索表单的数据会作为 onload 的参数获取到
 * 2. configTable: {
		index: false,
		columns: [
			{ label: "名称", search: true, type: "text", name: "name" },		// 需要搜索的字段通过search：true控制
			{ label: "邮件", name: "email" },
			{ label: "时间", name: "time", filter: (value, row, scope) => value + "123"},
			{ label: "手机", name: "phone" },
			{ label: "性别", name: "sex", dic: _this.importDic("sex") },		// 自动根据字典获取中文
		],
		operate: [		// 操作列的按钮
			{ text: '编辑', show: true, click: () => _this.dialogTableVisible = true },
		]
	}
 * 3. data 为表格数组
 * 4. page： {
 * 			total: 20,
 * 			pageSize: 10
 * 		}
 * 5. load 为加载数据的api,第一个参数为搜索表单的数据 getTableList(formData)
 */
import { filterDic } from '../../common/filterDic'
import xForm from '../../xForm/src/xForm.vue'
import mixinComponent from '../../common/xMixin'
export default {
  name: 'XTable',
  components: { xForm },
  mixins: [mixinComponent()],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    page: {
      type: Object,
      default: null
    },
    load: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      pageSizes: [2, 10, 20, 30, 50]
    }
  },
  computed: {
    // 根据表格配置中 search 为true的字段生成搜索框的配置
    formConfig() {
      const _this = this
      const formConfigTemp = {
        inline: true,
        items: [],
        operate: []
      }
      if (this.config.search !== false) formConfigTemp.operate.push({ text: '搜索', icon: 'el-icon-search', click: _this.search })
      if (this.config.reset !== false) formConfigTemp.operate.push({ text: '重置', icon: 'el-icon-refresh-right', click: _this.reset })
      // if(this.config.add !== false) formConfigTemp.operate.push({ text: "新增", icon: 'el-icon-circle-plus', click: _this.add });
      if (this.config.btns) {
        this.config.btns.forEach(btn => {
          formConfigTemp.operate.push({ text: btn.text, icon: btn.icon, click: btn.click, show: btn.show })
        })
      }
      this.config.column.forEach(item => {
        if (item.search) {
          formConfigTemp.items.push(item)
        }
      })
      return formConfigTemp.items.length ? formConfigTemp : false
    },
    computedConfig() {
      const c = {}
      Object.assign(c, this.golbalConfig.table, this.config)
      for(let i = 0; i < this.config.column.length; i++) {
        c.column[i] = Object.assign({}, this.golbalConfig.column, this.config.column[i])
      }
      return c;
    },
    operateConfig() {
      if(!this.config.operate) return null;
      let c = {};
      Object.assign(c, this.golbalConfig.column, this.golbalConfig.xtable.operate.column)
      c.btn = this.config.operate;
      for(let i = 0; i < this.config.operate; i++) {
        c.btn[i] = Object.assign({}, this.golbalConfig.xtable.operate.btn, this.config.operate[i])
      }
      return c;
    },
    // configItem() {
    //   const c = {}
    //   Object.assign(c, this.golbalConfig.column, this.config)
    //   return c;
    // }
  },
  methods: {
    // 重置
    reset() {
      if (this.page) {
        this.page.pageNum = 0
      }
      this.$refs['xForm'].$refs['refForm'].resetFields()
      this.getList()
    },
    // filter表格数据
    filterTableData(configItem, row, scope) {
      if (!row) return
      const str = row[configItem.name]
      if (typeof configItem.filter === 'function') return configItem.filter(str, row, scope)
      if (configItem.dic) return filterDic(configItem.dic, str)
      return str
    },
    // 表格的操作按钮显隐
    operateShow(operateItem, row) {
      if (typeof operateItem.show === 'boolean') {
        return operateItem.show
      } else if (typeof operateItem.show === 'function') {
        return operateItem.show(row)
      } else {
        return this.golbalConfig.table.operate.btn.show;
      }
    },
    columnStyleOrClass(style, row) {
      if (typeof style === 'string') {
        return style
      } else if (typeof style === 'function') {
        return style(row)
      } else {
        return ''
      }
    },
    // 点击搜索
    search() {
      if (this.page) {
        this.page.pageNum = 0
      }
      this.getList()
    },
    // 发送绑定的api
    getList() {
      if (this.page) {
        this.load(this.formData, this.page.pageNum, this.page.pageSize)
      } else {
        this.load(this.formData)
      }
    },
    handleSizeChange(val) { // 每页显示几条
      this.page.pageSize = val
      this.$emit('update:page', this.page)
      this.getList()
    },
    handleCurrentChange(val) { // 当前页显示几条
      this.page.pageNum = val
      this.$emit('update:page', this.page)
      this.getList()
    }
  }
}
</script>

<style scoped></style>
