(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{639:function(e,t,n){"use strict";n.r(t);n(131),n(12);var a={data:function(){return{loading:0,formData:{status:"enable",address:[{value:""}]},treeData:[{id:"1",name:"xx公司",children:[{id:"2",name:"技术部",children:[{id:"4",name:"Java 组"},{id:"5",name:"Web 组"},{id:"6",name:"PHP 组"},{id:"7",name:"Python 组"}]},{id:"3",name:"售后部"}]}]}},computed:{formConfig:function(){return{inline:!1,item:[{xType:"input",name:"username",label:"登录名",rules:[{required:!0,message:"请输入",trigger:["blur","change"]}]},{xType:"input",type:"password",name:"password",label:"密码"},{slot:"titleSlot"},{xType:"slot",name:"age",label:"年龄"},{xType:"slot",name:"address",label:"地址"}],operate:[{text:"保存",show:!0,click:this.save},{text:"取消",show:!0,click:function(){return console.log("cancel")}}]}}},methods:{addAddress:function(){this.formData.address.push({value:""})},removeAddress:function(e){this.formData.address.splice(e,1)},save:function(){var e=this;this.loading++,this.$refs.xForm.validate().then((function(){console.log(e.formData)})).catch((function(e){return console.error(e)})).finally((function(){return e.loading--}))}}},r=n(2),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container",attrs:{"v-loading":e.loading}},[n("x-form",{ref:"xForm",attrs:{config:e.formConfig},scopedSlots:e._u([{key:"titleSlot",fn:function(){return[n("p",{staticStyle:{color:"red"}},[e._v("这是插入的一段文字")])]},proxy:!0},{key:"age",fn:function(){return[n("input",{attrs:{type:"text"}})]},proxy:!0},{key:"address",fn:function(){return e._l(e.formData.address,(function(t,a){return n("div",{key:a,staticStyle:{"margin-bottom":"10px"}},[n("el-input",{staticStyle:{width:"300px"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:e.addAddress}}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-minus",circle:""},on:{click:function(t){return e.removeAddress(a)}}})],1)}))},proxy:!0}]),model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);