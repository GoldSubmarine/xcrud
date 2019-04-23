import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Xcrud from '../package/index';
import Xcrud from '../dist/index';

Vue.config.productionTip = false

Vue.use(Element);
Vue.use(Xcrud);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
