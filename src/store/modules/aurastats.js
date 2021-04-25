import auras from './data/auraData';
import clusters from './data/clusterData';
import passiveTree from './data/treeData';

const state = {
    auraEffect: {
        global: 0,
        ascGlobal: 0,
        treeGlobal: 0,
        clusterGlobal: 0,
        gearGlobal: {
            helmet: 0,
            shield: 0,
            body: 0,
            get() { return this.helmet + this.shield + this.body; }
        },
        get() { 
            return  this.ascGlobal + 
                    this.treeGlobal + 
                    this.clusterGlobal + 
                    this.gearGlobal.get(); 
        }

    },
    clusters,
    passiveTree,
    auras,
};

const getters = {
    getAuraEffect: (state) => state.auraEffect.get(),
    getClusters: (state) => state.clusters,
    getPassiveTree: (state) => state.passiveTree,
    getAuras: (state) => state.auras,
    getAura: (state, key) => state.auras[key],
    getGlobalAuraEffect: ((state) => {
        return state.auraEffect.get() + state.clusters.auraEffect();
    }),
};

const actions = {

    updateGlobalAuraEffect({commit, state}) {
        
        let clusterAuraEffect = 0;
        Object.keys(state.clusters).forEach((key) => {
            console.log(clusterAuraEffect)
            console.log(state.clusters[key].affects, state.clusters[key].affects === true)
            if(state.clusters[key].affects === true) {
                clusterAuraEffect += (state.clusters[key].amount * state.clusters[key].auraEffect[0])
            }
        })
        commit('UPDATE_CLUSTER_AURA_EFFECT', clusterAuraEffect);
        
        commit('UPDATE_GLOBAL_AURA_EFFECT', state.auraEffect.get());
    }
};

const mutations = {

    UPDATE_GLOBAL_AURA_EFFECT: ((state, payload) => {
        state.auraEffect.global = payload;
    }),
    UPDATE_ASC_AURA_EFFECT: ((state, payload) => {
        state.auraEffect.ascGlobal = payload;
    }),
    UPDATE_TREE_AURA_EFFECT: ((state, payload) => {
        state.auraEffect.treeGlobal = payload;
    }),
    UPDATE_CLUSTER_AURA_EFFECT: ((state, payload) => {
        state.auraEffect.clusterGlobal = payload;
    }),


    UPDATE_AURA_LEVEL: ((state, payload) => {
        state.auras[payload.key].level = payload.value;
    }),
    UPDATE_AURA_QUALITY: ((state, payload) => {
        state.auras[payload.key].quality = payload.value;
    }),
    UPDATE_AURA_ALT_QUALITY: ((state, payload) => {
        state.auras[payload.key].altQuality = payload.value;
    }),
    UPDATE_AURA_GENO_TYPE: ((state, payload) => {
        state.auras[payload.key].generosityType = payload.value;
    }),
    UPDATE_AURA_GENO_LEVEL: ((state, payload) => {
        state.auras[payload.key].generosityLevel = payload.value;
    }),

    CHANGE_CLUSTER: ((state, payload) => {
        state.clusters[payload.key].amount = payload.value;
    }),
};

export default {
    state,
    getters,
    actions,
    mutations,
}