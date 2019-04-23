<template>
    <el-radio-group 
        v-model="formData" 
        :disabled="config.disabled" 
        :size="config.size">
        <el-radio 
            v-for="(item, itemIndex) in config.dic" 
            :disabled="item.disabled" 
            :key="itemIndex" 
            :label="item.value">{{ item.label }}</el-radio>
    </el-radio-group>
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

