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
    },
    select: {
      multiple: false,
      valueKey: 'value',
      size: 'medium',
      clearable: false,
      collapseTags: false,
      multipleLimit: 0,
      autocomplete: 'off',
      placeholder: '请选择',
      filterable: false,
      allowcreate: false,
      remote: false,
      loading: false,
      loadingText: '加载中',
      noMatchText: '无匹配数据',
      noDataText: '无数据',
      reserveKeyword: false,
      defaultFirstOption: false,
      popperAppendToBody: true,
      automaticDropdown: false
    },
    datePicker: {
      readonly: false,
      editable: true,
      clearable: true,
      size: '',
      placeholder: '请选择日期',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'date',
      format: '',
      align: 'left',
      pickerOptions: {},
      rangeSeparator: '——',
      valueFormat: '',
      unlinkPanels: false,
      prefixIcon: 'el-icon-date',
      clearIcon: 'el-icon-circle-close',
      validateEvent: true
    },
    checkbox: {
      size: 'medium',
      min: null,
      max: null,
      textColor: '#ffffff',
      fill: '#409EFF',
      border: false
    },
    radio: {
      border: false,
      size: 'medium',
      textColor: '#ffffff',
      fill: '#409EFF'
    },
    cascader: {
      size: 'medium',
      placeholder: '请选择',
      clearable: false,
      showAllLevels: true,
      collapseTags: false,
      separator: ' / ',
      debounce: 300
    },
    switch: {
      width: 40,
      activeValue: true,
      inactiveValue: false,
      activeColor: '#409EFF',
      inactiveColor: '#C0CCDA',
      validateEvent: true
    },
    inputNumber: {
      min: '-Infinity',
      max: 'Infinity',
      step: 1,
      stepStrictly: false,
      precision: null,
      size: 'medium',
      controls: true,
      controlsPosition: null,
      placeholder: null
    },
    slider: {
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      showInputControls: true,
      inputSize: 'small',
      showStops: false,
      showTooltip: true,
      range: false,
      vertical: false,
      height: null,
      label: null,
      debounce: 300,
      marks: null
    }
  }
}

export default {
  get: () => golbalConfig,
  set: item => {
    Object.assign(golbalConfig, item)
  }
}
