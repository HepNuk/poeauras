<template>
    <div class="box">
      <div class="sticky">
        <h1>Aura </h1>
        <p>Aura Stats Output {{getAuraEffect}}% Aura Effect</p>
        {{log()}}
        {{print()}}
      </div>
        <Aura 
          v-for="(aura, key) in getAuras"
          :aura="aura"
          :auraEffect="getAuraEffect"
          :auraData="matchingAuraData(aura)"
          :auraKey="key" 
          :key="key"  
        />
    </div>
</template>

<script>
import Aura from "../components/aura/Aura.vue";
import { mapGetters } from 'vuex';
const auraData = require('../models/aurastats.json');


export default {
  name: "StatOutput",
  components:{
    Aura,
  },
  props: {
  },
  data(){
    return{
      auraData,
      
    }
  },
  methods: {
    matchingAuraData(aura) {
      return auraData[aura.title];
    },
    log(){
      console.log(this.getClusters);
    },
    print(){
      //return this.getClusters.REPLENISHING.effect()[0]
    }
  },
  computed: mapGetters(['getAuraEffect', 'getAuras', 'getAuraEffect', 'getClusters'])
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