<template>
  <el-checkbox-group
    v-model="formData"
    :size="computedConfig.size"
    :min="computedConfig.min"
    :max="computedConfig.max"
    :text-color="computedConfig.textColor"
    :fill="computedConfig.fill"
    @change="data => computeFunction(computedConfig.change, data)"
  >
    <el-checkbox
      v-for="(item, itemIndex) in config.dic"
      :key="itemIndex"
      :label="item.label"
      :true-label="item.trueLabel"
      :false-label="item.falseLabel"
      :disabled="item.disabled"
      :border="computedConfig.border"
      :checked="item.checked"
      :indeterminate="item.indeterminate"
    >{{ item.label }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import mixinComponent from '../../common/xMixin'
export default {
  mixins: [mixinComponent()],
  data() {
    return {
      // value: this.value
    }
  },
  computed: {
    computedConfig() {
      const c = {}
      Object.assign(c, this.golbalConfig.xform.input, this.config)
      return c;
    }
  },
}
</script>

