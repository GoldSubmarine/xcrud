<template>
  <div>
    <x-form v-if="formConfig" ref="xForm" v-model="formData" :config="formConfig" @reset="reset" @submit="getList" />
    <el-table
      :data="data"
      style="width: 100%;"
      :highlight-current-row="config.highlightCurrentRow"
      :border="config.border"
      :stripe="config.stripe"
      :row-key="config.rowKey"
      @current-change="(row, oldRow) => computeFunction(config.currentChange, row, oldRow)"
      @row-click="data => computeFunction(config.rowClick, data)"
      @select="data => computeFunction(config.select, data)"
    >
      <el-table-column v-if="config.select" type="selection" width="55" />
      <el-table-column v-if="config.index !== false" type="index" width="50" align="center" label="编号" />
      <template v-for="(configItem, configIndex) in config.columns">
        <el-table-column v-if="computeBoolen(configItem.show, true)" :key="configIndex" :prop="configItem.name" :label="configItem.label" show-overflow-tooltip :align="computeData(configItem.align, 'center')">
          <template slot-scope="scope">
            <span :style="columnStyle(configItem.style, scope.row)">
              {{ filterTableData(configItem, scope.row, scope) }}
            </span>
          </template>
        </el-table-column>
      </template>
      <el-table-column v-if="config.operate" label="操作" align="center">
        <template slot-scope="scope">
          <template v-for="(operateItem, operateIndex) in config.operate">
            <el-button v-if="operateShow(operateItem, scope.row)" :key="operateIndex" type="text" size="medium" @click="operateItem.click(scope.row)">{{ operateItem.text }}</el-button>
            <!-- <el-button type="text" v-if="scope.row.switchState == 'off'" @click="go('edit',scope.row.id)">编辑</el-button>
            <el-button type="text" @click="changeState(scope.row)">{{ scope.row.switchState == 'off' ? '启用' : '停用' }}</el-button> -->
          </template>
        </template>
      </el-table-column>
    </el-table>
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
    disabled: {
      type: Boolean,
      default: false
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
      this.config.columns.forEach(item => {
        if (item.search) {
          formConfigTemp.items.push(item)
        }
      })
      return formConfigTemp.items.length ? formConfigTemp : false
    }
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
      if (typeof operateItem.show === 'undefined') {
        return true
      } else if (typeof operateItem.show === 'boolean') {
        return operateItem.show
      } else if (typeof operateItem.show === 'string') {
        return operateItem.show !== false && operateItem.show !== 'false'
      } else if (typeof operateItem.show === 'function') {
        return operateItem.show(row)
      } else {
        return true
      }
    },
    columnStyle(style, row) {
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
