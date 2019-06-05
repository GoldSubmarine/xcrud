<template>
    <div class="app-container" v-loading="loading">
        <x-table v-model="searchData" :config="tableConfig" :data="tableData" :page.sync="page" :load="getTableList" />
        <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="540px" @closed="handleDialogClose" append-to-body :close-on-click-modal="false">
            <x-form ref="xForm" :config="formConfig" v-model="formData">
                <template v-slot:dept v-if="formData.type == 'department'">
                    <el-form-item label="部门：" prop="deptIdList">
                        <treeselect v-model="formData.deptIdList" :flat="true" :multiple="true" style="width: 300px;" :options="deptList" placeholder="选择部门" />
                    </el-form-item>
                </template>
            </x-form>
        </el-dialog>
    </div>
</template>

<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    export default {
        components: { Treeselect },
        data() {
            let _this = this;
            return {
                loading: false,
                dialogVisible: false,
                tableData: [],
                page: {
                    pageNum: 1,
                    pageSize: 10,
                    total: 0
                },
                isAddFormal: true,
                searchData: {},
                formData: {
                    userType: 'formal',     //新增的用户类型
                },
                formDisabled: false,
                saveBtnShow: true,
                closeBtnShow: true,
                dialogTitle: '编辑',
                deviceList: [],     //设备列表
                userList: [],      //人员列表
                deptList: [],      //部门列表
                typeShow: false,      //类型是否显示
                userShow: false,      //人员是否显示
                deptShow: false,      //部门是否显示
                startTimeShow: false,      //过期时间是否显示
            }
        },
        mounted() {
            // this.getTableList();
            // this.getDeviceList();
        },
        computed: {
            formConfig() {
                let _this = this;
                return {
                    ref: 'refForm',
                    disabled: _this.formDisabled,
                    inline: false,
                    items: [
                        { type: "select", dic: _this.importDic("devicePermissionType"), label: "类型", name: "type", show: _this.typeShow, rules: _this.importRule("inputRequired") },
                        { type: "select", label: "人员", multiple: true, dic: { data: _this.userList, label: 'username', value: 'id' }, show: _this.userShow, name: "userIdList", rules: _this.importRule("selectRequired") },
                        { slot: "dept", name: "deptIdList", rules: _this.importRule("inputRequired"), multiple: true, show: _this.deptShow, },
                        { type: "select", label: "设备", multiple: true, dic: { data: _this.deviceList, label: 'sn', value: 'id' }, name: "deviceIdList", rules: _this.importRule("selectRequired") },
                        { type: "daterange", label: "过期时间", name: "startTime", show: _this.startTimeShow, rules: _this.importRule("selectRequired") },
                        { type: "text", label: "备注", name: "remark" },
                    ],
                    operate: [
                        { text: '保存', show: _this.saveBtnShow, click: _this.save },
                        { text: '关闭', show: _this.closeBtnShow, click: () => _this.dialogVisible = false },
                    ]
                }
            },
            tableConfig() {
                let _this = this;
                return {
                    // index: false,
                    search: true,
                    reset: true,
                    btns: [
                        { text: "访客授权", click: _this.addVisitorClick, icon: 'el-icon-circle-plus'},
                        { text: "正式人员授权", click: _this.addFormalClick, icon: 'el-icon-circle-plus'},
                    ],
                    columns: [
                        { label: "类型", search: true, type: "select", dic: _this.importDic("all", "devicePermissionType"), name: "type" },
                        { label: "人员/部门", search: true, type: "text", name: "searchKey", filter: (value, row) => {
                            if(row.type == "user") return row.userName;
                            if(row.type == "department") return row.deptName;
                        } },
                        { label: "设备", search: true, type: "select", dic: { data: _this.deviceList, label: 'sn', value: 'id' }, name: "deviceId" },
                        { label: "授权开始时间", type: "text", name: "startTime", filter: value =>  parseTime(value) },
                        { label: "授权结束时间", type: "text", name: "startTime", filter: value =>  parseTime(value) },
                        { label: "创建时间", type: "text", name: "createTime", filter: (value) =>  parseTime(value) },
                        { label: "备注", search: true, type: "text", name: "remark" },
                    ],
                    operate: [
                        // { text: '编辑', show: true, click: _this.editClick },
                        { text: '删除', show: true, click: _this.delClick },
                        // { text: '详情', show: true, click: _this.detailClick }
                    ]
                }
            }
        },
        methods: {
            getUserList() {
                this.loading = true;
                getUserList({ type: this.formData.userType }).then(res => {
                    this.userList = res.content;
                }).catch(e => console.log(e)).finally(() => this.loading = false);
            },
            getDepartmentList() {
                this.loading = true;
                getDepartmentList({ enabled: true }).then(res => {
                    this.deptList = res.content;
                }).catch(e => console.log(e)).finally(() => this.loading = false);
            },
            getDeviceList() {
                this.loading = true;
                getAllDeviceList({type: "cardDoor"}).then(res => {
                    this.deviceList = res.content;
                }).catch(e => console.log(e)).finally(() => this.loading = false);
            },
            getTableList() {
                this.loading = true;
                list(this.searchData, this.page.pageNum, this.page.pageSize).then(res => {
                    this.tableData = res.content;
                    this.page.total = res.totalElements;
                }).catch(e => console.error(e)).finally(() => { this.loading = false });
            },
            save(formData, ref) {
                let form = JSON.parse(JSON.stringify(formData));
                form.endTime = form.startTime[1];
                form.startTime = form.startTime[0];
                ref.validate().then(() => {
                    this.loading = true;
                    save(form).then(res => {
                        this.dialogVisible = false;
                        this.getTableList();
                    }).catch(e => console.error(e)).finally(() => this.loading = false);
                }).catch(e => console.error(e))
            },
            getDetail(id) {
                return detail(id).then(res => {
                    return res;
                }).catch(e => console.error(e))
            },
            addFormalClick() {
                this.typeShow = true;
                this.dialogTitle = "正式员工授权";
                this.formData.userType = 'formal';
                this.startTimeShow = false;
                this.saveBtnShow = true;
                this.closeBtnShow = true;
                this.formDisabled = false;
                this.dialogTitle = '新增';
                this.dialogVisible = true;
            },
            addVisitorClick() {
                this.formData.userType = 'visitor';
                this.dialogTitle = "访客授权";
                this.formData.type = "user";
                this.typeShow = false;
                this.startTimeShow = true;
                this.saveBtnShow = true;
                this.closeBtnShow = true;
                this.formDisabled = false;
                this.dialogTitle = '新增';
                this.dialogVisible = true;
            },
            editClick(row) {
                this.loading = true;
                if(this.formData.startTime) {
                    this.addVisitorClick();
                } else {
                    this.addFormalClick();
                }
                this.getDetail(row.id).then(detail => {
                    this.formData = detail;
                    this.saveBtnShow = true;
                    this.closeBtnShow = true;
                    this.formDisabled = false;
                    this.dialogTitle = '编辑';
                    this.dialogVisible = true;
                }).catch(e => console.error(e)).finally(() => this.loading = false);
            },
            delClick(row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    del(row.id).then(res => {
                        this.$message.success("删除成功");
                        this.getTableList();
                    }).catch(e => console.error(e)).finally(() => this.loading = false);
                }).catch(e => console.log(e));
            },
            detailClick(row) {
                this.getDetail(row.id).then(detail => {
                    this.formData = detail;
                    this.saveBtnShow = false;
                    this.closeBtnShow = false;
                    this.formDisabled = true;
                    this.dialogTitle = '详情';
                    this.dialogVisible = true;
                }).catch(e => console.error(e))
            },
            handleDialogClose() {
                this.$refs['xForm'].resetFields();
            }
        },
        watch: {
            'formData.type': function(newVal, oldVal) {
                this.$nextTick().then(() => {
                    this.formData.userIdList = [];
                    this.formData.deptIdList = [];
                });
                
                if(newVal == "user") {
                    this.getUserList();
                    this.userShow = true;
                    this.deptShow = false;
                } else if(newVal == "department") {
                    this.getDepartmentList();
                    this.userShow = false;
                    this.deptShow = true;
                }
            },
            'formData.userType': function(newVal, oldVal) {
                this.getUserList();
            }
        }
    }
</script>

<style scoped>
    .dialogStyle {
        width: 540px;
    }
</style>