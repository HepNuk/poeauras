import Vuex from 'vuex';
import Vue from 'vue';
import aurastats from './modules/aurastats';

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: [
        aurastats,
    ]
});