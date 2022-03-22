import Vue from 'vue'
import App from '@/App.vue'
import createRouter from '@/router';
import createStore from '@/store';
import { sync } from 'vuex-router-sync';
import ssrMixin from '@/mixins/ssr';
import globalMixin from '@/mixins/global';
import lng from '@/plugins/lng';
import lngData from '@/lng-data';
import prxData from '@/prx-data';
import parallax from '@/plugins/parallax';
import scrollAgency from '@/plugins/scrollAgency';
import modal from '@/plugins/modal';
Vue.config.productionTip = false;

export default () => {
  if (!Vue.globalsRegistered) {
    Vue.globalsRegistered = true;
    Vue.mixin(ssrMixin);
    Vue.mixin(globalMixin);
  }

  const store = createStore();
  const router = createRouter();

  Vue.use(modal);
  Vue.use(lng, { data: lngData });
  Vue.use(scrollAgency, { store });
  Vue.use(parallax, { store, data: prxData, scrollAgency: Vue.prototype.$scroll, offset: { MS: 60, DM: 80 } });

  sync(store, router);

  const app = new Vue({
    render: h => h(App),
    router,
    store,
  });

  return { app, router, store };
};
