<template>

<div id="container-form">
    <form id="form">
    <div class="floating-placeholder">
        <input type="email" placeholder="Email" required/>
        <label></label>
    </div>
    <br/>
    <div class="floating-placeholder">
        <input type="password" placeholder="Pasword" required/>
        <label></label>
    </div>
    <br/>
    <button>Login</button>
  </form>

  <div id='w'>
    <canvas id="space"></canvas>
  <a href="#" id="warp"></a>
 
  </div>
</div>

</template>

<script src="../../public/login.js">
</script>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      
    }
  }
}
</script>