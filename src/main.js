import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/styles/iconfont.css'
import '@/assets/styles/common.scss'
import '@/assets/styles/app.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var main = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

main
