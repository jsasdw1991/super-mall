import Vue from 'vue'
import Router from 'vue-router'

const MainSlider = r => require.ensure([], () => r(require('@/view/layout/mainSlider')), 'customer')
const MainHeader = r => require.ensure([], () => r(require('@/view/layout/mainHeader')), 'customer')
const MainFooter = r => require.ensure([], () => r(require('@/view/layout/mainFooter')), 'customer')
const Home = r => require.ensure([], () => r(require('@/view/customer/home')), 'customer')

const SaleHeader = r => require.ensure([], () => r(require('@/view/layout/saleHeader')), 'sale')
const SaleFooter = r => require.ensure([], () => r(require('@/view/layout/saleFooter')), 'sale')
const SaleDashboard = r => require.ensure([], () => r(require('@/view/saleCenter/dashboard')), 'sale')

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
