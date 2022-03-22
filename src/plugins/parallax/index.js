import PSection from './components/PSection';
import PItem from './components/PItem';
import { animate, flattenGroup, stopAnimate } from '@/utils';

class DefaultScrollAgency {
  #listeners = [];
  #scrollAnimation;
  #animationSeq;

  #wheel = e => {
    if (this.#scrollAnimation) e.preventDefault();
  }

  constructor() {
    window.addEventListener('scroll', () => this.#listeners.forEach(l => l(window.pageYOffset)));
    window.addEventListener('wheel', this.#wheel, { passive: false });
  }

  addListener(listener) {
    this.#listeners.push(listener);
  }

  scrollMove(to, dura) {
    const abs = Math.abs(window.pageYOffset - to);
    if (abs < 100) return;
    stopAnimate(this.#animationSeq);
    this.#scrollAnimation = true;
    this.#animationSeq = animate(window.pageYOffset, to, dura, (v, last) => {
      window.scroll(0, v);
      if (last) this.#scrollAnimation = false;
    });
  }
}

const medias = ['MS','MM','ML','TP','TL','DS','DM','DL'];
const mediaIndex = medias.reduce((acc, item, idx) => ({...acc, [item]: idx}), {});
const getMatchedValue = (obj, media, fallback = 0) => {
  if (!obj) return fallback;
  if (!obj['MS']) return obj;
  let idx = media ? mediaIndex[media] : 0;
  while (!(medias[idx] in obj) && idx > 0) idx -= 1;
  return obj[medias[idx]];
}

let prxRuleIdx = 0;
const prxRules = {
  example: {intro: {}, progress: {}, outro: {}}
};
const getPrxRule = el => el.dataset.prx ? prxRules[el.dataset.prx] : (prxRules[el.dataset.prx = '' + prxRuleIdx++] = {});

const $s = {}, $e = {};

const interpolate = (arr, step, ratio) => {
  return step === $s ? arr[0]
    : step === $e ? arr[arr.length - 1]
    : arr[step - 1] + (arr[step] - arr[step - 1]) * ratio;
}

const getStep = (arr,r) => {
  let i = arr.length;
  if (r >= arr[i-1]) return $e;
  if (r <= arr[0]) return $s;
  while(i--) if (arr[i] >= r && arr[i-1] < r) return i;
}

const prepRule = (rule, type, media) => {
  const base = getMatchedValue(rule[type], media);
  return typeof base === 'function' ? base(rule[type+'_param']) : base;
}

const transformOne = (el, ruleSet, type, media, mediaChanged, rat) => {
  const rule = prepRule(ruleSet, type, media);
  const r = rat * 10;
  const step = getStep(rule.r, r);
  if (step === undefined) return;
  if (!mediaChanged) {
    if (el.step === $s && step === $s) return;
    if (el.step === $e && step === $e) return;
  }
  el.step = step;
  const ratio = step === $s ? 0
    : step === $e ? 1
    : (r - rule.r[step-1]) / (rule.r[step] - rule.r[step-1]) || 1;
  const unit = rule.unit || 'px';
  let t = '';
  if (rule.pan) t += ' translateX(-' + ((el.scrollWidth - el.offsetWidth) * 0.01 * interpolate(rule.pan, step, ratio)) + 'px)';
  else if (rule.tx) t += ' translateX(' + interpolate(rule.tx, step, ratio) + unit + ')';
  if (rule.ty) t += ' translateY(' + interpolate(rule.ty, step, ratio) + unit + ')';
  if (rule.sx) t += ' scaleX(' + interpolate(rule.sx, step, ratio) + ')';
  if (rule.sy) t += ' scaleY(' + interpolate(rule.sy, step, ratio) + ')';
  if (rule.s) t += ' scale(' + interpolate(rule.s, step, ratio) + ')';
  if (t) el.style.transform = t;
  if (rule.w) el.style.width = interpolate(rule.w, step, ratio) + unit;
  if (rule.h) el.style.height = interpolate(rule.h, step, ratio) + unit;
  if (rule.o) el.style.opacity = interpolate(rule.o, step, ratio);
};

const transform = (media, mediaChanged, i, p, o) => {
  return el => {
    const rule = prxRules[el.dataset.prx];
    if (!rule) return;
    if (rule.intro) transformOne(el, rule,'intro', media, mediaChanged, i);
    if (rule.progress) transformOne(el, rule,'progress', media, mediaChanged, p);
    if (rule.outro) transformOne(el, rule,'outro', media, mediaChanged, o);
  };
};

const transY = (v, el) => {
    if (el.transY !== v) {
      el.style.transform = v === null ? null : `translateY(${v}px)`;
      el.transY = v;
    }
  };

const fixed = (inertia, top) => el => transY(inertia ? -top : null, el);

const sticky = (inertia, top, bottom) => el => {
  let v;
  if (inertia) {
    const to = el.dataset.sticky;
    const elTop = top + el.offsetTop;
    const elBottom = +to + el.offsetHeight;
    if (to === 'no') v = 0;
    else if (bottom < elBottom) v = bottom - top - el.offsetHeight - el.offsetTop;
    else if (to > elTop) v = to - elTop;
    else v = 0;
  } else {
    v = null;
  }
  transY(v, el);
};

const makeDigit = v => {
  if (v < 0) return '-';
  if (v >= 1) return '+';
  return '' + (v * 10 >> 0);
};

class Parallax {
  #store;
  #innerHeight;
  #sections = [];
  #items = [];
  #meter;
  #scrollTop;
  #scrollAgency;
  #media;
  #mediaChanged;
  #offset;
  #theme;

  #applyItem = item => {
    const el = item.$el;
    const rect = el.getBoundingClientRect();
    const {top, bottom} = rect;
    const remain = bottom - this.#innerHeight;
    const over = item.over;
    const i = 1 - (top / this.#innerHeight);
    const p = 1 - (over === 0 ? 0 : remain / over);
    const o = 1 - (bottom / this.#innerHeight);
    const d_i = makeDigit(i);
    const d_p = makeDigit(p);
    const d_o = makeDigit(o);
    const inertia = this.#store.getters.isInertia;
    const offset = getMatchedValue(this.#offset, this.#store.state.browser.matchedMedia, 0);
    if (item.rollup && d_i === '0' && el.dataset.i === '-') {
      this.#scrollAgency.scrollMove(this.#scrollTop + top - offset, 1000);
    }
    el.dataset.i = d_i;
    el.dataset.p = d_p;
    el.dataset.o = d_o;
    if (item.$options.name === 'PItem') return;
    if (offset >= top && offset < bottom && this.#theme !== item.theme) this.#store.commit('theme', this.#theme = item.theme);
    if (item.prx) item.prx.forEach(transform(this.#media, this.#mediaChanged, i, p, o));
    if (item.sticky) item.sticky.forEach(sticky(inertia, top, bottom));
    if (item.fixed) item.fixed.forEach(fixed(inertia, top));
  };

  #setOver = section => {
    section.over = section.$el.offsetHeight - this.#innerHeight;
  };

  #initSection = section => {
    ['prx', 'sticky', 'fixed'].forEach(type => {
      const subs = section.$el.querySelectorAll(`[data-${type}]`);
      if (subs && subs.length) section[type] = Array.prototype.map.call(subs, e => { e.section = section.$el; return e; });
    });

    this.#setOver(section);
    this.#applyItem(section);
  };

  #resized = () => {
    if (this.#media !== this.#store.state.browser.matchedMedia) {
      this.#media = this.#store.state.browser.matchedMedia
      this.#mediaChanged = true;
    } else {
      this.#mediaChanged = false;
    }
    this.#innerHeight = this.#meter.offsetHeight;
    this.#sections.forEach(this.#setOver);
    this.#sections.forEach(this.#applyItem);
    this.#items.forEach(this.#applyItem);
  };

  #createMeter = () => {
    const meter = document.createElement('div');
    meter.style.position = 'absolute';
    meter.style.height = '100vh';
    meter.style.top = '-100vh';
    document.body.appendChild(meter);
    this.#meter = meter;
  };

  #update = scrollTop => {
    this.#scrollTop = scrollTop;
    this.#sections.forEach(this.#applyItem);
    this.#items.forEach(this.#applyItem);
  };

  addSection(section) {
    this.#sections.push(section);
    this.#initSection(section);
  }

  removeSection(section) {
    this.#sections.splice(this.#sections.indexOf(section), 1);
  }

  addItem(item) {
    this.#items.push(item);
    this.#applyItem(item);
  }

  removeItem(item) {
    this.#items.splice(this.#items.indexOf(item), 1);
  }

  constructor({ store, offset, scrollAgency = new DefaultScrollAgency() }) {
    this.#store = store;
    this.#offset = offset;
    if (typeof window === 'undefined') return;
    this.#createMeter();
    this.#scrollAgency = scrollAgency;
    scrollAgency.addListener(this.#update);
    window.addEventListener('resize', this.#resized);
    this.#innerHeight = this.#meter.offsetHeight;
    setTimeout(this.#resized, 100);
  }
}

export default {
  install(Vue, options) {
    const data = flattenGroup(options.data);
    Vue.prototype.$parallax = new Parallax(options);
    Vue.component('PSection', PSection);
    Vue.component('PItem', PItem);

    const bindPrx = (el, binding) => {
      const rule = getPrxRule(el);
      const key = Object.keys(binding.modifiers).join('.');
      if (key) {
        rule[binding.arg] = data[key];
        rule[binding.arg+'_param'] = binding.value;
      } else {
        rule[binding.arg] = binding.value;
      }
    };

    const bindSticky = (el, type, binding, vnode) => {
      const run = () => {
        const inertia = vnode.context.$store.getters.isInertia;
        const media = vnode.context.$store.state.browser.matchedMedia;
        const to = getMatchedValue(binding.value, media);
        el.style.position = inertia ? 'relative' : 'sticky';
        el.style.top = inertia ? null : to + 'px';
        el.dataset.sticky = to;
        if (el.section) {
          const { top, bottom } = el.section.getBoundingClientRect();
          sticky(inertia, top, bottom)(el);
        }
      }
      vnode.context.$watch('$store.getters.isInertia', run);
      vnode.context.$watch('$store.state.browser.matchedMedia', run);
      run(vnode.context.$store.getters.isInertia);
    };

    const bindFixed = (el, type, binding, vnode) => {
      const run = inertia => el.style.position = inertia ? 'absolute' : 'fixed';
      vnode.context.$watch('$store.getters.isInertia', run);
      run(vnode.context.$store.getters.isInertia);
      el.dataset[type] = '';
    };

    Vue.directive('prx', { bind(el, binding, vnode) {
      switch(binding.arg) {
        case 'intro': case 'progress': case 'outro':
          bindPrx(el, binding);
          break;
        case 'sticky':
          bindSticky(el, binding.arg, binding, vnode);
          break;
        case 'fixed':
          bindFixed(el, binding.arg, binding, vnode);
          break;
        default:
          throw 'invalid argument: ' + binding.arg;
      }
    }});
  }
};
