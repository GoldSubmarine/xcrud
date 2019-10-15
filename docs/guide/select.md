# Select 选择器

---

## 基本用法

<common-code title="基本用法" description="选择器的选项通过 dic 关键字设置">
  <demo-select-common></demo-select-common>
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
          }
        }
      },
      computed: {
        formConfig() {
          const _this = this
          return {
            inline: false,
            item: [
              {
                xType: 'select',
                name: 'sex',
                label: '性别',
                dic: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
              },
              {
                xType: 'select',
                name: 'status',
                label: '状态',
                dic: {
                  data: [ { key: '激活', value: 'enable' }, { key: '锁定', value: 'disable' }],
                  label: 'key',
                  value: 'value'
                }
              },
            ],
            operate: [
              { text: '保存', show: true, click: _this.save },
              { text: '取消', show: true, click: () => {
                _this.$message.info("cancel")
              } }
            ]
          }
        }
      },
      methods: {
        save() {
          this.loading++;
          this.$refs['xForm'].validate().then(() => {
            this.$message.success("save data: " +JSON.stringify(this.formData, null, 2) )
          }).catch(e => console.error(e)).finally(() => this.loading--)
        }
      }
    }
    </script>
  </highlight-code>
</common-code>

## 树形选择器

<common-code title="树形选择器" description="此功能为本插件自行封装的功能，通过设置 type=tree ，选项变成了树形">
  <demo-select-tree></demo-select-tree>
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
            deptId: '4'  // 默认数据
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
              {
                xType: 'select',
                type: 'tree',
                name: 'deptId',
                label: '部门',
                tree: {
                  data: _this.treeData,
                  props: { label: 'name' }
                },
                rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] } ] 
              }
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
  { params: '...', describe: '所有element-ui按钮组件的属性及方法，参见 [文档](https://element.eleme.cn/#/zh-CN/component/button#attributes)', type: '...', optionValue: '...', defaultValue: '...' },
  { params: 'xType', describe: '表示当前这项表单是什么组件，驼峰写法，与element-ui标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect', type: 'string', optionValue: '—', defaultValue: '—' },
  { params: 'show', describe: '是否展示', type: 'boolean', optionValue: 'true/false', defaultValue: 'true' },
  { params: 'type', describe: '是否为树形', type: 'string', optionValue: 'tree', defaultValue: '—' },
]" />
