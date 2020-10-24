import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueParticles from 'vue-particles'
import router from './router'
import store  from './store'



Vue.use(VueParticles)

Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:3000/"

Vue.use(VueAxios, axios)



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
