export default function() {
  return {
    model: {
      prop: 'propData',
      event: 'input'
    },
    props: {
      config: {
        type: Object,
        default: {},
        required: true
      },
      propData: {
        default: undefined
      }
    },
    data() {
      return {
        formData: this.propData
      }
    },
    methods: {
      /**
       * 设置尺寸 size
       */
      // getSize(value, defaultValue) {
      //     if(this.isEmpty(value)) {
      //         if(defaultValue) {
      //             return defaultValue;
      //         } else {
      //             return "medium";
      //         }
      //     }
      //     return value;
      // },
      /**
       * 计算出布尔值，并且可以配置默认值
       */
      computeBoolen(value, defaultValue) {
        if (this.isBoolen(value)) return value
        if (this.isEmpty(value)) {
          if (defaultValue) {
            return defaultValue
          } else {
            return false
          }
        }
        return true
      },
      /**
       * 如果给属性配置默认值
       */
      computeData(value, defaultValue) {
        if (value) {
          return value
        }
        return defaultValue
      },
      /**
       * 计算出布尔值，并且可以配置默认值
       */
      computeFunction(fun, ...data) {
        if (fun) {
          fun(...data)
        } else {
          return false
        }
      },
      /**
       * 判断是否是 disabled
       */
      // isDisabled(value) {
      //     if(this.isBoolen(value)) return value;
      //     if(this.isEmpty(value)) return false;
      //     if(value == "disabled") return true;
      //     return false;
      // },
      /**
       * 判断是否是 空
       */

      isEmpty(value) {
        if (
          value === 'null' ||
          value == null ||
          value === 'undefined' ||
          value === undefined ||
          value === ''
        ) {
          return true
        } else {
          return false
        }
      },
      /**
       * 判断是否是 boolean
       */
      isBoolen(value) {
        return typeof value === 'boolean'
      },
      /**
       * 判断是否是 对象
       */
      isObject(value) {
        return typeof value === 'object'
      }
    },
    watch: {
      formData: {
        handler(val) {
          this.$emit('input', val)
          this.$emit('change', val)
        },
        deep: true
      },
      propData: {
        handler(val) {
          this.formData = val
        },
        deep: true
      }
    }
  }
}
