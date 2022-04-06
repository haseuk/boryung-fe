<template>
  <div select-cont>
    <h2>{{ title }}</h2>
    <div class="select-box" :class="{open:isOpen}" @click="listToggle">
      <ul>
        <li v-for="item in orderList" :key="item.key" @click="$emit('select', item.key)" :class="{ active: active === item.key }">{{ item.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import _sortBy from 'lodash/sortBy'

export default {
  name: "SelectContent",
  props: {
    title: { type: String, default: null },
    list: { type: Array, default: null },
    active: { type: String, default: null }
  },
  data() {
    return {
      isOpen:  false,
    }
  },
  computed: {
    orderList() {
      return _sortBy(this.list, item => (item.key === this.active ? 0 : 1))
    }
  },
  methods: {
    listToggle() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[select-cont] { .fs(0); .mb(88);
  h2 { .fs(80); .lh(115); .medium; .ls(-0.05em); }
  .select-box { .w(383); .-b(#2d2d2f,2px); .rel; .mt(60);
    &:after { .cnt; .wh(40,23); .contain('/images/mo/arr-d.png'); .abs; .rt(3,17); pointer-events: none; }
    ul {
      li { .fs(40); .bold; .mb(15); .pointer; .hide;
        &.active { .block; }
      }
    }
    &.open {
      &:after { transform: rotate(-180deg); }
      ul {
        li { .block }
      }
    }
  }
}
@media screen and(min-width: 1240px) {
  [select-cont] { .mb(0); .max-w(1240); .mh-c; .pl(60); .h(180); .-box; .rel;
    h2 { .lh(80);}
    .select-box { .w(280); .-b; .pb(0); .mt(0); .abs; .rt(40,0); .tr; height: auto; overflow: auto;
      &:after { .hide; }
      ul {
        li { .fs(24); color:#e3d7cb; .-b(#e3d7cb,2); .pb(5); .-box; .block; .min-w(130); .mb(20); }
      }
    }
  }
}
</style>