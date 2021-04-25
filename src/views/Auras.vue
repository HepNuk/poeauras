<template>
  <div class="d-flex flex-wrap aura-labels">

    <AuraLabel
      v-for="(aura , key) in auraData"
      :auraData="aura"
      :auraKey="key"
      :key="key"
    />
      
  </div>
</template>

<script>
import AuraLabel from '../components/aura/AuraLabel';

export default {
  components: {
    AuraLabel,
  },

  props: {
    auraData: Object,
  },

  methods: {
  },
}
</script>

<style>
</style>