import Vue from 'vue'
import Router from 'vue-router'
import JackpotController from '@/components/JackpotController'
import AccountController from '@/components/AccountController'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JackpotController',
      component: JackpotController
    },
    {
      path: '/account',
      name: 'AccountController',
      component: AccountController
    }
  ]
})
