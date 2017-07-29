import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import brand from './modules/brand'
import user from './modules/user'
import product from './modules/product'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    brand,
    user,
    product
  }
})

export default store
