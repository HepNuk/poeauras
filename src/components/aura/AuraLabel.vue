<template>
  <div class="d-flex aura-label">
    <div class="d-flex top-of-label">
      <img :src="getAuraImgURL()" />
      Anger
    </div>

    <div class="d-flex bottom-of-label">
      <img :src="getGemImgURL()" />
      Info
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return {
      auraTitle: 'anger'
    }
  },

  methods: {
    getAuraImgURL(){
      return require(`../../assets/img/aura/${this.auraTitle}.png`)
    },
    getGemImgURL(){
      return require(`../../assets/img/gem/${this.auraTitle}.png`)
    }
  }
}
</script>

<style>
  .aura-label {
    min-width: 420px;
    background-color: #111;
    border-radius: 5px;
    margin: 3px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .aura-label img{
    border-radius: 5px;
    width: 35px;
    height: 35px;
    float: left;
    margin-right: 5px;
  }

  .aura-label .top-of-label {
    height: 35px;
    align-items: center;
  }

  .aura-label .bottom-of-label {
    min-height: 35px;
    align-items: center;
  }
</style>