<template>
  <div class="app">
    <div class="header mb-2">
      <h1>Nuk's PoE Aura stats calculator | WIP</h1>
      <p class="mb-0">
        <span class="fa fa-info-circle" />Updated for Path of Exile version 3.13 | Last Update : Jan 4th 2021
      </p>
    </div>
    <div class="d-flex">
      <div class="flex-grow-1">
        <!-- <Home class="content mb-2 mr-2"/>
        <Ascendancies class="content mb-2 mr-2"/>-->
        <Tree class="content mb-2 mr-2" />
        <Gear class="content mb-2 mr-2" :tree-data="auraData" />
        <Auras class="content mb-2 mr-2" :aura-data="auraData" />
      </div>
      <div class="justify-content-center">
        <StatOutput 
          class="output-stats sticky-top"
          :aura-data="auraData"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
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
    StatOutput,
  },

  data() {
    return {
      auraData,
    };
  },
  mounted() {
    this.$store.dispatch('updateTreeAuraEffect');
  },
  methods: {
    
  }
};
</script>

<style>
  @import './assets/css/styles.css';
  .sticky-top { top: 0.5em; }
</style>
