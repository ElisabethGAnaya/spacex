<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- <a class="navbar-item" href="/"> -->
        <router-link class="navbar-item" :to="{ name:'HomePage'}">
          <img src="../assets/spacex-logo-svg-vector.svg" alt="logo spacex" height="28">
        </router-link>
        <!-- </a> -->
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu has-background-darkblue">
        <div class="navbar-start">
          <router-link class="navbar-item  has-text-white" :to="{ name:'HomePage'}">
          Home
          </router-link>
          
          <div v-if="isAuth" class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link  has-text-white" :to="{ name:'SpacecraftsPage'}">
              Spacecrafts
            </router-link>
            <div class="navbar-dropdown is-boxed has-background-dark">
              <a class="navbar-item  has-text-white" href="#">
                Falcon 9
              </a>
              <a class="navbar-item  has-text-white" href="#">
                Falcon Heavy
              </a>
              <a class="navbar-item  has-text-white" href="#">
                Dragon
              </a>
              <a class="navbar-item  has-text-white" href="#">
                Starship
              </a>
            </div>
          </div>

          <div v-if="isAuth" class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link  has-text-white" :to="{ name:'DestionationsPage'}">
              Destinations
            </router-link>
            <div class="navbar-dropdown is-boxed has-background-dark">
              <a class="navbar-item  has-text-white" href="#">
                Moon
              </a>
              <a class="navbar-item  has-text-white" href="#">
                Mars
              </a>
            </div>
          </div>

          <router-link class="navbar-item  has-text-white" :to="{ name:'MissionsPage'}">
            Missions
          </router-link>
          
          <router-link class="navbar-item  has-text-white" :to="{ name:'BlogPage'}">
            Blog
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            
            <div v-if="isAuth" class="navbar-item has-dropdown is-hoverable">
              <router-link class="navbar-link  has-text-white" :to="{ name:'ProfilePage'}">
                <i class="fas fa-user-circle mr-2"></i>
                Profile
              </router-link>
              <div class="navbar-dropdown is-boxed has-background-dark">
                <a class="navbar-item  has-text-white" @click.prevent="logout">
                  Logout
                </a>
              </div>
            </div>

            <div v-if="isAdmin" class="buttons">
              <a class="button" href="#">
                <span>
                  <router-link :to="{ name:'AdminPage'}">ADMIN</router-link>
                </span>
              </a>
            </div>

            <div v-if="!isAuth" class="buttons">
              <a class="button" href="#">
                <span>
                  <router-link :to="{ name:'LoginPage'}">Login</router-link>
                </span>
              </a>
              <a class="button is-link" href="#">
                <span>
                  <router-link class="has-text-white" :to="{ name:'RegisterPage'}">Sign up</router-link>
                </span>
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </nav>
</template>


<script>
import $ from "jquery"

export default {
  name: "MainNav",
  mounted() {
    $(document).ready(function() {
      let navbar = document.querySelector(".navbar-burger");
      navbar.addEventListener("click", function() {
        let target = navbar.dataset.target;
        let $target = document.getElementById(target);
        navbar.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  },
 
  computed: {
    isAuth(){
      return this.$store.state.isAuth
    },
    isAdmin(){
      return this.$store.state.profile === 'admin'
    }
  },
  created(){
    const token = window.localStorage.getItem("token")
    if(token){
      this.$store.commit("login", token)
    }
  },
  methods: {
    logout(){
      window.localStorage.removeItem("token")
      this.$store.commit("logout")
    }
  }
}

</script>