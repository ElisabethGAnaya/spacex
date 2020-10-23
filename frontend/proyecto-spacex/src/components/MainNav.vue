<template>

  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" href="/"> -->
      <router-link class="navbar-item" :to="{ name:'HomePage'}">
        <img src="../assets/spacex-logo-svg-vector.svg" alt="Bulma: a modern CSS framework based on Flexbox" height="28">
      </router-link>
      <!-- </a> -->
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item  has-text-white" :to="{ name:'HomePage'}">
          Home
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link  has-text-white" :to="{ name:'RocketsPage'}">
            Rockets
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
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link  has-text-white" :to="{ name:'DestionationsPage'}">
            Destinations
          </router-link>
          <div class="navbar-dropdown is-boxed has-background-dark">
            <a class="navbar-item  has-text-white" href="#">
              Moon
            </a>
            <a class="navbar-item  has-text-white" href="#">
              Mar
            </a>
          </div>
        </div>
        <router-link class="navbar-item  has-text-white" :to="{ name:'MissionsPage'}">
          Mission
        </router-link>
        <router-link class="navbar-item  has-text-white" :to="{ name:'/'}">
          Blog
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button" href="#">
                <span>
                  <router-link :to="{ name:'LoginPage'}">Login</router-link>
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-link" href="#">
                <!-- <span class="icon">
                  <i class="fas fa-download"></i>
                </span> -->
                <span>
                  <router-link class="has-text-white" :to="{ name:'RegisterPage'}">Sign up</router-link>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>


<script>

export default {
  name: "MainNav",
  data() {
    return {
    }
  }
}

</script>