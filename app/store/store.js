import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import scores from './modules/scores';
import sentences from './modules/sentences';
const state = {
  namespaced: true,
};
export const store = new Vuex.Store({
  modules: {
    scores,
    sentences,
  },
});
