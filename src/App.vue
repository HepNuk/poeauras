<template>
  <div class="app">
    <div class="header">
      <h1>Nuk's PoE Aura stats calculator</h1>
      <p>- Under Construction</p>
    </div>

      <TopNav />
    <div class="flex-container">
      <div class="inputs">
        <Home @change-auraeffect="auraEffectUp"/>
        <button @click="auraEffectUp">hi</button>
      </div>
      <div class="outputs">
        <StatOutput />
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Home from './views/Home.vue'
import StatOutput from './components/StatOutput.vue'

export default {
  name: 'App',
  components: {
    Home,
    TopNav,
    StatOutput,
  }, 
  data() {
    return {
    }
  },
  methods: {
    log: function (log) {
      console.log(log);
    },
    auraEffectUp(){
      this.auraEffect++;
    }
  }
}
</script>

<style>
  @import './assets/css/styles.css';
</style>
