# xForm 组件

---

## 综合示例

<common-code title="综合示例" description="配置 json，生成 form 表单，本示例展示了 xForm 的各种用法：设置初始值、树形选择器、表单校验 等">
  <demo-xform></demo-xform>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="app-container" :v-loading="loading">
        <x-form ref="xForm" v-model="formData" :config="formConfig" />
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          loading: 0,
          formData: {
            status: 'enable'  // 默认数据
          },
          treeData: [{
            id: "1",
            name: "xx公司",
            children: [
              {
                id: "2",
                name: "技术部",
                children: [
                  { id: "4", name: "Java 组" },
                  { id: "5", name: "Web 组" },
                  { id: "6", name: "PHP 组" },
                  { id: "7", name: "Python 组" }
                ]
              },
              { id: "3", name: "售后部" }
            ]
          }]
        }
      },
      computed: {
        formConfig() {
          const _this = this
          return {
            inline: false,
            item: [
              { xType: 'input', name: 'username', label: '登录名', rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }] },
              { xType: 'datePicker', type: 'date', name: 'birthday', label: '生日', rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }] },
              { xType: 'select', type: 'tree', name: 'deptId', label: '部门', tree: { data: _this.treeData, props: { label: 'name' }}, rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] } ] },
              { xType: 'input', name: 'phone', label: '手机号', rules: [ { required: true, pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号', trigger: ['blur', 'change'] }] },
              { xType: 'input', name: 'email', label: '邮箱', rules: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }] },
              { xType: 'select', name: 'sex', label: '性别', dic: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }] },
              { xType: 'select', name: 'sex2', label: '性别示例2', dic: {data: [{id: 1, name: "男男"}], label: 'name', value: 'id'} },
              { xType: 'select', name: 'status', label: '状态', dic: [ { label: '激活', value: 'enable' }, { label: '锁定', value: 'disable' }] },
              { xType: "input", type: 'password', name: "password", label: '密码', },
              { xType: 'input', type: 'textarea', name: 'remark', label: '备注' }
            ],
            operate: [
              { text: '保存', show: true, click: _this.save },
              { text: '取消', show: true, click: () => console.log('cancel') }
            ]
          }
        }
      },
      methods: {
        save() {
          this.loading++;
          this.$refs['xForm'].validate().then(() => {
            console.log(this.formData)
          }).catch(e => console.error(e)).finally(() => this.loading--)
        }
      }
    }
    </script>
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
  { params: 'item', describe: '表单的Item，具体看下表 item', type: 'array(object)', optionValue: '—', defaultValue: '—' },
  { params: 'operate', describe: '表单底部的操作按钮，参见 [按钮文档](/xcrud/guide/button.html)', type: 'array(object)', optionValue: '—', defaultValue: '—' },
]" />

## Item

<common-api title="Item" :apiData="[
  { params: '...', describe: '所有 element-ui 表单组件的属性及方法，例如需要一个输入框，就可以配置 el-input 的所有参数，参见不同表单组件的 element-ui 文档（有些表单进行了增强，参考本文档左侧目录中的详细配置）', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'xType', describe: '表示当前这项表单是什么组件，驼峰写法，与element-ui标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'show', describe: '是否展示', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' }
]" />
