import Vue from 'vue'
import Vuex from 'vuex'
import browser from '../utils/browser';
import scrollAgency from '@/plugins/scrollAgency';

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    theme: 'default',
    fetchingAsyncData: false
  },
  mutations: {
    theme(state, val) {
      state.theme = val;
    },
    startFetch(state) {
      state.fetchingAsyncData = true;
    },
    endFetch(state) {
      state.fetchingAsyncData = false;
    }
  },
  actions: {
  },
  getters: {
    isInertia(state) {
      return !state.browser.touch
    }
  },
  modules: {
    browser: browser.store,
    scrollAgency: scrollAgency.store
  },
})
