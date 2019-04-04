// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import axios from 'axios'
import initGlobals from './http/global-main'

import '@/assets/font/iconfont.css'
import '@/assets/style/main.scss'
import '@/assets/style/theme-default.scss'

Vue.config.productionTip = false

initGlobals()
Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
