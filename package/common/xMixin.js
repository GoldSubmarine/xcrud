export default function () {
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
        created() {
            this.initFormData();
        },
        methods: {
            /**
             * 初始化 formData
             */
            initFormData() {
                if(this.formData) return;
                let stringType = ["text", "textarea", "radio"];
                let arrayType = ["checkbox"];
                if(stringType.includes(this.config.type)) {
                    this.formData = "";
                } else if(arrayType.includes(this.config.type)) {
                    this.formData = [];
                }
            },
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
                if(this.isBoolen(value)) return value;
                if(this.isEmpty(value)) {
                    if(defaultValue) {
                        return defaultValue;
                    } else {
                        return false;
                    }
                }
                return true;
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
                if(value === 'null' || value == null || value === 'undefined' || value === undefined || value === '') {
                    return true;
                } else {
                    return false;
                }
            },
            /**
             * 判断是否是 boolean
             */
            isBoolen(value) {
                return typeof value == "boolean" ? true : false;
            },
            /**
             * 判断是否是 对象
             */
            isObject(value) {
                return typeof value == "object" ? true : false;
            },
        },
        watch: {
            formData: {
                handler(val) {
                    this.$emit('input', val);
                    this.$emit('change', val);
                },
                deep: true
            },
            propData: {
                handler(val) {
                    this.formData = val;
                },
                deep: true
            }
        },
    };
}