<template>

<div id="app">

  <vue-particles class="vue-part"
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="65"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="false"
  ></vue-particles>

    <div id="container-form" class="has-text-centered">

      <router-link :to="{ name:'HomePage'}">
        <img class="logo" src="../assets/spacex-logo-svg-vector-1.png" alt="logo spacex">
      </router-link>

      <p class="has-text-weight-normal has-text-white is-size-4 mt-3">Welcome Back!</p>

      <div class="field  mt-6 mb-6">
        <div class="control has-icons-left has-icons-right">
          <input class="input has-text-white" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
           <!-- <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span> -->
        </div>
      </div>

      <div class="field  mt-6 mb-6">
        <div class="control has-icons-left has-icons-right">
          <input class="input has-text-white" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
           <!-- <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span> -->
        </div>
      </div>

      <!-- <div class="field mb-6">
        <div class="control">
          <input class="input has-text-white" type="password" placeholder="Pasword" required/>
        </div>
      </div> -->
          
      <button class="btn button mt-3">Login</button>

    </div>

</div>

</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      
    }
  }
}
</script>