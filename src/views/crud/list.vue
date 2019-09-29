<template>
  <div v-loading="loading">
    <x-table v-model="searchData" :config="configTable" :data="tableData" :page="page" :load="getTableList" />
  </div>
</template>

<script>
// import { getList, detail, add, edit, del } from '../../../api/admin/xForm.js'

export default {
  data() {
    const _this = this
    return {
      loading: false,
      dialogTableVisible: false,
      tableData: [
        { name: '21423asfs', sex: 'male' }
      ],
      page: {
        pageSize: 10,
        total: 0
      },
      resetTable: false,
      formData: {},
      searchData: {},
      formConfig: {
        title: '编辑',
        disabled: false,
        inline: false,
        items: [
          { xtype: 'text', label: '姓名', name: 'name', rules: [{ required: true, message: '请输入', trigger: 'change' }, { min: 3, max: 5, message: '3-5', trigger: 'change' }], placeholder: '你好' },
          { xtype: 'select', label: '性别', name: 'sex', dic: [{ label: '男', value: 'man' }, { label: '女', value: 'female' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city1', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city2', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city3', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city4', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city5', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'select', label: '城市', name: 'city6', dic: [{ label: '南京', value: 'nanjin' }, { label: '北京', value: 'beijing' }], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'time', label: '睡觉时间', name: 'sleepTime', rules: [{ required: true, message: '请输入', trigger: 'change' }] },
          { xtype: 'datePicker', type: 'datetimerange', label: '上班时间', name: 'workTime', valueFormat: 'yyyy-MM-dd', rules: [{ required: true, message: '请输入', trigger: 'change' }] }
        ],
        operate: [
          { text: '保存', show: true, click: _this.save },
          { text: '关闭', show: true, click: () => console.log('关闭') }
        ]
      },
      configTable: {
        // index: false,
        column: [
          { label: '名称', search: true, type: 'text', name: 'name' },
          { label: '邮件', name: 'email' },
          { label: '时间', name: 'time', filter: (value, row, scope) => value + '123' },
          { label: '手机', name: 'phone' },
          { label: '性别', name: 'sex', dic: [{ label: '男', value: 'man' }, { label: '女', value: 'female' }] /* select: [{label: "123", value: "456"}], */ }
        ],
        operate: [
          { text: '编辑', show: true, click: () => console.log('编辑') },
          { text: '详情', show: true, click: 'componentDetail' }
        ]
      }
    }
  },
  mounted() {
    this.resetTable = true
  },
  methods: {
    searchSubmit(val) {
      // console.log(123,this.formSearch)
      this.resetTable = true
    },
    getTableList(page, size) {

    },
    save(formData, ref) {
      ref.validate().then(() => {
        console.log('save:', formData)
        this.dialogTableVisible = false
      }).catch(() => console.error('error submit!!'))
    }
    // editClick(row) {
    // 	this.$router.push({ name: 'userDetail', params: { id: row.tenantId } })
    // },
    // detail() {

    // }
  }
}
</script>

<style scoped>

</style>
