# Select 选择器

---

## 基本用法

<common-code title="基本用法" description="选择器的选项通过 dic 关键字设置" codePath="select-common">
  <demo-select-common></demo-select-common>
</common-code>

## 树形选择器

<common-code title="树形选择器" description="此功能为本插件自行封装的功能，通过设置 type=tree ，选项变成了树形" codePath="select-tree">
  <demo-select-tree></demo-select-tree>
</common-code>

## Attributes

<common-api title="Attributes" :apiData="[
  { params: '...', describe: '所有element-ui按钮组件的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/button#attributes)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'xType', describe: '表示当前这项表单是什么组件，驼峰写法，与element-ui标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'show', describe: '是否展示', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'type', describe: '是否为树形', type: 'string', optionValue: 'tree', defaultValue: '—' },
]" />
