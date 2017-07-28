import appApi from '../../config/api/app'

const app = {
  state: {
    currentBrand: localStorage.getItem('currentBrand'),
    currentBrandSetting: localStorage.getItem('currentBrandSetting')
  },
  mutations: {
    GET_APP_SETTING: (state, brandId) => {
      appApi.getAppSetting(brandId)
        .then((response) => {
          state.currentBrand = response[0].brand
          state.currentBrandSetting = response[0].brandSetting
          localStorage.setItem('currentBrand', response[0].brand)
          localStorage.setItem('currentBrandSetting', response[1].brandSetting)
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
