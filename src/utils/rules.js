//输入框必填
export const inputRequired = [
    { required: true, message: '请输入', trigger:  ['blur', 'change'] }
];

//选择框必填
export const selectRequired = [
    { required: true, message: '请选择', trigger:  ['blur', 'change'] }
];

//邮箱校验
export const email = [
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
]

//电话校验
export const phone = [
    { required: true, pattern: /^1[3-9][0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
]
