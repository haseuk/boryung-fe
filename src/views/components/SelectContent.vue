<template>
  <div select-cont>
    <h2>{{ title }}</h2>
    <div class="select-box" :class="{open:isOpen}" @click="listToggle">
      <ul>
        <li v-for="item in orderList" :key="item.key" @click="$emit('select', item.key)" :class="{ active: active === item.key }"><p>{{ item.label }}</p></li>
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
    active: { type: null, default: null }
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
  h2 { .fs(80); .lh(115); .medium; .ls(-0.05em); .rel; z-index: 1; }
  .select-box { .w(383); .-b(#2d2d2f,2px); .rel; .mt(60);
    &:after { .cnt; .wh(40,23); .contain('/images/mo/arr-d.png'); .abs; .rt(3,20); pointer-events: none; }
    ul {
      li { .fs(40); .bold; .mb(15); .pointer; .hide; .ls(-0.075em);
        &.active { .ib; }
      }
    }
    &.open {
      &:after { transform: rotate(-180deg); }
      ul {
        li { .block; }
      }
    }
  }
}
@media screen and(min-width: 1240px) {
  [select-cont] { .mb(0); .max-w(1240); .mh-c; .pl(60); .h(180); .-box; .rel;
    h2 { .lh(80);}
    .select-box { .w(300); .-b; .pb(0); .mt(0); .abs; .rt(40,0); .tr; height: auto; overflow: auto;
      &:after { .hide; }
      ul {
        li { .-b; .block; .mb(0);
          p { .fs(24); color:#e3d7cb; .pb(5); .pr(2); .-box; .-b(#e3d7cb,2px); .min-w(130); .ls(-0.075em); .nowrap; .ib; }
          &.active p { .fs(36); .bold; color:#2d2d2f; .-b(#2d2d2f,2px); }
        }
      }
      &.open {
        ul {
          li { .block; }
        }
      }
    }
  }
}
</style>