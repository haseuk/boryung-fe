<template>
  <div select-cont>
    <h2>{{ tit }}</h2>
    <h2>{{ title }}</h2>
    <div class="select-box" :class="{open:isOpen}" @click="listToggle">
      <ul>
        <li v-for="item in list" :key="item.key" @click="$emit('select', item.key)" :class="{ active: active === item.key }"><p><s v-html="$t(item.label + '.pos')"></s>{{ $t(item.label + '.nm') }}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
import _sortBy from 'lodash/sortBy'

export default {
  name: "SelectContent",
  props: {
    tit: { type: String, default: null },
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
  h2 { .fs(80); .lh(90); .medium; .ls(-0.05em); .rel; z-index: 1; }
  .select-box { .min-w(383); .-b(#2d2d2f,2px); .rel; .mt(60); .ib;
    &:after { .cnt; .wh(40,23); .contain('/images/mo/arr-d.png'); .abs; .rt(0,20); pointer-events: none; }
    ul {
      li { .mb(20); .pointer; .hide;
        p { .fs(40); .bold; .ls(-0.075em);
          s { .fs(24); .mr(10); }
        }
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
    h2 { .lh(90); .block; pointer-events: none; }
    .select-box { width:auto; .-b; .pb(0); .mt(0); .abs; .rt(40,0); .tr; height: auto;
      &:after { .hide; }
      ul {
        li { .-b; .block;
          p { .fs(24); color:#e3d7cb; .pb(5); .pr(2); .-box; .min-w(130); .-b(#e3d7cb,2px); .ls(-0.075em); .nowrap; .ib; .rel; .tr;
            s { .fs(18); }
            &:before { .cnt; .wh(0,2); .abs; .lb(0,-2); .bgc(#2d2d2f); transition: width 0.5s; }
          }
          &.active p { .fs(36); .bold; color:#2d2d2f; .-b(#2d2d2f,2px);
            s { .fs(24); }
          }
          &:hover p { color:#2d2d2f;
            &:before { .cnt; .wf; }
          }
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