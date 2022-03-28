<template>
  <div pagination>
    <a class="first"></a>
    <a class="prev"></a>
    <div class="page-go">
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <a>4</a>
      <a>5</a>
    </div>
    <a class="next"></a>
    <a class="last"></a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {}
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[pagination] { .mt(30); .tc;
  > a { .ib; .vam; .mt(4);
    &.first { .wh(24,26); .contain('/images/mo/first-go.png'); }
    &.prev { .wh(14,26); .contain('/images/mo/prev-go.png'); .ml(65); .rel;
      &:after { .cnt; .wh(1,100%); .abs; .lt(-30,0); .bgc(#e3d7cb); }
    }
    &.next { .wh(13,24); .contain('/images/mo/next-go.png'); .mr(65); .rel;
      &:after { .cnt; .wh(1,100%); .abs; .rt(-30,0); .bgc(#e3d7cb); }
    }
    &.last { .wh(23,24); .contain('/images/mo/last-go.png'); }
  }
  .page-go { .ib; .vam; .p(0,30); .-box;
    a { .fs(30); .lh(34); .ls(-0.05em); .w(40); .ib; }
  }
}
@media screen and(min-width: 1200px) {
  [pagination] { .mt(40px);
    > a { .mt(4px);
      &.first { .wh(24px,26px); }
      &.prev { .wh(14px,26px); .ml(70px);
        &:after { .lt(-35px,0); }
      }
      &.next { .wh(13px,24px); .mr(70px);
        &:after { .rt(-35px,0); }
      }
      &.last { .wh(23px,24px); }
    }
    .page-go { .p(0,60px);
      a { .fs(24px); .lh(34px); .w(32px); }
    }
  }
}
</style>