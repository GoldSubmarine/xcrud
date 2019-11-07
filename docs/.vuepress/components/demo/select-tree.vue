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
            dic: {
              data: _this.treeData,
              label: "name",
              value: "id"
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