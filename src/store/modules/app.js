const app = {
  namespace: true,
  state: {
  },
  getters: {
    currentBrand: (state, getters, rootState, rootGetters) => {
      return rootState.brand.appBrand
    }
  },
  mutations: {
  },
  actions: {
  }
}

export default app
