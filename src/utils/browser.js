import Vue from 'vue';
import { routeString } from '@/utils';
import LocalObject from '@/utils/LocalObject';

const screens = ['DL','DM','DS','TL','TP','ML','MM'];

const polyfill = () => {
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype['msMatchesSelector'] || Element.prototype['webkitMatchesSelector'];
  if (typeof Object.values !== 'function') Object.values = o => Object.keys(o).map(k => o[k]);
};

const sync = store => {
  if (typeof window === 'undefined') return;
  let mobile;
  let touch;
  let shrink;
  let screenStatus = null;
  let lastHeight = Number.MAX_VALUE;

  let lastScroll = 0;
  let scrollDirection = 'up';
  let scrollByWheel = false;
  let byWheel = -1;

  const getMatchedMedia = () => {
    for (let i = 0; i < screens.length; ++i) {
      if (window.matchMedia(`(min-width: ${process.env['VUE_APP_SCREEN_'+screens[i]]}px)`).matches) return screens[i];
    }
    return 'MS';
  };

  const getScreenStatus = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (mobile) {
      const dh = vh - lastHeight;
      lastHeight = vh;
      shrink = dh < 0;
    } else {
      shrink = false;
    }
    const matchedMedia = getMatchedMedia();
    const orientation = matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait';
    return { matchedMedia, vw, vh, orientation, shrink };
  };

  const onWheel = () => {
    clearTimeout(byWheel);
    byWheel = setTimeout(() => { byWheel = -1 }, 3000);
  }

  const onScroll = () => {
    const top = window.pageYOffset;
    scrollDirection = lastScroll <= top && top > 0 ? 'down' : 'up';
    lastScroll = top;
    scrollByWheel = byWheel > -1;
    store.commit('browser/scrollDirection', scrollDirection);
    store.commit('browser/scrollByWheel', scrollByWheel);
  };

  const onResize = () => {
    screenStatus = getScreenStatus();
    store.commit('browser/matchedMedia', screenStatus.matchedMedia);
    store.commit('browser/orientation', screenStatus.orientation);
    store.commit('browser/shrink', screenStatus.shrink);
  };

  const detect = () => {
    touch = 'ontouchstart' in window;
    mobile = !!navigator.userAgent.match(/(phone|pad|android)/i) || (!!navigator.userAgent.match(/mac/i) && navigator.maxTouchPoints >= 5);
    shrink = mobile;
    store.commit('browser/touch', touch);
    store.commit('browser/mobile', mobile);
    store.commit('browser/shrink', shrink);
  };

  polyfill();
  window.addEventListener('resize', onResize);
  window.addEventListener('scroll', onScroll);
  window.addEventListener('wheel', onWheel);
  window.addEventListener('mousedown', () => byWheel = -1);
  Vue.nextTick(() => {
    detect();
    onResize();
  });
};

const defaultScrollHandler = {
  scrollTo: v => window.scroll(0, v),
  getScrollTop: () => window.pageYOffset,
  getScrollHeight: () => document.documentElement.scrollHeight
};

// client side router ready 전에 반영
const useScrollHistory = ({ router, store, ignoreInnerRoutes, scrollHandler = defaultScrollHandler } = {}) => {
  if (typeof window === 'undefined') return;
  let popStateDetected = false;
  let firstRoute = true;
  const localObject = new LocalObject('browser');

  const stayRoute = (ignoreInnerRoutes, to, from) => ignoreInnerRoutes && ignoreInnerRoutes.some(start => to.path.indexOf(start) === 0 && from.path.indexOf(start) === 0);

  const heightReady = h => new Promise(resolve => {
    let timeout = 100;
    const handler = () => {
      const scrollHeight = scrollHandler.getScrollHeight();
      if (scrollHeight > 0 && scrollHeight >= h || --timeout <= 0) {
        resolve();
      } else {
        setTimeout(handler, 40);
      }
    };
    handler();
  });

  const restoreScroll = route => {
    const v = localObject.pick(route);
    return v ? v : [0,0];
  };

  const saveScroll = route => {
    localObject.set(route, [scrollHandler.getScrollTop(), scrollHandler.getScrollHeight()]);
  };

  const saveState = () => {
    const route = routeString();
    saveScroll(route);
    localObject.set('lastRoute', route);
  };

  const checkScroll = (type, to) => {
    Vue.nextTick(async () => {
      let v, h;
      if (to && to.hash) {
        v = scrollHandler.getScrollTop() + document.querySelector(to.hash).getBoundingClientRect().top;
        h = v + window.innerHeight;
      } else {
        v = 0;
        h = 0;
      }

      if (type === 'popState' || type === 'firstRoute') {
        [v,h] = restoreScroll(routeString(to));
      } else if (type === 'pageShow') {
        const r = routeString();
        const t = localObject.get(r);
        if (!t) return;
        localObject.remove(r);
        [v,h] = t;
      }

      // console.log(type, v, h);
      await heightReady(h);
      scrollHandler.scrollTo(v);
    });
  }

  window.addEventListener('pagehide', saveState);
  window.addEventListener('pageshow', () => checkScroll('pageShow'));

  window.addEventListener('beforeunload', saveState);
  window.addEventListener('popstate', () => { popStateDetected = true; });

  router.beforeEach((to, from, next) => {
    store.commit('browser/popState', popStateDetected);
    popStateDetected = false;
    saveScroll(routeString(from));
    next();
  });

  router.afterEach((to, from) => {
    if (stayRoute(ignoreInnerRoutes, to, from)) return;
    checkScroll(store.state.browser.popState ? 'popState'
        : firstRoute ? 'firstRoute'
        : 'normal', to);
    if (firstRoute) firstRoute = false;
  });

};

const store = {
  namespaced: true,
  state: {
    touch: false,
    mobile: false,
    matchedMedia: null,
    orientation: null,
    shrink: null,
    scrollDirection: null,
    scrollByWheel: false,
    popState: false,
  },
  mutations: {
    touch(state, val) {
      state.touch = val;
    },
    mobile(state, val) {
      state.mobile = val;
    },
    matchedMedia(state, val) {
      state.matchedMedia = val;
    },
    orientation(state, val) {
      state.orientation = val;
    },
    shrink(state, val) {
      state.shrink = val;
    },
    scrollDirection(state, val) {
      state.scrollDirection = val;
    },
    scrollByWheel(state, val) {
      state.scrollByWheel = val;
    },
    popState(state, val) {
      state.popState = val;
    },
  },
};

export default { sync, useScrollHistory, store };
