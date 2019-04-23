<template>
    <el-checkbox-group
        v-model="formData" 
        :disabled="config.disabled" 
        :min="config.min"
        :max="config.max"
        :size="config.size">
        <el-checkbox
            v-for="(item, itemIndex) in config.dic" 
            :disabled="item.disabled" 
            :key="itemIndex" 
            :label="item.value">{{ item.label }}</el-checkbox>
    </el-checkbox-group>
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

