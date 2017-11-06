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

let routerArr = [
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

console.log(routerArr)
function isRouter (name, objArr) {
  let routerObj = false
  for (let item of objArr) {
    if (item.name === name) {
      routerObj = item
    }
  }
  return routerObj
}

function getRouters (rules, routerArr) {
  let routers = []
  for (let item of rules) {
    let router = isRouter(item.name, routerArr)
    if (router) {
      if (item.children) {
        router.children = getRouters(item.children, router.children)
      }
      routers.push(router)
    }
  }
  return routers
}
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
    }
  ]
})

newRouter.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('user')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default newRouter
export {
  routerArr,
  getRouters,
  isRouter
}
