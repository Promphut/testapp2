import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Supply from '../views/Supply'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/share',
      component: Supply
    }
  ]
})
