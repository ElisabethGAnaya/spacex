import Vue from 'vue'
import Router from 'vue-router'

/***************Components***************/
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import AdminPage from '@/pages/AdminPage'
import RocketsPage from '@/pages/RocketsPage'
import DestinationsPage from '@/pages/DestinationsPage'
import MissionsPage from '@/pages/MissionsPage'
import ErrorPage from '@/pages/ErrorPage'


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
  { path: "*", name: "error", component: ErrorPage }
]


Vue.use(Router)

const router = new Router({ routes, mode: "history" })


export default  router

