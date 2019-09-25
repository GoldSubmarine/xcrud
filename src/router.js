import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Import = file => r => require.ensure([], () => r(require('@/views/' + file + '.vue')))

export default new Router({
  routes: [
    {
      path: '/crud/form',
      name: 'crudForm',
      component: Import('crud/form')
    },
    {
      path: '/crud/list',
      name: 'crudList',
      component: Import('crud/list')
    }
  ]
})
