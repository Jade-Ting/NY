// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vant from 'vant' // 全局引入
import store from './store'
import 'vant/lib/index.css'

import lrz from 'lrz' //图片懒加载

Vue.config.productionTip = false

Vue.use(vant)

Vue.prototype.axios = axios
Vue.prototype.lrz = lrz

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
