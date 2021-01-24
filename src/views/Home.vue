<template>
  <div class="home">
    HOME MIGHT NOT BE NEEDED <br />
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
</style>
