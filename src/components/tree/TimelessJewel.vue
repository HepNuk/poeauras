<template>
  <div class="label">
    <div class="d-flex cluster-label">
      <label class="d-flex notable-label align-items-center justify-content-between mb-0">
        <div class="d-inline-flex align-items-center">
          <img class="notable-img mr-2" src="../../assets/img/tree/timeless.png">

          <input v-model="timelessJewelEffect" type="number" min="0" max="999">
        </div>
        <div class="d-inline-flex align-items-center mr-2">
          Timeless Jewel
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['timelessJewel']),
    timelessJewelEffect: {
      set(v) { 
        let value = v
        if (!v) value = 0;
        this.$store.commit('UPDATE_TIMELESS', { value: parseInt(value, 10) });
        this.$store.dispatch('updateTreeAuraEffect');
      },
      get() { return this.timelessJewel; },
    }
  },
}
</script>

<style lang="scss" scoped>
.label {
    padding: 5px;

    .cluster-label {

      min-width: 250px;
      background-color: #111;
      border-radius: 5px;
      flex-direction: column;
      flex-wrap: nowrap;
      position: relative;

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
      .notable-img {
        border-radius: 5px;
        width: 35px;
        height: 35px;
        float: left;
      }
      .notable-label .small-label {
        max-height: 35px;
      }
      .notable-label, .small-label {
        min-height: 35px;
        align-items: center;
      }
    }

}
</style>