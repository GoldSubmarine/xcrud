# xForm 组件

---

<common-code title="基本用法" description="配置 json，生成 form 表单">
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
              { xType: 'tree', name: 'deptId', label: '部门', tree: { data: _this.treeData, props: { label: 'name' }}, rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] } ] },
              { xType: 'input', name: 'phone', label: '手机号', rules: [ { required: true, pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号', trigger: ['blur', 'change'] }] },
              { xType: 'input', name: 'email', label: '邮箱', rules: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }] },
              { xType: 'select', name: 'sex', label: '性别', dic: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }] },
              { xType: 'select', name: 'sex2', label: '性别示例2', dic: {data: [{id: 1, name: "男男"}], label: 'name', value: 'id'} },
              { xType: 'select', name: 'status', label: '状态', dic: [ { label: '激活', value: 'enable' }, { label: '锁定', value: 'disable' }] },
              { xType: "input", type: 'password', name: "password", label: '密码', },
              { xType: 'input', type: 'textarea', name: 'remark', label: '备注' }
            ],
            operate: [
              { text: '保存', show: true, click: _this.saveUser },
              { text: '取消', show: true, click: () => console.log('cancel') }
            ]
          }
        }
      },
      methods: {
        saveUser() {
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

<common-api title="xForm Attributes" :apiData="[
  { params: 'v-model', describe: '绑定值', type: 'object', optionValue: '—', defaultValue: '—' },
  { params: 'config', describe: '表单的配置，具体看下表 xForm config', type: 'object', optionValue: '—', defaultValue: '—' },
]" />

<common-api title="xForm config" :apiData="[
  { params: '...', describe: '所有el-form的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/form#form-attributes)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'item', describe: '表单的Item', type: 'array', optionValue: '—', defaultValue: '—' },
  { params: 'operate', describe: '表单底部的操作按钮', type: 'array', optionValue: '—', defaultValue: '—' },
]" />
