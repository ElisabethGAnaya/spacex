import Vue from 'vue'
import Router from 'vue-router'

/***************Components***************/
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import AdminPage from '@/pages/AdminPage'
import SpacecraftsPage from '@/pages/SpacecraftsPage'
import DestinationsPage from '@/pages/DestinationsPage'
import MissionsPage from '@/pages/MissionsPage'
import BlogPage from '@/pages/BlogPage'
import ErrorPage from '@/pages/ErrorPage'

// AdminPage
import AdminUsers from '@/components/AdminUsers'
import AdminSpacecrafts from '@/components/AdminSpacecrafts'
import AdminDestinations from '@/components/AdminDestinations'
import AdminBlog from '@/components/AdminBlog'


/***************Routes***************/
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  { path: "/admin", name: "AdminPage", component: AdminPage, children: [
    {
      name: 'AdminUsers',
      path: 'users',
      props: true,
      component: AdminUsers
    },
    {
      name: 'AdminSpacecrafts',
      path: 'spacecrafts',
      props: true,
      component: AdminSpacecrafts
    },
    {
      name: 'AdminDestinations',
      path: 'destinations',
      props: true,
      component: AdminDestinations
    },
    {
      name: 'AdminBlog',
      path: 'blog',
      props: true,
      component: AdminBlog
    }
  ] },
  { path: "/spacecrafts", name: "SpacecraftsPage", component: SpacecraftsPage },
  { path: "/destinations", name: "DestionationsPage", component: DestinationsPage },
  { path: "/missions", name: "MissionsPage", component: MissionsPage },
  { path: "/blog", name: "BlogPage", component: BlogPage },
  { path: "*", name: "error", component: ErrorPage }
]


Vue.use(Router)

const router = new Router({ routes, mode: "history" })


export default  router

