import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: null
  },
  getters: {
    getContactList: state => state.contact
  },
  mutations: {
    setContact(state, contact) {
      state.contact = contact
    }
  },
  actions: {
    setContact({ commit }, contact) {
      commit('setContact', contact)
    }
  },
  modules: {
  }
})
