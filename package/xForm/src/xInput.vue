<template>
  <el-input
    :type="computedConfig.type"
    :value-key="computedConfig.valueKey"
    :debounce="computedConfig.debounce"
    :placement="computedConfig.placement"
    :fetch-suggestions="computedConfig.fetchSuggestions"
    :popper-class="computedConfig.popperClass"
    :trigger-on-focus="computedConfig.triggerOnFocus"
    :name="computedConfig.name"
    :select-when-unmatched="computedConfig.selectWhenUnmatched"
    :prefix-icon="computedConfig.prefixIcon"
    :suffix-icon="computedConfig.suffixIcon"
    :readonly="computedConfig.readonly"
    :maxlength="computedConfig.maxlength"
    :max="computedConfig.max"
    :minlength="computedConfig.minlength"
    :min="computedConfig.min"
    :step="computedConfig.step"
    :form="computedConfig.form"
    :showWordLimit="computedConfig.showWordLimit"
    :placeholder="computedConfig.placeholder"
    :clearable="computedConfig.clearable"
    :size="computedConfig.size"
    :rows="computedConfig.rows"
    :autosize="computedConfig.autosize"
    :autocomplete="computedConfig.autocomplete"
    :resize="computedConfig.resize"
    :validate-event="computedConfig.validateEvent"
    :hide-loading="computedConfig.hideLoading"
    :popper-append-to-body="computedConfig.popperAppendToBody"
    :highlight-first-item="computedConfig.highlightFirstItem"
    :disabled="computedConfig.disabled"
    :show-password="computedConfig.showPassword"
    v-model="formData"
    @change="e => computeFunction(computedConfig.change, e)"
    @blur="e => computeFunction(computedConfig.blur, e)"
    @focus="e => computeFunction(computedConfig.focus, e)"
    @clear="e => computeFunction(computedConfig.clear, e)"
  />
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
  methods: {
    handleChange(value) {

    }
  },
  computed: {
    computedConfig() {
      const c = {}
      Object.assign(c, this.golbalConfig.input, this.config)
      return c;
    }
  },
}
</script>

