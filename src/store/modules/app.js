import brandApi from '../../config/api/brand'
// import Query from '../../config/query'

const app = {
  state: {
    currentBrand: '',
    currentBrandSetting: ''
  },
  mutations: {
    GET_APP_SETTING: (state, brandId) => {
      Promise.all([brandApi.getBrand(brandId), brandApi.getBrandSetting(brandId)])
        .then(([brand, brandSetting]) => {
          console.log(brand, brandSetting)
        })
    }
  },
  actions: {
    // 获取app的一些基础设置
    getAppSetting ({commit}, brandId) {
      return new Promise((resolve, reject) => {
        commit('GET_APP_SETTING', brandId)
        resolve()
      })
    }
  },
  getters: {}
}

export default app
