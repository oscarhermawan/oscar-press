import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Maincontent from '@/components/Maincontent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Maincontent',
      component: Maincontent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
