<template>
    <div>
        <x-form :config="formConfig" v-model="formData" />
    </div>
</template>

<script>
export default {
    data() {
        let _this = this;
        return {
            loading: false,
            mode: 'add',
            params: _this.$route.params,
            formConfig: {
                disabled: false,
                inline: false,
                items: [
                    { type: "text", label: "姓名", name: "name", rules: [{ required: true, message: '请输入', trigger: 'blur,change' },{ min:3, max:5, message: '3-5', trigger: 'blur,change' }], placeholder: "你好" },
                    { type: "select", label: "性别", name: "sex", dic:[{label: "男", value: "male"},{label: "女", value: "female"},], rules: [{ required: true, message: '请输入', trigger: 'blur,change' }] },
                    { type: "checkbox", label: "城市", name: "city", dic:[{label: "南京", value: "nanjin"},{label: "北京", value: "beijing"}], rules: [{ required: true, message: '请输入', trigger: 'blur,change' }] },
                    { type: "time", label: "睡觉时间", name: "sleepTime", rules: [{ required: true, message: '请输入', trigger: 'blur,change' }] },
                    { type: "datetimerange", label: "上班时间", name: "workTime", valueFormat: "yyyy-MM-dd", rules: [{ required: true, message: '请输入', trigger: 'blur,change' }] },
                    // { type: "select", label: "城市", name: "city", select:[{label: "南京", value: "nanjin"},{label: "北京", value: "beijing"}], rules: [{ required: true, message: '请输入', trigger: 'blur,change' }] },
                ]
            },
            formData: {}
        }
    },
    created() {
        // setTimeout(() => this.formData.name = 66666 ,1000)
        // this.formData.sex = "female";
        // this.formData.city = [];
    },
    methods: {

    },
    watch: {
        formData: {
            handler(val) {
                console.log(val)
            },
            deep: true
        }
    },
}
</script>

<style>

</style>
