<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Nuk's Aura Stat Calc"/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
@font-face {
    font-family: itemFont;
    src: url(./assets/fonts/Fontin-Bold.ttf);
}

.app {
  
  font-family: itemFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
