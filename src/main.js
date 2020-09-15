import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import xcrud from '../package/index'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(xcrud)

new Vue({
  render: h => h(App)
}).$mount('#app')
