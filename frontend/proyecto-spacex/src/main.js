import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


/***************Components***************/
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import AdminPage from '@/pages/AdminPage'
import RocketsPage from '@/pages/RocketsPage'
import DestinationsPage from '@/pages/DestinationsPage'
import MissionsPage from '@/pages/MissionsPage'


/***************Routes***************/
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  { path: "/admin", name: "AdminPage", component: AdminPage },
  { path: "/rockets", name: "RocketsPage", component: RocketsPage },
  { path: "/destinations", name: "DestionationsPage", component: DestinationsPage },
  { path: "/missions", name: "MissionsPage", component: MissionsPage },
]

const router = new VueRouter({ routes, mode: "history" })

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
