<template>
    <el-form 
        v-if="config.items"
        :disabled="config.disabled" 
        :inline="config.inline" 
        :rules="rulesGenerate" 
        :validate-on-rule-change="false"
        ref="refForm" 
        :model="formData" 
        :label-width="config.inline ? '' : '120px'" 
        class="formComponent">
        <template v-for="(configItem, configItemIndex) in config.items">
            <slot v-if="configItem.slot && computeBoolen(configItem.show, true)" :name="configItem.slot"></slot>
            <!-- 动态加载组件 -->
            <el-form-item v-else-if="computeBoolen(configItem.show, true)" :label="configItem.label + '：'" :key="configItemIndex" :prop="configItem.name">
                <component 
                    :is="getComponentType(configItem.type)" 
                    v-model="formData[configItem.name]"  
                    class="w300"
                    :config="configItem">
                </component>
            </el-form-item>
        </template>

        <el-form-item v-if="config.operate">
            <template v-for="(operateItem, operateItemIndex) in config.operate">
                <el-button :key="operateItemIndex" type="primary" :icon="operateItem.icon" v-if="computeBoolen(operateItem.show, true)" @click="operateItem.click(formData, $refs[config.ref ? config.ref : 'refForm'])">{{ operateItem.text }}</el-button>
            </template>
        </el-form-item>
    </el-form>
</template>


<script>
// 表单的 type: "text", "textarea", "radio", "checkbox", "select", "time", "year","month","date","dates","week","datetime","datetimerange","daterange"
/**
 * 	formConfig: {
        disabled: false,
        inline: false,
        items: [
            { type: "text", label: "姓名", name: "name", rules: [{ required: true, message: '请输入', trigger: 'change' },{ min:3, max:5, message: '3-5', trigger: 'change' }], placeholder: "你好" },
            { type: "select", label: "性别", name: "sex", dic: _this.importDic("sex"), rules: [{ required: true, message: '请输入', trigger: 'change' }] },
            { type: "select", label: "城市", name: "city", dic:[{label: "南京", value: "nanjin"},{label: "北京", value: "beijing"}], rules: [{ required: true, message: '请输入', trigger: 'change' }] },
            { type: "time", label: "睡觉时间", name: "sleepTime", rules: [{ required: true, message: '请输入', trigger: 'change' }] },
            { type: "datetimerange", label: "上班时间", name: "workTime", valueFormat: "yyyy-MM-dd", rules: [{ required: true, message: '请输入', trigger: 'change' }] },
        ],
        operate: [
            { text: '保存', show: true, click: _this.save },
            { text: '关闭', show: true, click: () => _this.dialogTableVisible = false },
        ]
    },
 */
import mixinComponent from '../../common/xMixin'

import xInput from './xInput'
import xRadio from './xRadio'
import xCheckbox from './xCheckbox'
import xSelect from './xSelect'
import xTime from './xTime'
import xDate from './xDate'
import { debuglog } from 'util';

export default {
    name: "xForm",
    mixins: [ mixinComponent() ],
    components: { xInput, xRadio, xCheckbox, xSelect, xTime, xDate },
    props: {
    },
    data() {
        return {
            OriginalFormData: {},
            ruleEnable: true,
        };
    },
    created() {
        this.initFormData();
    },
    methods: {
        //初始化表单数据
        initFormData() {
            // let stringType = ["text", "textarea", "radio", "select"];
            let arrayType = ["checkbox", "datetimerange", "daterange"];
            this.OriginalFormData = JSON.parse(JSON.stringify(this.formData));

            this.config.items.forEach(item => {
                if(item.multiple || arrayType.includes(item.type)) {
                    if(!this.OriginalFormData[item.name]) {
                        this.OriginalFormData[item.name] = [];
                    }
                } else {
                    if(this.OriginalFormData[item.name] === undefined) {
                        this.OriginalFormData[item.name] = '';
                    }
                }
            })
            this.formData = JSON.parse(JSON.stringify(this.OriginalFormData));
        },
        //获取动态组件类型
        getComponentType(type) {
            if(type == "text" || type == "textarea") {
                return "xInput";
            } else if(type == "radio") {
                return "xRadio";
            } else if(type == "checkbox") {
                return "xCheckbox";
            } else if(type == "select") {
                return "xSelect";
            } else if(type == "time") {
                return "xTime";
            } else if(["year","month","date","dates","week","datetime","datetimerange","daterange"].includes(type)) {
                return "xDate";
            }
        },
        //重置表单
        resetFields() {
            this.ruleEnable = false;
            this.formData = JSON.parse(JSON.stringify(this.OriginalFormData));
            this.$refs['refForm'].clearValidate();
            this.$nextTick().then(() => {
                this.ruleEnable = true;
            })
        }
    },
    computed: {
        //检验规则
        rulesGenerate() {
            let rules = {};
            if(!this.ruleEnable) return rules;
            for (let index = 0; index < this.config.items.length; index++) {
                const item = this.config.items[index];
                //不存在跳过当前item
                if(!item.rules) continue;
                if(item.rules instanceof Array) {
                    rules[item.name] = item.rules;
                } else {
                    console.error(`校验规则：${item.rules}配置错误，请检查！`);
                }
            }
            return rules;
        }
    }
};
</script>

<style lang="scss" scoped>
.w300 {
    max-width: 300px;
    min-width: 220px;
    width: 100%;
    border-radius: 6px;
    display: flex;
}
</style>
