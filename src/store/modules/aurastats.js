import auras from './data/auraData';
import clusters from './data/clusterData';
import passiveTree from './data/treeData';

const state = {
    auraEffect: {
        ascGlobal: 0,
        treeGlobal: 0,
        clusterGlobal: 0,
        gearGlobal: {
            helmet: 0,
            shield: 0,
            body: 30,
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