<template>
    <div>
		<x-form :config="formConfig" v-model="formData" @reset="reset" @submit="getList"/>
        <el-table :data="data" style="width: 100%; margin-top: 2em" stripe border>
            <el-table-column v-if="config.index != false" type="index" width="50" align="center" label="编号"></el-table-column>
            <template v-for="(configItem, configIndex) in config.columns">
                <el-table-column :prop="configItem.name" :label="configItem.label" show-overflow-tooltip align="center" :key="configIndex">
                    <template slot-scope="scope">{{ filterTableData(configItem, scope.row, scope) }}</template>
                </el-table-column>
            </template>
			<el-table-column label="操作" align="center" v-if="config.operate">
				<template slot-scope="scope">
					<template v-for="(operateItem, operateIndex) in config.operate">
						<el-button type="text" size="medium" v-if="operateShow(operateItem, scope.row)" @click="operateItem.click(scope.row)" :key="operateIndex">{{ operateItem.text }}</el-button>
						<!-- <el-button type="text" v-if="scope.row.switchState == 'off'" @click="go('edit',scope.row.id)">编辑</el-button>
						<el-button type="text" @click="changeState(scope.row)">{{ scope.row.switchState == 'off' ? '启用' : '停用' }}</el-button> -->
					</template>
				</template>
			</el-table-column>
        </el-table>
        <div class="block foot" v-if="page.total">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="pageNum"
                           :page-sizes="pageSizes"
                           :page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper" :total="page.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
/**
 * <x-table v-model="searchData" :config="configTable" :data="tableData" :page="page" :load="getTableList"/>
 * 1. v-model 可选，一般不需要，搜索表单的数据会作为 onload 的参数获取到
 * 2. configTable: {
		index: false,
		columns: [
			{ label: "名称", search: true, type: "text", name: "name" },		// 需要搜索的字段通过search：true控制
			{ label: "邮件", name: "email" },
			{ label: "时间", name: "time", filter: (value, row, scope) => value + "123"},
			{ label: "手机", name: "phone" },
			{ label: "性别", name: "sex", dic: _this.importDic("sex") },		// 自动根据字典获取中文
		],
		operate: [		// 操作列的按钮
			{ text: '编辑', show: true, click: () => _this.dialogTableVisible = true },
		]
	}
 * 3. data 为表格数组
 * 4. page： {
 * 			total: 20,
 * 			pageSize: 10
 * 		}
 * 5. load 为加载数据的api,第一个参数为搜索表单的数据 getTableList(formData)
 */
	import xForm from '../../xForm/src/xForm.vue';
	import mixinComponent from '../../common/xMixin'
	export default {
		name: "xTable",
		mixins: [mixinComponent()],
		components: { xForm },
        props: {
			data: Array,
			page: Object,
			disabled: Boolean,
			load: Function,
        },
		data() {
			let _this = this;
			return {
				pageNum: 1,
				pageSize: this.page.pageSize ? this.page.pageSize : 10,
				pageSizes: [10, 20, 30, 50],
			}
		},
		methods: {
			//重置
			reset() {
				this.pageNum = 1;
				this.getList();
			},
			//filter表格数据
			filterTableData(configItem, row, scope) {
				if(!row) return;
				let str = row[configItem.name];
				if(typeof configItem.filter == "function") return configItem.filter(str, row, scope);
				if(configItem.dic)  return filter(str, configItem.dic);
				return str;
			},
			//表格的操作按钮显隐
			operateShow(operateItem, row) {
				if(typeof operateItem.show == 'undefined') {
					return true;
				} else if(typeof operateItem.show == 'boolean') {
					return operateItem.show;
				} else if(typeof operateItem.show == 'string') {
					return operateItem.show != false && operateItem.show != 'false';
				} else if(typeof operateItem.show == 'function') {
					return operateItem.show(row);
				} else {
					return true;
				}
			},
			//发送绑定的api
			getList() {
				this.load(this.formData, this.pageNum, this.pageSize);
			},
			handleSizeChange(val) { // 每页显示几条
				this.pageSize = val;
				this.pageNum = 1;
				this.getList();
			},
			handleCurrentChange(val) { // 当前页显示几条
				this.pageNum = val;
				this.getList();
			},
		},
		computed: {
			//根据表格配置中 search 为true的字段生成搜索框的配置
			formConfig() {
				const _this = this;
				let formConfigTemp = {
					inline: true,
					items: [],
					operate: []
				};
				if(this.config.search !== false) formConfigTemp.operate.push({ text: "搜索", click: _this.getList });
				if(this.config.reset !== false) formConfigTemp.operate.push({ text: "重置", click: _this.reset });
				if(this.config.add !== false) formConfigTemp.operate.push({ text: "新增", click: _this.getList });
				this.config.columns.forEach(item => {
					if(item.search) {
						formConfigTemp.items.push(item);
					}
				})
				return formConfigTemp.items.length ? formConfigTemp : {};
			}
		}
	}
</script>

<style scoped></style>