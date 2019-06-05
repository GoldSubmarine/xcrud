<template>
    <el-select
        v-model="formData" 
        :disabled="config.disabled" 
        :multiple="config.multiple"
        :placeholder="config.placeholder"
        :clearable="config.clearable"
        :collapse-tags="config.collapseTags"
        filterable
        :size="config.size">
        <el-option
            v-for="(item, itemIndex) in getDic" 
            :key="itemIndex" 
            :disabled="item.disabled" 
            :label="item[labelName]"
            :value="item[valueName]"></el-option>
    </el-select>
</template>

<script>
import mixinComponent from '../../common/xMixin'
export default {
    mixins: [mixinComponent()],
    data() {
        return {
            labelName: "label",
            valueName: "value",
        };
    },
    computed: {
        getDic() {
            let dic = this.config.dic;
            if(dic instanceof Array) {
                return dic;
            } else if(dic instanceof Object) {
                if(dic.label) this.labelName = dic.label;
                if(dic.value) this.valueName = dic.value;
                return dic.data;
            }
            return undefined;
        }
    },
};
</script>

