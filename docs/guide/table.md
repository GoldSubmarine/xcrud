# xTable 组件

---

::: tip
xTable 表格是对 element-ui table 的封装，并且内部引用了 xForm，用于生成搜索框
:::

## 基本用法

<common-code title="基本用法" description="配置 json，生成 table 表格，本示例展示了 xTable 的各种用法：数据字典、过滤器、生成搜索框 等" codePath="table-common">
  <demo-table-common></demo-table-common>
</common-code>

## 多选

<common-code title="多选" description="选择多行数据时使用 Checkbox。" codePath="table-selection">
  <demo-table-selection></demo-table-selection>
</common-code>

## 排序

<common-code title="排序" description="通过设置 column 的属性 sortable=true 可以实现前端排序，也可设置 sortable=custom 实现前端排序" codePath="table-sort">
  <demo-table-sort></demo-table-sort>
</common-code>

## slot 插槽

<common-code title="slot 插槽" description="通过设置 column 的属性 slot=true 可以实现自定义插槽，也可在搜索框和表格之间插入自定义内容" codePath="table-slot">
  <demo-table-slot></demo-table-slot>
</common-code>

## 树形数据

<common-code title="树形数据" description="支持树类型的数据的显示。当 row 中包含 children 字段时，被视为树形数据。渲染树形数据时，必须要指定 row-key" codePath="table-tree">
  <demo-table-tree></demo-table-tree>
</common-code>

## 多级表头

<common-code title="多级表头" description="支持多级表头。" codePath="demo-table-multi-column">
  <demo-table-multi-column></demo-table-multi-column>
</common-code>

## Attributes

<common-api title="Attributes" :apiData="[
  { params: 'v-model', describe: '绑定值', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'config', describe: '表格的配置，具体看下表 config', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'data', describe: '表格的数据', type: 'array', optionValue: '—', defaultValue: '—' },
  { params: 'page', describe: '表格的页码，具体看下表 page', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'load', describe: '获取表格数据的方法函数', type: 'function', optionValue: '—', defaultValue: '—' },
]" />

## Config

<common-api title="Config" :apiData="[
  { params: '...', describe: '所有 el-table 的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/table#table-attributes)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'search', describe: '搜索框及按钮的配置，此配置会覆盖全局的配置，结构参见全局配置 xtable.search', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'searchBtn', describe: '是否显示搜索按钮', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'resetBtn', describe: '是否显示重置按钮', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'btn', describe: '自定义搜索框后的按钮，按钮的配置参见 [按钮文档](/xcrud/guide/button.html)', type: 'array(object)', optionValue: '—', defaultValue: '—' },
  { params: 'column', describe: '表格的列，具体看下表 column', type: 'array(object)', optionValue: '—', defaultValue: '—' },
  { params: 'operate', describe: '表格右侧的操作按钮，参见 [按钮文档](/xcrud/guide/button.html)', type: 'array(object)', optionValue: '—', defaultValue: '—' },
]" />

## Page

<common-api title="Page" :apiData="[
  { params: 'pageNum', describe: '当前页码', type: 'number', optionValue: '—', defaultValue: '1' },
  { params: 'pageSize', describe: '默认每页数量', type: 'number', optionValue: '—', defaultValue: '10' },
  { params: 'pageSizes', describe: '可选的每页数量', type: 'array(number)', optionValue: '—', defaultValue: '[10, 20, 30, 40, 50, 100]' },
  { params: 'total', describe: '总数', type: 'number', optionValue: '—', defaultValue: '—' },
]" />

## Column

<common-api title="Column" :apiData="[
  { params: 'label', describe: '列头部的文字', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'name', describe: '与表格数据对应的 key', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'children', describe: '用于多级表头，可见上述示例', type: 'array', optionValue: '—', defaultValue: '—' },
  { params: 'search', describe: '是否需要搜索框', type: 'boolean', optionValue: 'true/false', defaultValue: 'false' },
  { params: 'show', describe: '是否需要显示column', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'slot', describe: '通过插槽插入，可见上述示例', type: 'boolean', optionValue: 'true/false', defaultValue: 'false' },
  { params: '...', describe: '当 search=true 时，配置搜索框的参数，实际内置的 xForm 表单，具体配置参见[xForm Item 文档](/xcrud/guide/form.html#Item)', type: '...', optionValue: '...', defaultValue: '...' },
]" />

## Table Slot

<common-api title="Table Slot" :apiData="[
  { params: 'middle', describe: '在搜索框和表格之间插入内容，可见上述示例', type: '—', optionValue: '—', defaultValue: '—' },
]" />
