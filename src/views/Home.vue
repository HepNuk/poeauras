<template>
  <div class="content">
    <button @click="changeAuraEffect"> 
      Test in Home
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  props: {
    auraList: Array,
    auraEffect: Number,
  },
  methods: {
    ...mapActions(['changeAuraEffect']),
    auraPlus(){
      this.auraEffect++;
      console.log(this.auraEffect);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  box-sizing: border-box;
  background-color: black;
  color: #2fb2c9;
  border-style: solid;
  border-color: chocolate;
  border-radius: 8px;
  padding-left: 15px;
  padding-right: 10px;

  overflow-y: auto;
  overflow-x: hidden;

  height: 100%;
  width: 100%;
}
</style>
