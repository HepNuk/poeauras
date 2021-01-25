<template>
  <div class="d-flex flex-wrap aura-labels">

    <AuraLabel
      v-for="(aura , key) in auraData"
      :auraData="aura"
      :aura="getMatchingAura(key)"
      :auraKey="key"
      :key="key"
    />
      
  </div>
</template>

<script>
import AuraLabel from '../components/aura/AuraLabel';
import { mapGetters } from 'vuex';

export default {
  components: {
    AuraLabel,
  },

  props: {
    auraData: Object,
  },
  methods: {
    getMatchingAura(key) {
      return this.getAuras[(key).toUpperCase()]
    }
  },

  computed: mapGetters(['getAuras']),
}
</script>

<style>
  
</style>