<template>
  <div v-loading="loading">
    <x-table
      ref="xTable"
      v-model="searchData"
      :config="configTable"
      :data="tableData"
      :load="getTableList" />
  </div>
</template>

<script>
export default {
  data() {
    const _this = this
    return {
      loading: false,
      tableData: [{
        id: "1",
        name: "xx公司",
        username: '张三',
        phone: 13222222222,
        children: [
          {
            id: "2",
            name: "技术部",
            username: '李四',
            phone: 13222222222,
            children: [
              { id: "4", name: "Java 组", username: '王二', phone: 13222222222, },
              { id: "5", name: "Web 组", username: '麻子', phone: 13222222222, },
              { id: "6", name: "PHP 组", username: '张三', phone: 13222222222, },
              { id: "7", name: "Python 组", username: '张三', phone: 13222222222, }
            ]
          },
          { id: "3", name: "售后部", username: '张三', phone: 13222222222, }
        ]
      }],
      searchData: {},
      configTable: {
        stripe: true,
        labelWidth: 'auto',
        resetBtn: false,
        rowKey: "id",
        defaultExpandAll: true,
        column: [
          {
            label: '部门名称',
            name: 'name',
            align: 'left',
          },
          {
            label: '负责人',
            name: 'username'
          },
          {
            label: '电话',
            name: 'phone',
            formatter: (row, column, cellValue, index) => '+86 ' + cellValue
          },
        ]
      }
    }
  },
  methods: {
    getTableList() {
      // xhr
    }
  }
}
</script>

<style scoped>

</style>
