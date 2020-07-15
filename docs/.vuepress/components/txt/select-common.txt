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