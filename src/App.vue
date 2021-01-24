<template>
  <div class="app">
    <div class="header sticky-top">
      <h1>Nuk's PoE Aura stats calculator</h1>
      <p><span class="fa fa-info-circle"/> Updated for Path of Exile version 3.13 | Last Update : Jan 4th 2021</p>
    </div>
    

    <div class="d-flex flex-wrap mt-2"> 

      <div class="flex-grow-1">
        
        <Home class="content mb-2 mr-2"/>
        <Ascendancies class="content mb-2 mr-2"/>
        <Tree class="content mb-2 mr-2"/>
        <Gear class="content mb-2 mr-2"/>
        <Auras class="content mb-2 mr-2"/>
        
      </div>

      <div class="">
        <StatOutput class="output-stats sticky-top" :auraData="auraData"/>
      </div>

    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import StatOutput from './components/StatOutput.vue';
import Ascendancies from './views/Ascendancies.vue';
import Tree from './views/Tree.vue';
import Gear from './views/Gear.vue';
import Auras from './views/Auras.vue';


const auraData = require('./models/aurastats.json');

export default {
  name: 'App',
  components: {
    Home,
    Ascendancies,
    Tree,
    Gear,
    Auras,
    // TopNav,
    StatOutput,
  }, 
  data() {
    return {
      auraData,
    }
  },
  methods: {

  }
}
</script>

<style>
  @import './assets/css/styles.css';

</style>
