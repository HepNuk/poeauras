import auras from './data/auraData';
import clusters from './data/clusterData';
import passiveTree from './data/treeData';

const state = {
    auraEffect: {
        global: 0,
        ascGlobal: 0,
        treeGlobal: 0,
        clusterGlobal: 0,
        timeless: 0,
        gearGlobal: {
            helmet: 0,
            shield: 0,
            body: 0,
            get() { return this.helmet + this.shield + this.body; }
        },
        get() { 
            return (
                this.ascGlobal + 
                this.treeGlobal + 
                this.clusterGlobal + 
                this.timeless +
                this.gearGlobal.get()
            ); 
        }
    },
    clusters,
    passiveTree,
    auras,
};

const getters = {
    getAuraEffect: (state) => state.auraEffect.get(),
    getClusters: (state) => state.clusters,

    passiveTree: (state) => state.passiveTree,
    timelessJewel: (state) => state.auraEffect.timeless,

    getAuras: (state) => state.auras,
    // getAura: (state, key) => state.auras[key],
    getGlobalAuraEffect: ((state) => {
        return state.auraEffect.get() + state.clusters.auraEffect();
    }),
};

const actions = {
    // Clusters
    updateClusterAuraEffect({commit, state}) {
        let clusterAuraEffect = 0;
        Object.keys(state.clusters).forEach((key) => {
            if(state.clusters[key].affects === true) {
                clusterAuraEffect += (state.clusters[key].amount * state.clusters[key].auraEffect[0])
            }
        });

        commit('UPDATE_CLUSTER_AURA_EFFECT', clusterAuraEffect);
        commit('UPDATE_GLOBAL_AURA_EFFECT', state.auraEffect.get());
    },

    // TREE
    updateTreeAuraEffect({commit, state}) {
        let treeAuraEffect = 0;
        Object.keys(state.passiveTree).forEach((key) => {
            const notableCluster = state.passiveTree[key]
            let notableAuraEffect = 0;
            let smallNodeAuraEffect = 0;

            if(notableCluster.notable.isActive && !notableCluster.motMeek.isActive) notableAuraEffect += notableCluster.notable.value;
            
            notableCluster.smallnodes.forEach((node) => {
                if (node.isActive) {
                    if (notableCluster.motMeek.isActive) smallNodeAuraEffect += Math.floor(node.value * 1.5)
                    else  smallNodeAuraEffect += node.value;
                }
            });

            treeAuraEffect += (notableAuraEffect + smallNodeAuraEffect);
        });

        commit('UPDATE_TREE_AURA_EFFECT', treeAuraEffect);
        commit('UPDATE_GLOBAL_AURA_EFFECT', state.auraEffect.get());
    },

    
};

const mutations = {

    // Aura Effect Updates
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

    // Auras
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
    UPDATE_AURA_LOCAL_EFFECT: ((state, payload) => {
        state.auras[payload.key].generosityLevel = payload.value;
    }),

    // Tree
    UPDATE_NOTABLE: ((state, payload) => {
        state.passiveTree[payload.key].notable.isActive = payload.value;
    }),
    UPDATE_MOTM: ((state, payload) => {
        state.passiveTree[payload.key].motMeek.isActive = payload.value;
    }),
    UPDATE_SMALL_NODE: ((state, payload) => {
        const newValue = !state.passiveTree[payload.key].smallnodes[payload.index].isActive
        state.passiveTree[payload.key].smallnodes[payload.index].isActive = newValue;
    }),
    UPDATE_TIMELESS: ((state, payload) => {
        state.auraEffect.timeless = payload.value
    }),

    // Clusters
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