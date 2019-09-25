<template>
  <el-date-picker
    v-model="formData"
    :type="config.type"
    range-separator="——"
    :unlink-panels="config.unlinkPanels"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    :format="config.format"
    :value-format="config.valueFormat"
    :default-time="config.defaultTime"
    :picker-options="config.pickerOptions"
    :disabled="config.disabled"
    :placeholder="config.placeholder"
    :size="config.size"
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
  }
}
</script>

