<template>
  <el-select
    v-model="formData"
    :disabled="config.disabled"
    :multiple="config.multiple"
    :placeholder="config.placeholder"
    :clearable="config.clearable"
    :collapse-tags="config.collapseTags"
    filterable
    :size="config.size"
  >
    <el-option
      v-for="(item, itemIndex) in getDic"
      :key="itemIndex"
      :disabled="item.disabled"
      :label="item[labelName]"
      :value="item[valueName]"
    />
  </el-select>
</template>

<script>
import mixinComponent from '../../common/xMixin'
export default {
  mixins: [mixinComponent()],
  data() {
    const _this = this
    return {
      labelName: _this.config.dic.label ? _this.config.dic.label : 'label',
      valueName: _this.config.dic.label ? _this.config.dic.label : 'value'
    }
  },
  computed: {
    getDic() {
      const dic = this.config.dic
      if (dic instanceof Array) {
        return dic
      }
      return undefined
    }
  }
}
</script>

