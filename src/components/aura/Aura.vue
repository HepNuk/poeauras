<template>
  <div v-if="aura.level > 0">
    
    <li class="aura_name">~ {{aura.title}} ~ {{auraEffect}}</li>
    <li 
      class="aura_stat" 
      :key="levelStatLine"
      v-for="(levelStatLine, index) in auraData.levelStatLines.stats"
    >
        {{printLevelStatLine(levelStatLine, index)}}
    </li>
    <div v-if="aura.altQuality != 0 && aura.quality > 0 && auraData.qualityStatLines.stats[aura.altQuality]">
      <li 
        class="aura_stat" 
        :key="qualityStatLine"
        v-for="(qualityStatLine, index) in auraData.qualityStatLines.stats[aura.altQuality]">
        {{printQualityStatLine(qualityStatLine, index)}}
      </li>
    </div>
    <li class="aura_stat">~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ </li>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Aura",
  props: {
    auraKey: Object,
    aura: Object,
    auraData: Object,
    auraEffect: Number,
  },
  data(){
    return{
      generosityEffect: [
            [ 0 ],
            [ 0,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
              30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
              40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
              49, 50, 50, 51, 51, 52, 52, 53, 53, 54
            ],
            [ 0,
              41, 43, 45, 47, 49, 51, 53, 55, 57, 59,
              60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
              69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
              69, 69, 69, 69, 69, 69, 69, 69, 69, 69
            ],
        ],
        specificAuraEffect: 100,
    }
  },
  computed: mapGetters(['getAuraEffect', 'getAuras', 'getAuraEffect', 'getClusters']),
  
  methods: {
    printLevelStatLine(statLines, index){

      const statValues = this.auraData.levelStatLines.values[index][this.aura.level];

      for(let i=0; i<statValues.length; i++){
        
        statLines = statLines.replace("{" + i + "}", this.calculateAfterAuraEffect(statValues[i]).toString());
      }
      this.calcAuraEffect();
      return statLines;
    },

    printQualityStatLine(statLines, index){

      const statValues = this.auraData.qualityStatLines.values[index];
      console.log(statValues);

      for(let i=0; i<statValues.length; i++){
        
        statLines = statLines.replace("{" + i + "}", this.calculateAfterAuraEffect(statValues[i]).toString());
      }

      console.log(statLines, index);
      return statLines
    },

    calculateAfterAuraEffect(value){

      let auraEffect = 0;// this.auraEffect + this.specificAuraEffect;
      console.log(this.auraKey);
      switch(this.aura.generosityType){
        case 1:
          auraEffect += this.generosityEffect[1][this.aura.generosityLevel];
          break;
        case 2:
          auraEffect += this.generosityEffect[2][this.aura.generosityLevel];
          break;
        default:
      }
      const auraMultiplier = (auraEffect/100+1)

      return Math.floor(value* auraMultiplier);
    },
    calcAuraEffect(){

      this.getClusters.auraEffect(this.auraKey);
      

      //return auraEffect;
    }
  }
}
</script>

<style scoped>

li {
  list-style-type: none;
  font-size: 18px;
}

.aura_name {
  color: #dc4b4b;
}


.aura_stat {
  color: rbg(136, 136, 255);
}

</style>