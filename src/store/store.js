import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    email: '',
    identity: '',
    isLogin: false
  },
  getters: {
    getEmail (state) {
      return state.email
    },
    getIdentity (state) {
      return state.identity
    },
    isLogin (state) {
        return state.isLogin
    }
  },
  mutations: {
    setEmail (state, data) {
      state.email = data
    },
    setIdentity (state, data) {
      state.identity = data
    },
    setIsLogin (state, data) {
      state.isLogin = data
    }
  }
})
export default store