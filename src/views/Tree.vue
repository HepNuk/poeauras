<template>
  <div>
    <h1>Tree page</h1>
    <input v-model="test" type="number" min="0" max="40" placeholder="Lvl"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    }
  },

  props: {

  },

  computed: {
    ...mapGetters(['getClusters']),
    test: {
      set(v) { this.$store.commit('CHANGE_CLUSTER', {key: 'SMALL', value: v}); this.$store.dispatch('updateGlobalAuraEffect')},
      get() { return this.getClusters['SMALL'].amount }
    }
  }
}
</script>

<style>

</style>