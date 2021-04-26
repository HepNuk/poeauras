<template>
  <div class="box">
    <div class="sticky">
      <h1>Aura </h1>
      <p>Aura Stats Output {{ getAuraEffect }}% Aura Effect</p>
      {{ print() }}
    </div>
    <AuraStat 
      v-for="(aura, key) in getAuras"
      :key="key" 
      :aura="aura"
      :aura-effect="getAuraEffect"
      :aura-data="auraData[aura.key]"
      :aura-key="key"  
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

  computed: {
    ...mapGetters(['getAuraEffect', 'getAuras', 'getAuraEffect', 'getClusters']),
  },

  methods: {
    matchingAuraData(aura) {
      return this.auraData[aura.key];
    },
    print(){
      //return this.getClusters.REPLENISHING.effect()[0]
    }
  },
}
</script>

<style scoped>

</style>