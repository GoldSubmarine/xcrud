<template>
  <div v-loading="loading">
    <el-button @click="toggleSelection(tableData[0], tableData[2])">切换张三和王二选中状态</el-button>
    <el-button @click="clearSelection">取消选择</el-button>
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
      tableData: [
        { name: '张三', sex: 'male', phone: 13222222222 },
        { name: '李四', sex: 'female', phone: 13222222222 },
        { name: '王二', sex: 'male', phone: 13222222222 },
        { name: '麻子', sex: 'female', phone: 13222222222 }
      ],
      searchData: {},
      configTable: {
        stripe: true,
        labelWidth: 'auto',
        resetBtn: false,
        selectionChange: selection => console.log(selection),
        column: [
          {
            type: 'selection'
          },
          {
            label: '名称',
            name: 'name',
          },
          {
            label: '性别',
            name: 'sex',
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
        ]
      }
    }
  },
  methods: {
    getTableList() {
      // xhr
    },
    toggleSelection(...rows) {
      rows.forEach(row => {
        this.$refs.xTable.toggleRowSelection(row);
      });
    },
    clearSelection() {
      this.$refs.xTable.clearSelection();
    }
  }
}
</script>

<style scoped>

</style>
