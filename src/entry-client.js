import Vue from 'vue';
import createApp from './app';
import 'swiper/swiper-bundle.min.css';
import browser from '@/utils/browser';
import NoticeModal from '@/views/components/modal/NoticeModal';
import { getUseAsyncDataComponents, routeString } from '@/utils';
import { getLocalObject } from '@/utils/LocalObject';

const { app, router, store } = createApp();

const errorHandler = (error) => {
  if (!error) return;
  let errData;
  if (error.response && error.response.data) {
    errData = error.response.data;
  } else if (error.data) {
    errData = error.data;
  } else if (typeof error === 'string') {
    errData = error;
  }

  if (errData) {
    app.$modal(NoticeModal, { content: errData.message || errData });
  } else {
    console.error(error);
  }
};

Vue.config.errorHandler = errorHandler;

window.addEventListener('unhandledrejection', (event) => {
  event.promise.catch(errorHandler);
});

browser.useScrollHistory({ router, store, scrollHandler: app.$scroll });

const prepComponentsInitial = async (matchedComponents, route, initialData, restoreData) => {
  if (initialData || restoreData) {
    getUseAsyncDataComponents(matchedComponents).forEach(component => {
      if (initialData) component.__INITIAL_STATE__ = initialData[component.name];
      if (restoreData) component.__RESTORE_STATE__ = restoreData[component.name];
    });
  } else {
    store.commit('startFetch');
    await Promise.all(getUseAsyncDataComponents(matchedComponents).map(component => {
      return component.asyncData({ store, route }).then(result => component.__INITIAL_STATE__ = result);
    }));
    store.commit('endFetch');
  }
};

const localObject = getLocalObject('savedData');

const getFetchedData = context => {
  let acc = null;
  let prev = null, i = 0, list = context.$children;
  while (i < list.length) {
    const item = list[i];
    const component = item.constructor.extendOptions;
    if (item.__fetched) {
      if (!acc) acc = {};
      if (!component.name) throw `[asyncData] 'name' property is required`;
      if (acc[component.name]) throw `[asyncData] duplicated name(${component.name}) property`;
      acc[component.name] = item.$data;
    }
    if (item.$children) {
      prev = [i + 1, list, prev];
      list = item.$children;
      i = 0;
    } else {
      i += 1;
    }
    while (i >= list.length && prev) [i, list, prev] = prev;
  }
  return acc;
};

window.addEventListener('beforeunload', () => localObject.set(routeString(), getFetchedData(app)));

router.beforeEach(async (to, from, next) => {
  localObject.set(routeString(from), getFetchedData(app));
  const modules = await Promise.all(router.getMatchedComponents(to).map(lazyOrNot => typeof lazyOrNot === 'function' ? lazyOrNot(null, null) : lazyOrNot));
  const matchedComponents = modules.map(module => module.default || module);
  let restoreData;
  if (store.state.browser.popState) restoreData = localObject.pick(routeString(to));
  await prepComponentsInitial(matchedComponents, to, restoreData);
  next();
});

router.onReady(async () => {
  let initialData, restoreData;
  if (window.__INITIAL_STATE__) {
    initialData = window.__INITIAL_STATE__.__COMPONENTS_STATE__;
    window.__INITIAL_STATE__.__COMPONENTS_STATE__ = undefined;
    store.replaceState(window.__INITIAL_STATE__);
  }
  if (getLocalObject('browser').get('lastRoute') === routeString()) {
    if (initialData) restoreData = localObject.pick(routeString());
    else initialData = localObject.pick(routeString());
  }

  await prepComponentsInitial(router.getMatchedComponents(), router.currentRoute, initialData, restoreData);

  browser.sync(store);
  app.$mount('#app');
});
