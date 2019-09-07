import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'

Vue.use(Vuex)
import _ from 'lodash'
import http from "utils/http"

export default new Vuex.Store({
  state: {
    city: {
      id: 1,
      nm: '北京'
    },
    position: 0,

    intheaters: {
      data: {},
      page: 0
    },

    comingsoon: {
      data: {},
      page: 0
    }
  },

  mutations: {
    changeCity(state, city) {
      state.city = city
      store.set('city', city)
    },

    changePosition(state, position) {
      state.position = position
    },

    changeIntheaterData(state, result) {
      state.intheaters.data = result
    },

    changeComingsoonData(state, result) {
      state.comingsoon.data = result
    },

    changeMoreData(state, {result, page, from}) {
      if (from === 'intheater') {
        state.intheaters = {
          data: {
            ...state.intheaters.data,
            movieList: [
              ...state.intheaters.data.movieList,
              ...result.coming
            ]
          },
          page
        }
      } else {
        state.comingsoon = {
          data: {
            ...state.comingsoon.data,
            coming: [
              ...state.comingsoon.data.coming,
              ...result.coming
            ]
          },
          page
        }
      }
    },

    changePage(state) {
      state.intheaters.page = 0
      state.comingsoon.page = 0
    }
  },

  actions: {
    changeCity({commit}, city) {
      commit('changeCity', city)
    },

    changePosition({commit}, position) {
      commit('changePosition', position)
    },

    async loadIntheaterData({commit, state}) {
      let result = await http.get({ url: "/ajax/movieOnInfoList?token=&ci=" + state.city.id })
      commit('changeIntheaterData', result)
    },

    async loadComingsoonData({commit, state}, limit) {
      let result = await http.get({ url: "/ajax/comingList?ci=" + state.city.id + "&token=&limit=" + limit})
      commit('changeComingsoonData', result)
    },

    async loadMoreData({commit, state}, {limit, movieIds, page, from}) {
      let result = await http.get({
        url: "/ajax/moreComingList?ci=" + state.city.id + "&token=&limit=" + limit + "&movieIds=" + movieIds
      })

      commit('changeMoreData', {result, page, from})
    },

    changePage({commit}) {
      commit('changePage')
    }
  }
})
