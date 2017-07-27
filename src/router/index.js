import Vue from 'vue'
import Router from 'vue-router'

import MainSlider from '@/view/layout/mainSlider'
import MainHeader from '@/view/layout/mainHeader'
import MainFooter from '@/view/layout/mainFooter'
import SaleHeader from '@/view/layout/saleHeader'
import SaleFooter from '@/view/layout/saleFooter'

import Home from '@/view/customer/home'
import * as SaleDashboard from '@/view/saleCenter/dashboard'

Vue.use(Router)

// 一般用户的路由
const baseRouter = {
  path: '/',
  components: {
    default: Home,
    slider: MainSlider,
    header: MainHeader,
    footer: MainFooter
  }
}

// 导购的路由
const saleRouter = {
  path: '/saleCenter',
  components: {
    default: SaleDashboard,
    header: SaleHeader,
    footer: SaleFooter
  }
}

export default new Router({mode: 'history', routes: [baseRouter, saleRouter]})
