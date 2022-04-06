import LngLink from './components/LngLink';

export default {
  install(Vue, { data, fallback = 'ko' }) {
    const translate = (key, lang, options) => {
      if (!key || key.length < 1) throw 'vue-lng : empty key';
      let i = 0, curr = data;
      while (i < key.length) {
        curr = curr[key[i++]];
        if (curr === undefined) return `@@${key.join('.')}@@`;
      }
      const t = (typeof curr === 'string') ? curr : (curr[lang] ?? curr[fallback]);
      if (t === undefined) return `@@${key.join('.')}-${lang}@@`;
      if (options) {
        return t.replace(/{(\w+)(?:\|([^,)]+),([^,)]+))?}/g, (_, key, v1, v2) => {
          const word = options[key];
          if (!word) return `!!${key}!!`;
          if (v1 && v2) return word + ((word.charCodeAt(word.length - 1) - 0xAC00) % 28 > 0  ? v1 : v2);
          else return word;
        });
      } else return t;
    }

    Vue.directive('t', {
      bind(el, binding, vnode) {
        const key = [binding.arg, ...Object.keys(binding.modifiers)];
        const run = lang => el.innerHTML = translate(key, lang, binding.value);
        vnode.context.$watch('$store.state.route.params.lang', run);
        run(vnode.context.$store.state.route.params.lang);
      },
    });

    Vue.prototype.$t = function (key, options) {
      return translate(key.split('.'), this.$store.state.route.params.lang, options);
    }

    Vue.component('LngLink', LngLink);
  }
}
