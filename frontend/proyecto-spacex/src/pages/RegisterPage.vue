<template>

<div>
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

      <p class="has-text-weight-normal has-text-white is-size-4 mt-3">Create a New Account</p>

      <div class="field  mt-6 mb-6">
        <div class="control has-icons-left">
          <input v-model="user.firstname" class="input has-text-white" type="text" placeholder="Firstname">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field  mt-6 mb-6">
        <div class="control has-icons-left">
          <input v-model="user.lastname" class="input has-text-white" type="text" placeholder="Lastname">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field  mt-6 mb-6">
        <div class="control has-icons-left">
          <input v-model="user.email" class="input has-text-white" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div class="field  mt-6 mb-6">
        <div class="control has-icons-left">
          <input v-model="user.password" class="input has-text-white" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>
          
      <button class="btn button mt-3" @click.prevent="register">Register</button>

    </div>

</div>

</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      user:{
        firstname:"",
        lastname:"",
        email:"",
        password:""
      }
    }
  },
  methods: {
    async register(){
      try {
        await this.$http.post("/users", this.user)
        alert("Congratulations, you account has been created")
        this.$router.push({ name: "LoginPage" })
      } catch(e){
        alert("Ups, something went wrong. Please try again later")
        consol.log(e)
      }
    }
  }
}
</script>