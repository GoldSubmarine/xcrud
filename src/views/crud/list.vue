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
        { name: '21423asfs', sex: 'male' },
        { name: '21423asfs', sex: 'male' },
        { name: '21423asfs', sex: 'male' }
      ],
      page: {
        pageSize: 10,
        total: 0
      },
      resetTable: false,
      formData: {},
      searchData: {},
      configTable: {
        // index: false,
        selectionChange: (a) => console.log(a),
        column: [
          { type: 'selection' },
          { label: '名称', search: true, xType: 'input', name: 'name' },
          { label: '邮件', name: 'email' },
          { label: '时间', name: 'time', filter: (value, row, scope) => '123' },
          { label: '手机', name: 'phone' },
          { label: '性别', name: 'sex', dic: [{ label: '男', value: 'man' }, { label: '女', value: 'female' }] /* select: [{label: "123", value: "456"}], */ }
        ],
        operate: [
          { text: '编辑', show: true, click: () => console.log('编辑') },
          { text: '详情', show: true, click: () => console.log('详情') }
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
