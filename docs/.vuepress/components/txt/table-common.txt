<template>
  <div v-loading="loading">
    <x-table
      v-model="searchData"
      :config="configTable"
      :data="tableData"
      :page="page"
      :load="getTableList" />
  </div>
</template>

<script>
export default {
  data() {
    const _this = this
    return {
      loading: false,
      tableData: [
        { name: '张三', sex: 'male', phone: 13222222222 },
        { name: '李四', sex: 'female', phone: 13222222222 },
        { name: '王二', sex: 'male', phone: 13222222222 },
        { name: '麻子', sex: 'female', phone: 13222222222 }
      ],
      page: {
        pageSizes: [10, 20],
        pageSize: 10,
        pageNum: 1,
        total: 4
      },
      searchData: {},
      configTable: {
        stripe: true,
        labelWidth: 'auto',
        column: [
          {
            type: 'index'
          },
          {
            label: '名称',
            name: 'name',
            search: true,
            xType: 'input'
          },
          {
            label: '名称2',
            name: 'name2',
            show: false,
            search: true,
            xType: 'input'
          },
          {
            label: '性别',
            name: 'sex',
            search: true,
            xType: 'select',
            dic: [
              { label: '全部', value: '' },
              { label: '男', value: 'male' },
              { label: '女', value: 'female' }]
            },
          {
            label: '手机',
            name: 'phone',
            formatter: (row, column, cellValue, index) => '+86 ' + cellValue
          },
        ],
        operate: [
          { text: '编辑', type: 'text', show: true, click: () => console.log('编辑') },
          { text: '详情', type: 'text', show: true, click: () => console.log('详情') },
          { text: '更多1', dropdown: true, type: 'text', show: true, click: () => console.log('更多1') },
          { text: '更多2', dropdown: true, type: 'text', show: true, click: row => console.log(row) },
          { text: '更多3', dropdown: true, type: 'text', show: true, click: () => console.log('更多3') },
        ]
      }
    }
  },
  methods: {
    getTableList() {
      // xhr
    },
  }
}
</script>

<style scoped>

</style>
