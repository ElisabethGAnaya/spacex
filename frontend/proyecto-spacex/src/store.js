import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuth: false,
    token:"",
    profile:""
  },
  mutations: {
    login(state,token){
      state.isAuth = true
      state.token = token
      const data = jwtDecode(token)
      state.profile = data.profile
      console.log(state.isAuth,state.token,state.profile)
    },
    logout(state){
      state.isAuth = false
      state.token = ""
      state.profile = ""
    }
  }
})


export default store