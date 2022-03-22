<template>
  <router-link :to="lngTo" :custom="custom" :exact="exact" :exact-path="exactPath" :append="append" :replace="replace"
               :active-class="activeClass" :exact-active-class="exactActiveClass" :aria-current-value="ariaCurrentValue"><slot /></router-link>
</template>

<script>

export default {
  name: 'LngLink',
  props: {
    to: { type: [Object, String], required: true },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: { type: String },
  },
  computed: {
    lngTo() {
      return typeof this.to === 'string' ? `/${this.lang}${this.to[0] === '/' ? '' : '/'}${this.to}` : this.to;
    }
  }
};
</script>
