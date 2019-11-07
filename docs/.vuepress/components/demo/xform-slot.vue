<template>
  <div class="app-container" :v-loading="loading">
    <x-form ref="xForm" v-model="formData" :config="formConfig">
      <template v-slot:titleSlot>
        <p style="color: red;padding-left: 120px;">这是插入的一段文字</p>
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
          { slot: "titleSlot" },
          { xType: "input", type: 'password', name: "password", label: '密码', },
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