<template>
  <div class="label">
    <div class="d-flex aura-label">
      <div class="d-flex top-of-label justify-content-between">

        <div class="d-inline-flex align-items-center">
          <img class="mr-2" :src="getAuraImgURL()" />
          {{ this.auraData.title }}
        </div>

        <div class="d-inline-flex align-items-center mr-0">
          <img src="@/assets/img/gem/generosity.png" />:
          <select v-model="aura.generosityType">
            <option :value="0">None</option>
            <option :value="1">Generosity</option>
            <option :value="2">Awakened</option>2
          </select>
          <input v-model="aura.generosityLevel" type="number" min="0" max="40" placeholder="Lvl"/>
        </div>

      </div>
      <div class="d-flex bottom-of-label justify-content-between">
        <div class="d-inline-flex align-items-center">
          <img :src="getGemImgURL()" />
        </div>

        <div class="d-inline-flex align-items-center">

          <span class="details">Lvl:</span>
          <input v-model="aura.level" type="number" min="0" max="40" placeholder="Lvl"/>

          <span class="details">Qual:</span>
          <input v-model="aura.quality" type="number" min="0" max="120" placeholder="Qlty"/>

          <span class="details">Alt:</span>
          <select v-model="aura.altQuality">
            <option value="0">None</option>
            <option value="1">Anom</option>
            <option value="2">Diverg</option>
            <option v-if="hasPhantasmal()" value="3">Phantasm</option>
          </select>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return {
      genoType: 0,
    }
  },

  props: {
    auraData: Object,
    auraKet: String,
    aura: Object,
  },

  methods: {
    getAuraImgURL(){
      const imgTitle = (this.auraData.title).toLowerCase().replace(' of', '').replace(' ', '_');
      return require(`../../assets/img/aura/${imgTitle}.png`)
    },
    getGemImgURL(){
      const imgTitle = (this.auraData.title).toLowerCase().replace(' of', '').replace(' ', '_');
      return require(`../../assets/img/gem/${imgTitle}.png`)
    },
    hasPhantasmal(){
      console.log(this.aura);
      return (this.auraData.qualityStatLines.stats.length > 3);
    }
  },

  mounted(){
    console.log('Hi', this.aura, this.auraData)
  },
}
</script>

<style lang="scss" scoped>
  
  
  .label {
    padding: 5px;

    .aura-label {

      min-width: 400px;
      background-color: #111;
      border-radius: 5px;
      flex-direction: column;
      flex-wrap: nowrap;

      img{
        border-radius: 5px;
        width: 35px;
        height: 35px;
        float: left;
      }

      .top-of-label, .bottom-of-label {
        min-height: 35px;
        align-items: center;
      }
    }

    select{
        border: 1px solid #ccc;
        background: #222;
        font-size: 14px;
        color: #fff;
        line-height: 25px;
        padding: 2px;
        width: 95px;
        margin-right: 3px;
        height: 27px;
    }
    input[type=number]{
        border: 1px solid #ccc;
        background: #222;
        font-size: 14px;
        color: #fff;
        line-height: 25px;
        padding: 0 2px;
        width: 50px;
        margin-right: 3px;
    }
    .details {
      margin-right: 1px;
      margin-left: 5px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1765px) {
    .label {
      flex: 0 0 33.333332%;
    }
  }

  @media screen and (min-width: 1355px) and (max-width: 1764px) {
    .label {
      flex: 0 0 50%;
    }
  }

  @media screen and (max-width: 1354px) {
    .label {
      flex: 0 0 100%;
    }
  }
</style>