<template>
    <el-input 
        v-model="formData"
        @change="handleChange"
        :placeholder="config.placeholder"
        :disabled="config.disabled"
        :clearable="computeBoolen(config.clearable, false)"
        :size="config.size"
        :type="config.type ? config.type : 'text'"
        :rows="config.rows"
        :autosize="isObject(config.autosize) ? config.autosize : true"
    />
</template>

<script>
import mixinComponent from '../../common/xMixin'
export default {
    mixins: [mixinComponent()],
    data() {
        return {
            // value: this.value
        };
    },
    methods: {
        handleChange(value) {
            
        }
    },
};
</script>

