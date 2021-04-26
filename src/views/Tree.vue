<template>
  <div>
    <h1>Tree page</h1>
    <div class="d-flex flex-wrap">
      <TreeCluster 
        v-for="(treeCluster, key) in passiveTree"
        :key="key"
        :tree-cluster-key="key"
        :notable="treeCluster"
        class="label"
      />

      <TimelessJewel />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TreeCluster from '../components/tree/TreeCluster.vue';
import TimelessJewel from '../components/tree/TimelessJewel.vue';

export default {
  components: {
    TreeCluster,
    TimelessJewel,
  },

  computed: {
    ...mapGetters(['passiveTree']),
  },
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 1075px) {
    .label {
      flex: 0 0 100%;
    }
  }

  @media screen and (min-width: 1076px) and (max-width: 1335px) {
    .label {
      flex: 0 0 50%;
    }
  }

  @media screen and (min-width: 1337px) and (max-width: 1600px) {
    .label {
      flex: 0 0 33.3333333%;
    }
  }

  @media screen and (min-width: 1601px) and (max-width: 1850px) {
    .label {
      flex: 0 0 25%;
    }
  }

  @media screen and (min-width: 1851px) {
    .label {
      flex: 0 0 20%;
    }
  }
</style>