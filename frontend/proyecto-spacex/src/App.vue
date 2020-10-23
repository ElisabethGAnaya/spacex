<template>
  <div id="app">
    <MainNav id="app" />

    <router-view class="has-text-white"></router-view>

  </div>
</template>

<script>
import MainNav from  './components/MainNav'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style>
#app {
  background: #000a14;
}
</style>