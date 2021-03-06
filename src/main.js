// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import axios from 'axios'
import initGlobals from './http/global-main'
import BaiduMap from 'vue-baidu-map'

import '@/assets/font/iconfont.css'
import '@/assets/style/main.scss'
import '@/assets/style/theme-default.scss'

Vue.config.productionTip = false

initGlobals()
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'x8M67vDzpMzWyFGyra12bME5Z2vexcaV'
})
Vue.prototype.$axios = axios

Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
