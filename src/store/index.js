import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'blue'
  },
  mutations: {
    THEME_CHANGE(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    themeChange({commit}, theme) {
      commit('THEME_CHANGE', theme)
    }
  },
  modules: {
  }
})
