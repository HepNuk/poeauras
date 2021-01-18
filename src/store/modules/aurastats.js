import auras from './data/auraData';
import clusters from './data/clusterData';
import passiveTree from './data/treeData';

const state = {
    auraEffect: 3,
    clusters,
    passiveTree,
    auras,
};

const getters = {
    getAuraEffect: (state) => state.auraEffect,
    getClusters: (state) => state.clusters,
    getPassiveTre: (state) => state.passiveTree,
    getAuras: (state) => state.auras,
};

const actions = {
    changeAuraEffect({commit}){
        commit('incAuraEffect', 2);
    }
};

const mutations = {
    incAuraEffect: (state, inc) => (state.auraEffect += inc),
};

export default {
    state,
    getters,
    actions,
    mutations,
}