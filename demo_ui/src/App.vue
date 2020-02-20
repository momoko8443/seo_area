<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ProfileView/>
  </div>
</template>

<script>
import ProfileView from './components/ProfileView.vue'

export default {
  name: 'App',
  components: {
    ProfileView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
