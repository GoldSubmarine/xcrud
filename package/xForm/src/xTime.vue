<template>
    <el-time-picker
        v-model="formData" 
        :is-range="config.isRange"
        range-separator="——"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :picker-options="config.pickerOptions"
        :arrow-control="config.arrowControl"
        :disabled="config.disabled" 
        :placeholder="config.placeholder"
        :size="config.size">
    </el-time-picker>
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

