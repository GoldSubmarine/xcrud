# xForm 组件

---

## 综合示例

<common-code title="综合示例" description="配置 json，生成 form 表单，本示例展示了 xForm 的各种用法：设置初始值、树形选择器、表单校验 等" codePath="xform">
  <demo-xform></demo-xform>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/xform.vue
  </highlight-code>
</common-code>

## slot 插入

<common-code title="综合示例" description="在 form 表单之间插入任意信息，满足自定义需求，支持两种不同的插入方式，设置 xType=slot 时，表示保留 form 原有的 itemLabel，插入 label 后的内容；当设置 slot='slotName' 时表示插入一段和 form 完全无关的代码" codePath="xform-slot">
  <demo-xform-slot></demo-xform-slot>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/xform-slot.vue
  </highlight-code>
</common-code>

## 远程搜索

<common-code title="远程搜索" description="在 form 表单之间插入任意信息，满足自定义需求" codePath="xform-remote">
  <demo-xform-remote></demo-xform-remote>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/xform-remote.vue
  </highlight-code>
</common-code>

## 子表单

<common-code title="子表单" description="适用于一对多的场景" codePath="xform-tabs">
  <demo-xform-tabs></demo-xform-tabs>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/xform-tabs.vue
  </highlight-code>
</common-code>

## Attributes

<common-api title="Attributes" :apiData="[
  { params: 'v-model', describe: '绑定值', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'config', describe: '表单的配置，具体看下表 config', type: 'object', optionValue: '—', defaultValue: '—' },
]" />

## Config

<common-api title="Config" :apiData="[
  { params: '...', describe: '所有el-form的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'itemStyle', describe: '输入框的样式', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'item', describe: '表单的Item，具体看下表 item', type: 'array(object)', optionValue: '—', defaultValue: '—' },
  { params: 'operate', describe: '表单底部的操作按钮，参见 [按钮文档](/xcrud/guide/button.html)', type: 'array(object)', optionValue: '—', defaultValue: '—' },
]" />

## Item

<common-api title="Item" :apiData="[
  { params: '...', describe: '所有 element-ui 表单组件的属性及方法，例如需要一个输入框，就可以配置 el-input 的所有参数，参见不同表单组件的 element-ui 文档（有些表单进行了增强，参考本文档左侧目录中的详细配置）', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'xType', describe: '表示当前这项表单是什么组件，驼峰写法，与element-ui标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect，除了element-ui的标签，还可以是slot，用法见上面示例，增强了一对多的写法，参加上述示例', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'show', describe: '是否展示', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'style', describe: '输入框的css样式', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'slot', describe: '插槽，自定义插入一段 html，值为插槽的名称，用法见上面示例', type: 'string', optionValue: '—', defaultValue: '—' },
]" />
