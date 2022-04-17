import ScrollHolder from './components/ScrollHolder';
import { animate, stopAnimate } from '@/utils';

class ScrollAgency {
  #coefficient;
  #store;
  #holder;
  #scrollBody;
  #pseudoBody;
  #scrollAnimation = false;
  #animationSeq;
  #scrollHeight = 0;
  #scrollValue = 0;
  #scrollTarget = 0;
  #activated = false;
  #listeners = [];
  #frozen;
  #frozenScroll;

  #scrollUpdate = v => {
    if (!this.#scrollBody) return;
    if (this.inertia) {
      this.#scrollBody.style.transform = `translateY(-${v}px)`
    } else {
      this.#scrollBody.setAttribute('style', null);
    }
    if (this.#scrollValue !== v) {
      this.#scrollValue = v;
      this.#listeners.forEach(h => h(v));
    }
  };

  #update = () => {
    this.#scrollTarget = window.pageYOffset;
    if (!this.inertia) this.#scrollUpdate(this.#scrollTarget);
  };

  #tick = () => {
    if (!this.inertia) return;
    if (this.#scrollBody && this.#scrollBody.offsetHeight !== this.#scrollHeight) {
      this.#scrollHeight = this.#scrollBody.offsetHeight;
      this.#pseudoBody.style.height = this.#scrollHeight + 'px';
    }
    if (this.#scrollAnimation) return;
    const delta = this.#scrollTarget - this.#scrollValue;
    if (Math.abs(delta) < 1 || Number.isNaN(delta)) {
      this.#scrollUpdate(this.#scrollTarget);
      if (this.moving) this.#store.commit('scrollAgency/endMove');
    } else {
      this.#scrollUpdate(this.#scrollValue + delta * this.#coefficient);
      if (!this.moving) this.#store.commit('scrollAgency/startMove');
    }
  };

  #activate = () => {
    this.#activated = true;
    const loop = () => { this.#tick(); requestAnimationFrame(loop); };
    loop();
  }

  #wheel = e => {
    if (this.#scrollAnimation || !this.#activated) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return false;
    }
  }

  get inertia() {
    return this.#store.getters.isInertia;
  }

  get moving() {
    return this.#store.state.scrollAgency.moving;
  }

  setHolder(holder) {
    if (typeof window === 'undefined') return;
    if (this.#holder) throw 'scroll-holder already set';
    if (this.inertia === undefined) throw '$store.getters.isInertia should be implemented as return a boolean value';
    this.#holder = holder;
    this.#scrollBody = holder.$el.querySelector('[scroll-body]');
    this.#pseudoBody = holder.$el.querySelector('[scroll-pseudo-body]');
    window.addEventListener('scroll', this.#update);
    window.addEventListener('resize', this.#update);
    window.addEventListener('wheel', this.#wheel, { passive: false });
  }

  constructor({ coefficient = 0.15, store } = {}) {
    this.#store = store;
    this.#coefficient = coefficient;
  }

  getScrollTop() {
    return this.#scrollValue;
  }

  getScrollHeight() {
    if (this.#scrollBody) {
      this.#scrollHeight = this.#scrollBody.offsetHeight;
    }
    if (this.inertia && this.#pseudoBody) {
      this.#pseudoBody.style.height = this.#scrollHeight + 'px';
    }
    return this.#scrollHeight;
  }

  scrollTo(v) {
    const to = v || 0;
    this.#scrollTarget = to;
    window.scroll(0, to);
    this.#scrollUpdate(to);
    if (!this.#activated) this.#activate();
  }

  scrollMove(to, dura) {
    if (this.#scrollAnimation) return;
    const abs = Math.abs(this.#scrollValue - to);
    if (abs < 100) return;
    stopAnimate(this.#animationSeq);
    this.#scrollAnimation = true;
    this.#store.commit('scrollAgency/startMove');
    this.#animationSeq = animate(this.#scrollValue, to, dura, (v, end) => {
      this.scrollTo(v);
      if (end) {
        this.#scrollAnimation = false;
        this.#store.commit('scrollAgency/endMove');
      }
    });
  }

  addListener = listener => this.#listeners.push(listener);
  removeListener = listener => this.#listeners.splice(this.#listeners.indexOf(listener), 1);

  freeze(minHeight) {
    if (this.#frozen) return;
    if (document.documentElement.scrollHeight <= window.innerHeight) return;
    document.documentElement.style.overflowY = 'scroll';
    this.#frozenScroll = this.#scrollValue;
    this.#frozen = true;
    this.#holder.$el.style.position = 'absolute';
    this.#holder.$el.style.width = '100%';
    this.#holder.$el.style.height = '100%';
    this.#holder.$el.style.minHeight = minHeight+'px';
    this.#holder.$el.style.overflow = 'hidden';
    if (!this.inertia) this.#scrollBody.style.top = `-${this.#frozenScroll}px`;
    this.#store.commit('scrollAgency/freeze');
  }

  release() {
    if (!this.#frozen) return;
    document.documentElement.style.overflowY = 'auto';
    this.#frozen = false;
    this.#holder.$el.setAttribute('style', null);
    this.scrollTo(this.#frozenScroll);
    this.#store.commit('scrollAgency/release');
  }
}

const store = {
  namespaced: true,
  state: {
    frozen: false,
    moving: false,
  },
  mutations: {
    startMove(state) {
      state.moving = true;
    },
    endMove(state) {
      state.moving = false;
    },
    freeze(state) {
      state.frozen = true;
    },
    release(state) {
      state.frozen = false;
    }
  },
}

export default {
  install(Vue, options) {
    Vue.prototype.$scroll = new ScrollAgency(options);
    Vue.component('ScrollHolder', ScrollHolder);
  },
  store
};
