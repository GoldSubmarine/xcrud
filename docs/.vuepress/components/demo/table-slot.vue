<template>
  <div v-loading="loading">
    <x-table
      ref="xTable"
      v-model="searchData"
      :config="configTable"
      :data="tableData"
      :load="getTableList">
        <template #name="scope">
          {{ '用户名：' + scope.row.name }}
        </template>
        <template #phone="scope">
          <el-tag>
            {{ '+86 ' + scope.row.phone }}
          </el-tag>
        </template>
      </x-table>
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
        sortChange: a => _this.$message.success(a.prop + " " + a.order),
        column: [
          {
            label: '名称',
            name: 'name',
            sortable: true,
            slot: true
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
            slot: true,
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
