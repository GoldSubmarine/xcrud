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
          {
            xType: 'input',
            name: 'username',
            label: '登录名',
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
                    width: '300px',
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
                rowAdd:(done)=>{
                  this.$message.success('新增回调');
                  done({
                    input:'默认值'
                  });
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
                  },
                ]
              },

            ]
          }
        ],
        // operate: [
        //   { text: '保存', show: true, click: _this.save },
        //   { text: '取消', show: true, click: () => console.log('cancel') }
        // ]
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