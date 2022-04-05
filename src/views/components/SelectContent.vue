<template>
  <div select-cont>
    <h2>{{ title }}</h2>
    <div class="select-box">
      <ul>
        <li v-if="selectList1"><a><i class="kr">{{ list1 }}</i></a></li>
        <li v-if="selectList2"><a><i class="kr">{{ list2 }}</i></a></li>
        <li v-if="selectList3"><a><i class="kr">{{ list3 }}</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectContent",
  props: {
    title: { type: String, default: null },
    list1: { type: String, default: null },
    list2: { type: String, default: null },
    list3: { type: String, default: null },
  },
  data() {
    return {
      selectList1: true,
      selectList2: false,
      selectList3: false
    }
  },
  mounted() {

  },
  methods: {

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
      li { .fs(40); .bold; .mb(15);
        a { pointer-events: none; }
      }
    }
    &.active {
      &:after { transform: rotate(-180deg); }
      ul li { .ib;
        &:last-child { .mt(32); }
        a { pointer-events: auto; }
      }
    }
  }
}
@media screen and(min-width: 1240px) {
  [select-cont] { .mb(0); .max-w(1240); .mh-c; .pl(60); .h(180); .-box; .rel;
    h2 { .lh(80);}
    .select-box { .w(280); .-b; .pb(0); .mt(0); .abs; .rt(40,0); .tr;
      &:after { .hide; }
      ul {
        li { .fs(0); .mb(20);
          a { .fs(24); color:#e3d7cb; .-b(#e3d7cb,2); .pb(5); .-box; .ib; .min-w(130); }
        }
      }
    }
  }
}
</style>