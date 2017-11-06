// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import axios from './api'
// import axios from 'axios'
import vueEhcarts from 'vue-echarts'

Vue.use(vueEhcarts)
Vue.component('chart', vueEhcarts)
let vm = ''
axios.interceptors.request.use(function (config) {
  console.log('请求前')
  return config
}, function (error) {
  console.log('请求前错误')
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data
}, function ({response}) {
  // console.log(response)
  // if (response.status === 403) {
  //   vm.$router.replace('/login')
  // } else {
  //   vm.$message.error(response.data.msg)
  // }
  console.log(response)
  vm.$message.error(response)
  return Promise.reject(response)
})

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$http = axios

/* eslint-disable no-new */
vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
