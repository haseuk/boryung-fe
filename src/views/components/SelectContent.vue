<template>
  <div select-cont>
    <h2 mov>CEO Letter.</h2>
    <div class="select-box" mov>
      <ul>
        <li><a><i class="kr">김정균 대표이사</i><i class="en">CEO Jay Kim</i></a></li>
        <li><a><i class="kr">장두현 대표이사</i><i class="en">CEO Daniel Chang</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectContent",
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
  h2 { .fs(80); .lh(115); .medium; .ls(-0.05em); .mt(130); }
  .select-box { .w(383); .-b(#2d2d2f,4px); .pb(12); .-box; .rel; .mt(60);
    &:after { .cnt; .wh(40,23); .contain('/images/mo/arr-d.png'); .abs; .rt(3,17); pointer-events: none; }
    ul {
      li { .fs(40); .bold; .h(48); .lh(48); .hide;
        a { pointer-events: none; }
        &:nth-child(1) { .ib; }
        i.en { .ls(-0.075em); }
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
</style>