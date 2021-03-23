<template>
  <div class="app-container" :v-loading="loading">
    <x-form ref="xForm" v-model="formData" :config="formConfig">
      <template #slotTag="scope">
        <el-tag>{{ scope.row.username }}</el-tag>
      </template>
    </x-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: 0,
      formData: {
        userList: [
          {
            username: '张三',
            birthday: new Date(),
            age: "18",
            weight: '50kg',
          },
          {
            username: '张三',
            birthday: new Date(),
            age: "18",
            weight: '50kg',
          },
          {
            username: '张三',
            birthday: new Date(),
            age: "18",
            weight: '50kg',
          },
          {
            username: '张三',
            birthday: new Date(),
            age: "18",
            weight: '50kg',
          },
        ]
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
            xType: 'input',
            name: 'username',
            label: '登录名',
            tooltip: "登录名的提示",
            rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
          },
          {
            xType: 'datePicker',
            type: 'date',
            name: 'birthday',
            label: '生日',
            rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
          },
          {
            xType: 'tabs',
            tabs: [
              {
                label: '人员列表',
                name: 'userList',
                add:(arr)=>{   // 自定义插入方法
                  arr.splice(arr.length, 0, {
                    username: '张三',
                    birthday: new Date(),
                    age: "18",
                    weight: '50kg',
                  })
                  console.log("add")
                },
                remove:(arr)=>{   // 自定义移除方法
                  console.log("remove")
                },
                addConfig: {  // 覆盖默认配置
                  show: true,
                  text: '新增1',
                },
                operate: {  // 本配置会覆盖全局配置，所以不写也可以，默认采用全局配置
                  show: true,
                  label: '操作',
                  width: '60px',
                  headerAlign: 'center',
                  align: 'center',
                  btn: [
                    {
                      type: 'danger',
                      icon: 'el-icon-close',
                      size: 'mini',
                      circle: true,
                      style: '',
                      className: ''
                    },
                    {
                      type: 'primary',
                      icon: 'el-icon-open',
                      size: 'mini',
                      circle: true,
                      style: '',
                      className: '',
                      show: false
                    }
                  ]
                },
                spanMethod: ({ row, column, rowIndex, columnIndex }) => {
                  if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                      return {
                        rowspan: 2,
                        colspan: 1
                      }
                    } else {
                      return {
                        rowspan: 0,
                        colspan: 0
                      }
                    }
                  }
                },
                column: [
                  {
                    label: '信息',
                    children: [
                      {
                        label: '合并体重',
                        name: 'weight',
                        renderHeader: (h, { column, $index }) => {
                          return h('div',[
                            h('span', column.label),
                            h('el-button', {
                              style: "display: inline-block; margin-left: 10px;",
                              on: {
                                click: () => window.alert("自定义头部，具体见vue的jsx语法")
                              },
                              props: {
                                icon: "el-icon-delete",
                                circle: true,
                                size: 'mini'
                              }
                            }),
                          ])
                        },
                      },
                      {
                        label: '年龄',
                        name: 'age',
                        disabled: true,
                        xType: 'input',
                      },
                      {
                        label: '登录名',
                        name: 'username',
                        xType: 'input',
                        headerAlign: 'left',
                        tooltip: "表格的提示",
                        style: 'width: 100px',
                        rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
                      }
                    ]
                  },
                  {
                    xType: 'datePicker',
                    type: 'date',
                    name: 'birthday',
                    label: '生日',
                    rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
                  },
                  {
                    xType: 'slot',
                    label: '插槽插入（多级表头无法自定义插槽）',
                    slot: true,
                    name: 'slotTag',
                  },
                ]
              },
              {
                label: '人员列表2',
                show: true,
                name: 'userList2',
                add:(arr)=>{   // 自定义插入方法
                  arr.splice(arr.length, 0, {})
                  console.log("add")
                },
                remove: (arr, index) => {
                  arr.splice(index, 1)
                  console.log("remove")
                },
                column: [
                  {
                    xType: 'input',
                    name: 'username',
                    label: '登录名2',
                  },
                  {
                    xType: 'datePicker',
                    type: 'date',
                    name: 'birthday',
                    label: '生日2',
                    rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
                  },
                ]
              },
              {
                type: 'form',
                label: '表单',
                name: 'formTab',
                addConfig: {show: false},
                formConfig: { // 同XForm配置
                  item: [
                    {
                      xType: 'input',
                      label: '身高',
                      name: 'height'
                    },
                    {
                      xType: 'select',
                      label: '性别',
                      name: 'sex',
                      dic: [{label: '男', value: 'male'}, {label: '女', value: 'female'}]
                    }
                  ]
                }
              }
            ]
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