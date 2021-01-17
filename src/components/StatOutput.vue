/* eslint-disable vue/require-v-for-key */
<template>
    <div class="box">
      <div class="sticky">
        <h1>Aura </h1>
        <p>Aura Stats Output {{this.auraEffect}}% Aura Effect</p>
      </div>
        <Aura 
          :key="aura.title" 
          :aura="aura"
          :auraEffect="auraEffect"
          :auraData="matchingAuraData(aura)"
          v-for="aura in auraList"

        />
    </div>
</template>

<script>
import Aura from "../components/aura/Aura.vue"
const auraData = require('../models/aurastats.json');

export default {
  name: "StatOutput",
  components:{
    Aura,
  },
  props: {
    auraList: Array,
    auraEffect: Number,
  },
  data(){
    return{
      auraData,
      
    }
  },
  methods: {
    matchingAuraData(aura) {
      return auraData[aura.title];
    }
  }
}
</script>

<style scoped>
.outputs .box{
  box-sizing: border-box;
  background-color: black;
  color: #2fb2c9;
  font-family: itemFont;
  overflow-y: auto;
  overflow-x: hidden;
  border-style: solid;
  border-color: chocolate;
  border-radius: 8px;
  padding: 1px;
  padding-left: 15px;
  padding-right: 10px;
  height: 100%;
  width: 100%;
  max-width: 525px;
}

.box p {
  margin-top: 0;
  font-size: 15px;
}

.box h1 {
  margin: 0;
  margin-top: 5px;
  font-size: 28px;
}

.sticky {
  background-position-y: -50px;
  padding-top: 5px;
  padding-bottom: 1px;
  background-color: black;
  position: -webkit-sticky;
  position: sticky;
  margin-top: -15px;
  margin-bottom: 10px;
  top: -1px;

}

</style>