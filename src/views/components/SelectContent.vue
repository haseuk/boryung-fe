<template>
  <div select-cont>
    <h2>{{ title }}</h2>
    <div class="select-box">
      <ul>
        <li><a><i class="kr">{{ list1 }}</i></a></li>
        <li><a><i class="kr">{{ list2 }}</i></a></li>
        <li><a><i class="kr">{{ list3 }}</i></a></li>
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
    return {}
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[select-cont] { .fs(0); .mb(88);
  h2 { .fs(80); .lh(115); .medium; .ls(-0.05em); }
  .select-box { .w(383); .-b(#2d2d2f,2px); .pb(12); .-box; .rel; .mt(60);
    &:after { .cnt; .wh(40,23); .contain('/images/mo/arr-d.png'); .abs; .rt(3,17); pointer-events: none; }
    ul {
      li { .fs(40); .bold; .h(48); .lh(48);
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
@media screen and(min-width: 1200px) {
  [select-cont] { .fs(0); .mb(0); .max-w(1200px); .mh-c; .pl(60px); .h(180px); .-box; .rel;
    h2 { .fs(80px); .lh(80px);}
    .select-box { .w(280px); .-b; .pb(0); .mt(0); .abs; .rt; .tr;
      &:after { .hide; }
      ul {
        li { .h(40px); .block; .mb(20px);
          a { .fs(24px); .lh(28px); color:#e3d7cb; .p(0,0,12px,40px); .-b(#e3d7cb,2px); .-box; .ib; .min-w(130px); }
        }
      }
    }
  }
}
</style>