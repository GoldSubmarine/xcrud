<template>
  <div class="app-container">
    <x-form ref="xForm" v-model="formData" :config="formConfig" />
  </div>
</template>

<script>
// import { getUserDetail, saveUser } from '@/api/user';
// import { getDeptTree } from '@/api/dept';
// import { getRoleList } from '@/api/role';
export default {
  data() {
    return {
      loading: 0,
      formData: {
        status: 'enable'
      },
      formDisabled: false,
      showBtn: true,
      treeData: [{ 'id': '1166274289691312129', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '系统设置', 'value': '', 'pid': null, 'children': [{ 'id': '1166274342820560897', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:00:24', 'name': '权限管理', 'value': 'permission', 'pid': '1166274289691312129', 'children': [{ 'id': '1166274502715817985', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:00:41', 'name': '新增', 'value': 'permission.add', 'pid': '1166274342820560897', 'children': null }, { 'id': '1166274565542297601', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:00:45', 'name': '编辑', 'value': 'permission.edit', 'pid': '1166274342820560897', 'children': null }, { 'id': '1166274619166474242', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:00:49', 'name': '删除', 'value': 'permission.del', 'pid': '1166274342820560897', 'children': null }, { 'id': '1169507224628236289', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:36', 'name': '查询', 'value': 'permission.find', 'pid': '1166274342820560897', 'children': null }] }, { 'id': '1166274761865084929', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:00:59', 'name': '菜单管理', 'value': 'menu', 'pid': '1166274289691312129', 'children': [{ 'id': '1166274811303346178', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '新增', 'value': 'menu.add', 'pid': '1166274761865084929', 'children': null }, { 'id': '1166274920577548289', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '编辑', 'value': 'menu.edit', 'pid': '1166274761865084929', 'children': null }, { 'id': '1166274968761712641', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '删除', 'value': 'menu.del', 'pid': '1166274761865084929', 'children': null }, { 'id': '1169507316957450241', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:36', 'name': '查询', 'value': 'menu.find', 'pid': '1166274761865084929', 'children': null }] }, { 'id': '1169542890862936065', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:06', 'name': '部门管理', 'value': 'dept', 'pid': '1166274289691312129', 'children': [{ 'id': '1169542975571099650', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 07:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:13:10', 'name': '查询', 'value': 'dept.find', 'pid': '1169542890862936065', 'children': null }, { 'id': '1169545442803347458', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '新增', 'value': 'dept.add', 'pid': '1169542890862936065', 'children': null }, { 'id': '1169546311867351042', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '编辑', 'value': 'dept.edit', 'pid': '1169542890862936065', 'children': null }, { 'id': '1169549849653735426', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:28:37', 'name': '删除', 'value': 'dept.del', 'pid': '1169542890862936065', 'children': null }] }, { 'id': '1169875030167265282', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:28:37', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:14', 'name': '角色管理', 'value': 'role', 'pid': '1166274289691312129', 'children': [{ 'id': '1169876415491350529', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:36:03', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:26', 'name': '查询', 'value': 'role.find', 'pid': '1169875030167265282', 'children': null }, { 'id': '1169876903532208129', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:36:04', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:31', 'name': '新增', 'value': 'role.add', 'pid': '1169875030167265282', 'children': null }, { 'id': '1169877188686159873', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:37:12', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:36', 'name': '编辑', 'value': 'role.edit', 'pid': '1169875030167265282', 'children': null }, { 'id': '1169877688869494786', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 07:39:11', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:41', 'name': '删除', 'value': 'role.del', 'pid': '1169875030167265282', 'children': null }] }, { 'id': '1169877853609172993', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:39:50', 'updateBy': 'admin', 'updateTime': '2019-09-06 17:01:48', 'name': '用户管理', 'value': 'user', 'pid': '1166274289691312129', 'children': [{ 'id': '1169877924039925762', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:40:07', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:40:07', 'name': '查询', 'value': 'user.find', 'pid': '1169877853609172993', 'children': null }, { 'id': '1169877976909127681', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:40:20', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:40:20', 'name': '新增', 'value': 'user.add', 'pid': '1169877853609172993', 'children': null }, { 'id': '1169878129711816705', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 07:40:56', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:41:36', 'name': '编辑', 'value': 'user.edit', 'pid': '1169877853609172993', 'children': null }, { 'id': '1169878267599560706', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-06 15:41:29', 'updateBy': 'admin', 'updateTime': '2019-09-06 15:41:29', 'name': '删除', 'value': 'user.del', 'pid': '1169877853609172993', 'children': null }] }, { 'id': '1173859276569501697', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-17 15:20:35', 'updateBy': 'admin', 'updateTime': '2019-09-17 15:20:35', 'name': '字典管理', 'value': 'dictionary', 'pid': '1166274289691312129', 'children': [{ 'id': '1173859497940672513', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-17 15:21:28', 'updateBy': 'admin', 'updateTime': '2019-09-17 15:21:28', 'name': '查询', 'value': 'dictionary.find', 'pid': '1173859276569501697', 'children': null }, { 'id': '1173859574289588225', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-17 15:21:46', 'updateBy': 'admin', 'updateTime': '2019-09-17 15:21:46', 'name': '新增', 'value': 'dictionary.add', 'pid': '1173859276569501697', 'children': null }, { 'id': '1173859654665035777', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-17 15:22:06', 'updateBy': 'admin', 'updateTime': '2019-09-17 15:22:06', 'name': '编辑', 'value': 'dictionary.edit', 'pid': '1173859276569501697', 'children': null }, { 'id': '1173859737196355586', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-17 15:22:25', 'updateBy': 'admin', 'updateTime': '2019-09-17 15:22:25', 'name': '删除', 'value': 'dictionary.del', 'pid': '1173859276569501697', 'children': null }] }, { 'id': '1176312705367699457', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-24 09:49:38', 'updateBy': 'admin', 'updateTime': '2019-09-24 09:49:38', 'name': '测试模块', 'value': 'test', 'pid': '1166274289691312129', 'children': [{ 'id': '1176312705413836802', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-24 09:49:38', 'updateBy': 'admin', 'updateTime': '2019-09-24 09:49:38', 'name': '查询', 'value': 'test.find', 'pid': '1176312705367699457', 'children': null }, { 'id': '1176312705434808322', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-24 09:49:38', 'updateBy': 'admin', 'updateTime': '2019-09-24 09:49:38', 'name': '新增', 'value': 'test.add', 'pid': '1176312705367699457', 'children': null }, { 'id': '1176312705455779841', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-24 09:49:38', 'updateBy': 'admin', 'updateTime': '2019-09-24 09:49:38', 'name': '编辑', 'value': 'test.edit', 'pid': '1176312705367699457', 'children': null }, { 'id': '1176312705480945665', 'remark': null, 'createBy': 'admin', 'createTime': '2019-09-24 09:49:38', 'updateBy': 'admin', 'updateTime': '2019-09-24 09:49:38', 'name': '删除', 'value': 'test.del', 'pid': '1176312705367699457', 'children': null }] }] }]
    }
  },
  computed: {
    formConfig() {
      const _this = this
      return {
        disabled: _this.formDisabled,
        inline: false,
        items: [
          { xType: 'text', name: 'username', label: '登录名', rules: _this.importRules('inputRequired') },
          { xType: 'datePicker', type: 'date', name: 'name', label: '姓名', rules: _this.importRules('inputRequired') },
          { xType: 'tree', name: 'deptId', label: '部门', tree: { data: _this.treeData, props: { label: 'name' }}, rules: _this.importRules('inputRequired') },
          { xType: 'text', name: 'phone', label: '手机号', rules: _this.importRules('inputRequired', 'phone') },
          { xType: 'text', name: 'email', label: '邮箱', rules: _this.importRules('email') },
          { xType: 'select', name: 'sex', label: '性别', dic: _this.importDic('sex'), rules: _this.importRules('selectRequired') },
          { xType: 'select', name: 'sex2', label: '性别2', dic: {data: [{id: 1, name: "男男"}], label: 'name', value: 'id'}, rules: _this.importRules('selectRequired') },
          // { type: "text", name: "avatar", label: '头像', rules: _this.importRules("inputRequired") },
          { xType: 'select', name: 'status', label: '状态', dic: _this.importDic('userStatus'), rules: _this.importRules('selectRequired') },
          { xType: 'text', name: 'address', label: '地址' },
          // { type: "text", name: "password", label: '密码', },
          { xType: 'textarea', name: 'remark', label: '备注' }
        ],
        operate: [
          { text: '保存', show: _this.showBtn, click: _this.saveUser },
          { text: '取消', show: _this.showBtn, click: () => console.log('cancel') }
        ]
      }
    }
  },
  mounted() {
  },
  methods: {
    getUserDetail() {

    },
    getDeptTree() {

    },
    getRoleList() {

    },
    saveUser() {
      this.$refs['xForm'].validate().then(() => {
        console.log(this.formData)
      }).catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>

</style>
