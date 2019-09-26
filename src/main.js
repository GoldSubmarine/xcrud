import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Xcrud from '../package/index'
import ImportDic from './utils/importDic'
import ImportRule from './utils/importRule'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Xcrud, { abc: 123 })
Vue.use(ImportDic)
Vue.use(ImportRule)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
