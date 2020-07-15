---
home: true
heroImage: /home.svg
actionText: 前往 →
actionLink: /dev/
features:
- title: 无侵入
  details: 在任何 element-ui 前端项目中均可使用，完全无侵入，是对 element-ui 表单和表格的封装
- title: json 配置
  details: 去除繁琐的 html，通过 json 配置表单
- title: 全局样式
  details: 可通过配置修改全局的样式，更好的适配你的项目
footer: MIT Licensed | Copyright (c) 2019-present, charles
---

## Install

```bash
npm install xcrud -S
# or
yarn add xcrud -S
```

## Getting started

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Xcrud from "xcrud";

Vue.use(Element);
Vue.use(Xcrud, {
  // your global theme config
});

new Vue({
  router,
    render: h => h(App)
}).$mount("#app");
```
