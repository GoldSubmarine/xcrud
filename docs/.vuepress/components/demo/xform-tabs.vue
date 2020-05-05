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
        userList: [
          {
            username: '张三',
            birthday: new Date()
          }
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
                column: [
                  {
                    xType: 'input',
                    name: 'username',
                    label: '登录名',
                    tooltip: "表格的提示",
                    style: 'width: 100%',   // 自定义style
                    rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
                  },
                  {
                    xType: 'datePicker',
                    type: 'date',
                    name: 'birthday',
                    label: '生日',
                    rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }]
                  },
                ]
              },
              {
                label: '人员列表2',
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