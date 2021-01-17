<template>
  <div class="app">
    <div class="header">
      <h1>Nuk's PoE Aura stats calculator</h1>
      <p>- Under Construction</p>
    </div>

      <TopNav />
    <div class="flex-container">
      <div class="inputs">
        <Home :auraEffect="auraEffect" :auraList="auraList" @change-auraeffect="auraEffectUp"/>
        <button @click="auraEffectUp">hi</button>
      </div>
      <div class="outputs">
        <StatOutput :auraEffect="auraEffect" :auraList="auraList" />

      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Home from './views/Home.vue'
import StatOutput from './components/StatOutput.vue'
import auraList from './models/auraList.js'

export default {
  name: 'App',
  components: {
    Home,
    TopNav,
    StatOutput,
  }, 
  data() {
    return {
      auraList,
      auraEffect: 0,
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
