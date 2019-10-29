# xForm 组件

---

## 综合示例

<common-code title="综合示例" description="配置 json，生成 form 表单，本示例展示了 xForm 的各种用法：设置初始值、树形选择器、表单校验 等" codePath="xform">
  <demo-xform></demo-xform>
</common-code>

## Attributes

<common-api title="Attributes" :apiData="[
  { params: 'v-model', describe: '绑定值', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'config', describe: '表单的配置，具体看下表 config', type: 'object', optionValue: '—', defaultValue: '—' },
]" />

## Config

<common-api title="Config" :apiData="[
  { params: '...', describe: '所有el-form的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'item', describe: '表单的Item，具体看下表 item', type: 'array(object)', optionValue: '—', defaultValue: '—' },
  { params: 'operate', describe: '表单底部的操作按钮，参见 [按钮文档](/xcrud/guide/button.html)', type: 'array(object)', optionValue: '—', defaultValue: '—' },
]" />

## Item

<common-api title="Item" :apiData="[
  { params: '...', describe: '所有 element-ui 表单组件的属性及方法，例如需要一个输入框，就可以配置 el-input 的所有参数，参见不同表单组件的 element-ui 文档（有些表单进行了增强，参考本文档左侧目录中的详细配置）', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'xType', describe: '表示当前这项表单是什么组件，驼峰写法，与element-ui标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'show', describe: '是否展示', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'style', describe: '输入框的css样式', type: 'string', optionValue: '—', defaultValue: '—' }
]" />
