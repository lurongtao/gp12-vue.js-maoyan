import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      id: 1,
      nm: '北京'
    },
    position: 0
  },

  mutations: {
    changeCity(state, city) {
      state.city = city
      store.set('city', city)
    },

    changePosition(state, position) {
      state.position = position
    }
  },

  actions: {
    changeCity({commit}, city) {
      commit('changeCity', city)
    },

    changePosition({commit}, position) {
      commit('changePosition', position)
    }
  }
})
