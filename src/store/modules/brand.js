import brandApi from '../../config/api/brand'

const brand = {
  namespace: true,
  state: {
    appBrand: localStorage.getItem('appBrand')
  },
  getters: {
  },
  mutations: {
    GET_BRAND: (state, brandId) => {
      brandApi.getBrand(brandId).then((response) => {
        state.appBrand = response.brand
        localStorage.setItem('appBrand', response.brand)
      })
    }
  },
  actions: {
    // 获取app的一些基础设置
    getBrand ({commit}, brandId) {
      return new Promise((resolve, reject) => {
        commit('GET_BRAND', brandId)
        resolve()
      })
    }
  }
}

export default brand
