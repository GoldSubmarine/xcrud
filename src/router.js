import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const Import = file => r => require.ensure([], () => r(require('@/views/' + file + '.vue')));

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
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
