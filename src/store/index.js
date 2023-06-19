import { createStore } from 'vuex'

export default createStore({
  state: {
    pageStatus: 'skincare',
  },
  getters: {
    getPageStatus(state) {
      return state.pageStatus;
    }
  },
  mutations: {
    setPageStatus: (state, status) => state.pageStatus = status,
  },
  actions: {
    getPageStatus: (context, status) => context.commit('setPageStatus', status),
  },
  modules: {
  }
})
