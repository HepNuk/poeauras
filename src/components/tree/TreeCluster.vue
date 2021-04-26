<template>
  <div class="label">
    <div class="d-flex cluster-label">
      <label class="d-flex notable-label align-items-center justify-content-between mb-0">
        <div class="d-inline-flex align-items-center">
          <img v-if="hasBoarder" class="boarder" src="../../assets/borders/notable_border.webp">
          <img class="notable-img mr-2" :style="notableActive ? 'box-shadow: 0px 0px 2px 6px #fae989;' : ''" :src="getNotableImgUrl()">
          
          <input v-model="notableActive" type="checkbox">
        </div>
        <div class="d-inline-flex align-items-center mr-2">
          {{ notable.title }}
        </div>
      </label>

      <label 
        v-for="(smallnode, index) in passiveTree[treeClusterKey].smallnodes"
        :key="`${notable.title}-${index}`"
        class="d-flex justify-content-end small-label mt-0 mb-0"
      >
        <div class="d-inline-flex align-items-center mr-2">
          <img class="small-boarder" src="../../assets/borders/small_border.webp">
          <img class="small-node mr-2" :style="smallnode.isActive ? 'box-shadow: 0px 0px 2px 6px #fae989;' : ''" src="../../assets/img/tree/effect.png">
          <input v-model="smallnode.isActive" @change="updateSmallNode" class="mr-1" type="checkbox">
          {{ `${passiveTree[treeClusterKey].motMeek.isActive ? Math.floor(smallnode.value*1.5) : smallnode.value} aura effect` }}
        </div>
      </label>

      <label 
        v-if="passiveTree[treeClusterKey].motMeek.possible"
        class="d-flex justify-content-end small-label mt-0 mb-0"
      >
        <div class="d-inline-flex align-items-center mr-2">
          <img class="motm-img mr-2" src="../../assets/img/tree/motm.png">
          <input v-model="motmActive" class="mr-1" type="checkbox">
          Might of the meek
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    treeClusterData: {
      type: Object,
      require: true,
    },

    treeClusterKey: {
      type: String,
      rquire: true
    },

    notable: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {

    };
  },

  computed: {
    ...mapGetters(['passiveTree']),
    notableActive: {
      set(v) { 
        this.$store.commit('UPDATE_NOTABLE', { key: this.treeClusterKey, value: v });
        this.$store.dispatch('updateTreeAuraEffect');
      },
      get() { return this.passiveTree[this.treeClusterKey].notable.isActive; },
    },
    motmActive: {
      set(v) { 
        this.$store.commit('UPDATE_MOTM', { key: this.treeClusterKey, value: v });
        this.$store.dispatch('updateTreeAuraEffect');
      },
      get() { return this.passiveTree[this.treeClusterKey].notable.isActive; },
    },

    hasBoarder() {
      return this.treeClusterKey != 'POTENCY'
    }
  },

  mounted() {
    console.log(this.passiveTree[this.treeClusterKey]);
  },

  methods: {
    getNotableImgUrl() {
      const imgTitle = (this.treeClusterKey).toLowerCase();
      return require(`../../assets/img/tree/${imgTitle}.png`)
    },

    updateSmallNode() {
      this.$store.dispatch('updateTreeAuraEffect');
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

      .boarder {
        position: absolute;
        top: -5px;
        left: -5px;
        z-index: 10;
        float: left;
        width: 45px;
        height: 45px;
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

      .small-boarder {
        position: relative;
        left: 23px;
        z-index: 10;
        float: left;
        width: 28px;
        height: 28px;
      }

      .small-node {
        border-radius: 5px;
        width: 18px;
        height: 18px;
      }

      .motm-img {
        border-radius: 5px;
        width: 28px;
        height: 28px;
      }
    }

}
</style>