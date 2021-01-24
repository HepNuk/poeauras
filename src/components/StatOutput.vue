<template>
    <div class="box">
      <div class="sticky">
        <h1>Aura </h1>
        <p>Aura Stats Output {{getAuraEffect}}% Aura Effect</p>
        {{log()}}
        {{print()}}
      </div>
        <AuraStat 
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
import AuraStat from "../components/stats/AuraStat.vue";
import { mapGetters } from 'vuex';



export default {
  name: "StatOutput",
  components:{
    AuraStat,
  },
  props: {
    auraData: Object,
  },
  data(){
    return{
      
    }
  },
  methods: {
    matchingAuraData(aura) {
      return this.auraData[aura.title];
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

</style>