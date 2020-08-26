import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: {}
  },
  mutations: {
    set_content(state, content) {
      state.content = content;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    content(state) {
      return state.content
    }
  }
})
