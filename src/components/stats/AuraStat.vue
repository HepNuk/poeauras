<template>
  <div v-if="aura.level > 0">
    <li class="aura-name">
      ~ {{ aura.title }} ~ {{ localAuraEffect }}
    </li>
    <li 
      v-for="(levelStatLine, index) in auraData.levelStatLines.stats" 
      :key="levelStatLine"
      class="aura-stat"
    >
      {{ printLevelStatLine(levelStatLine, index) }}
    </li>
    <div v-if="aura.altQuality != 0 && aura.quality > 0 && auraData.qualityStatLines.stats[aura.altQuality]">
      <li 
        v-for="(qualityStatLine, index) in auraData.qualityStatLines.stats[aura.altQuality]" 
        :key="qualityStatLine"
        class="aura-stat">
        {{ printQualityStatLine(qualityStatLine, index) }}
      </li>
    </div>
    <li class="aura-stat separetor">
      ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Aura",
  props: {
    auraKey: String,
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
  computed: { 
    ...mapGetters(['getAuraEffect', 'getAuras', 'getAuraEffect', 'getClusters']),

    localAuraEffect() {
      return this.auraEffect + this.aura.localAuraEffect;
    },
  },
  
  methods: {
    printLevelStatLine(statLines, index) {
      const statValues = this.auraData.levelStatLines.values[index][this.aura.level];
      for(let i=0; i<statValues.length; i++){
        statLines = statLines.replace(`{${i}}`, this.calculateAfterAuraEffect(statValues[i]).toString());
      }
      console.log(this.aura)
      return statLines;
    },

    printQualityStatLine(statLines, index) {
      const statValues = this.auraData.qualityStatLines.values[this.aura.altQuality];
      for(let i=0; i<statValues.length; i++){
        statLines = statLines.replace(`{${i}}`, this.calculateAfterAuraEffect(statValues[i]*this.aura.quality).toString());
      }

      return statLines
    },

    calculateAfterAuraEffect(value) {
      let auraEffect = this.getAuraEffect + this.aura.localAuraEffect;

      if (this.aura.generosityType > 0) auraEffect += this.generosityEffect[this.aura.generosityType][this.aura.generosityLevel];
      const auraMultiplier = (auraEffect/100+1)

      return Math.floor(value* auraMultiplier);
    },
  }
}
</script>

<style scoped>

li {
  list-style-type: none;
  font-size: 16px;
}

.aura-name {
  color: #dc4b4b;
}

.aura-stat {
  color:rgb(255, 255, 255);
}

.separetor {
  text-align: justify;
}
</style>