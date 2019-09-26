const golbalConfig = {
  xform: {
    input: {
      type: 'text',
      valueKey: 'value',
      debounce: 300,
      placement: 'bottom-start',
      triggerOnFocus: true,
      selectWhenUnmatched: false,
      maxlength: 12,
      minlength: 12,
      showWordLimit: false,
      placeholder: 'aaa',
      clearable: false,
      size: 'medium',
      rows: 3,
      autosize: false,
      autocomplete: 'off',
      resize: 'none',
      validateEvent: true,
      hideLoading: false,
      popperAppendToBody: true,
      highlightFirstItem: false
    }
  }
}

export default {
  get: () => golbalConfig,
  set: item => {
    Object.assign(golbalConfig, item)
  }
}
