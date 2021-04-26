<template>
  <div class="d-flex flex-wrap aura-labels">
    <AuraLabel
      v-for="(aura , key) in auraData"
      :key="key"
      :aura-data="aura"
      :aura-key="key"
    />
  </div>
</template>

<script>
import AuraLabel from '../components/aura/AuraLabel.vue';

export default {
  components: {
    AuraLabel,
  },

  props: {
    auraData: {
      type: Object,
      require: true,
      default: null,
    }
  },

  methods: {
  },
}
</script>

<style>
</style>