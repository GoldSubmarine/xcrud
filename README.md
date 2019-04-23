# xvue

A simplified crud component based element-ui & Vue

## Introduction

The source code in the package folder, and you can find some examples under `src/views`

## Install

```bash
npm install xcrud
# or
yarn add xcrud
```

## Getting started

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Xcrud from 'xcrud';

Vue.use(Element);
Vue.use(Xcrud);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
```

## Development

```bash
# develop
yarn dev
```

## Build

```bash
# build for production npm package
yarn build
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, vinsoncho