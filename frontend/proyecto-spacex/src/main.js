import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


/***************Components***************/
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'


/***************Routes***************/
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/login", name: "LoginPage", component: LoginPage }
]

const router = new VueRouter({ routes, mode: "history" })

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
