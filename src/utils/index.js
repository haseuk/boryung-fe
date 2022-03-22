import _ from 'lodash';
import qs from 'qs';

export const commaDecimal = (num) => {
  if (Number.isNaN(num)) return '';
  return num.toLocaleString().replace(/\.0+$/, '');
};

export const fixedRound = (value, places) => {
  const multiplier = 10 ** places;
  return Math.round(value * multiplier) / multiplier;
};

export const setCookie = (name, value) => {
  const expire = new Date();
  expire.setFullYear(expire.getFullYear() + 1);
  document.cookie = name + '=' + encodeURIComponent(value) + '; path=/; EXPIRES=' + expire.toUTCString();
};

export const getCookie = (name) => {
  let value = null;
  if (document.cookie) {
    const array = document.cookie.split((name + '='));
    if (array.length >= 2) {
      const arraySub = array[1].split(';');
      value = decodeURIComponent(arraySub[0]);
    }
  }
  return value;
};

export const toggleClass = (el, c) => {
  if (el.classList.contains(c)) {
    el.classList.remove(c);
  } else {
    el.classList.add(c);
  }
};

export const closest = (el, selector) => {
  if (el.closest) return el.closest(selector);
  let t = el;
  while(t) {
    if (t.matches(selector)) return t;
    if (t === document.body) return null;
    t = t.parentNode;
  }
  return null;
};

export const elementIndex = el => {
  if (!el.parentNode) return -1;
  return Array.prototype.indexOf.call(el.parentNode.childNodes, el);
};

export const routeString = route => route ?
  route.path + (_.isEmpty(route.query) ? '' : '?' + qs.stringify(route.query))
  : location.pathname+location.search;

export const values = (...args) => _.keyBy(args);

export const sleep = t => new Promise(resolve => setTimeout(resolve, t));

const easeOutQuint = (elapsed, initialValue, amountOfChange, duration) => {
  return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed * elapsed + 1) + initialValue;
};

const animates = {};
let animateSeq = 0;
export const animate = (start, end, duration, step) => {
  let startTime = +new Date();
  const seq = animateSeq++;
  animates[seq] = true;
  const loop = () => {
    let now = +new Date() - startTime;
    if (now >= duration) {
      now = duration;
      animates[seq] = false;
    }
    try {
      step(easeOutQuint(now, start, end - start, duration), !animates[seq]);
    } catch (e) {
      animates[seq] = false;
    }
    if (animates[seq]) requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  return seq;
};

export const stopAnimate = seq => {
  animates[seq] = false;
}

export const flattenGroup = raw => Object.keys(raw)
  .map(groupKey => Object.keys(raw[groupKey])
    .map(key => ({[(groupKey === 'common' ? '' : groupKey+'.')+key]: raw[groupKey][key]}))
  )
  .reduce((groupAcc, group) => ({
    ...groupAcc,
    ...group.reduce((nodeAcc, node) => ({ ...nodeAcc, ...node }), {})
  }), {});

export const groupBy = (arr, key) => {
  const acc = {};
  arr.forEach(o => (acc[o[key]] || (acc[o[key]] = [])).push(o));
  return acc;
};

export const groupByAsArray = (arr, key) => Object.values(groupBy(arr, key));

export const getUseAsyncDataComponents = matchedComponents => {
  if (!matchedComponents) return [];
  const acc = [];
  let prev = null, i = 0, list = matchedComponents;
  while (i < list.length) {
    const item = list[i];
    if (item.asyncData) acc.push(item);
    if (item.components) {
      prev = [i + 1, list, prev];
      list = Object.keys(item.components).map(k => item.components[k]);
      i = 0;
    } else {
      i += 1;
    }
    while (i >= list.length && prev) [i, list, prev] = prev;
  }
  return acc;
}

