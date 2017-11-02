import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import BusinessAdmin from '@/views/BusinessAdmin'
import Account from '@/views/BusinessAdmin/children/Account'
import Staff from '@/views/BusinessAdmin/children/Staff'

import SalaryClause from '@/views/SalaryClause'
import Administration from '@/views/SalaryClause/children/Administration'
import Feedback from '@/views/SalaryClause/children/Feedback'
import PayOff from '@/views/SalaryClause/children/PayOff'
import Login from '@/views/Login'

Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/salaryClause',
      name: 'SalaryClause',
      component: SalaryClause,
      meta: {
        title: '工资条'
      },
      children: [
        {
          path: 'payoff',
          name: 'PayOff',
          component: PayOff,
          meta: {
            title: '发工资条'
          }
        },
        {
          path: 'administration',
          name: 'Administration',
          component: Administration,
          meta: {
            title: '工资条管理'
          }
        },
        {
          path: 'feedback',
          name: 'Feedback',
          component: Feedback,
          meta: {
            title: '员工反馈'
          }
        }
      ]
    },
    {
      path: '/businessAdmin',
      name: 'BusinessAdmin',
      component: BusinessAdmin,
      meta: {
        title: '企业管理'
      },
      children: [
        {
          path: 'account',
          name: 'Account',
          component: Account,
          meta: {
            title: '企业账户'
          }
        },
        {
          path: 'staff',
          name: 'Staff',
          component: Staff,
          meta: {
            title: '员工管理'
          }
        }
      ]
    }
  ]
})

// newRouter.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('user')) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

export default newRouter
