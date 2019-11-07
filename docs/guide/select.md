# Select 选择器

---

## 基本用法

<common-code title="基本用法" description="选择器的选项通过 dic 关键字设置，选项的默认 label 字段为 'label' ， value 字段为 'value' ，也可以自定义 label 和 value 字段" codePath="select-common">
  <demo-select-common></demo-select-common>
</common-code>

## 树形选择器

<common-code title="树形选择器" description="此功能为本插件自行封装的功能，通过设置 type=tree ，选项变成了树形" codePath="select-tree">
  <demo-select-tree></demo-select-tree>
</common-code>

## Attributes

<common-api title="Attributes" :apiData="[
  { params: '...', describe: '所有 element-ui select 选择器组件的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/select)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'xType', describe: '表示当前这项表单是什么组件，驼峰写法，与element-ui标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'show', describe: '是否展示', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'style', describe: '输入框的css样式', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'type', describe: '是否为树形', type: 'string', optionValue: 'tree', defaultValue: '—' },
  { params: 'dic', describe: '下拉选择的选项，如果type为tree，则多出两个属性children和defaultExpandAll，用法上面示例', type: 'array/object', optionValue: `{ data: [], label: 'label', value: 'value', children: 'children', defaultExpandAll: true }`, defaultValue: '—' },
]" />
