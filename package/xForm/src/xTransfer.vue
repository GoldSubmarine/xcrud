<template>
  <el-transfer
    v-model="formData"
    :data="computedConfig.data"
    :filterable="computedConfig.filterable"
    :titles="computedConfig.titles"
    :format="computedConfig.format"
    :props="computedConfig.props"
    :filter-placeholder="computedConfig.filterPlaceholder"
    :filter-method="computedConfig.filterMethod"
    :target-order="computedConfig.targetOrder"
    :button-texts="computedConfig.buttonTexts"
    :render-content="computedConfig.renderContent"
    :left-default-checked="computedConfig.leftDefaultChecked"
    :right-default-checked="computedConfig.rightDefaultChecked"


    @change="e => computeFunction(computedConfig.change, e)"
    @blur="e => computeFunction(computedConfig.blur, e)"
    @focus="e => computeFunction(computedConfig.focus, e)"
  />
</template>

<script>
// type: year/month/date/dates/week/datetime/datetimerange/daterange
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
      Object.assign(c, this.golbalConfig.xform.transfer, this.config)
      return c;
    }
  },
}
</script>

