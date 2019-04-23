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
            v-for="(item, itemIndex) in config.dic" 
            :key="itemIndex" 
            :disabled="item.disabled" 
            :label="item.label"
            :value="item.value"></el-option>
    </el-select>
</template>

<script>
import mixinComponent from '../../common/xMixin'
export default {
    mixins: [mixinComponent()],
    data() {
        return {
            // value: this.value
        };
    }
};
</script>

