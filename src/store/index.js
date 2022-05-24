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
    setContacts(state, contact) {
      state.contact = contact
    },
    addContact(state, contact) {
      state.contact.push(JSON.parse(JSON.stringify(contact)))
    },
    updateContact(state, contact) {
      let index = state.contact.findIndex(item => item.id === contact.id)
      state.contact.splice(index, 1, contact)
    }
  },
  actions: {
    addContact({ commit }, contact) {
      commit('addContact', contact)
    },
    setContacts({ commit }, contact) {
      commit('setContacts', contact)
    },
    updateContact({ commit }, contact) {
      commit('updateContact', contact)
    },
    deleteContact(contact) {
      //delete contact from state by id
      //console.log('delete contact')
      this.state.contact.splice(this.state.contact.indexOf(contact), 1)
    }
  },
  modules: {
  }
})
