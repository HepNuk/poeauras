<template>
  <div class="app">
    <div class="header">
      <h1>Nuk's PoE Aura stats calculator</h1>
      <p>- Under Construction</p>
    </div>
    <div class="content">
        <TopNav />
      <div class="inputs">
        <img alt="Vue logo" src="./assets/logo.png">
        <Home msg="Nuk's Aura Stat Calc"/>
      </div>
      <div class="outputs">

      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
    TopNav,
  }
}
</script>

<style>
@font-face {
    font-family: itemFont;
    src: url(./assets/fonts/Fontin-Bold.ttf);
}

body {
  padding: 10px;
  background-color: rgb(29, 26, 26);
}

.app {
  font-family: itemFont;
  background-color: none;
  padding: none;
}

.content {
  padding: 0px;
  background: red;
}


.header {
  padding: 15px;
  text-align: left;
  background-color: none;
  margin-bottom: -20px;
  margin-top: -40px;
}

.header h1 {
  color: rgb(212, 212, 212);
  font-size: 40px;
  margin-bottom: -15px;
}

.header p {  
    font-size: larger;
    color: white;
}

</style>
