<template>
  <div app-footer>
    <div class="inner">
      <div class="copy">03127 서울특별시 종로구 창경궁로 136 보령빌딩<br class="mo"> Copyright (C) 2022 by Boryung Co.,Ltd. All Rights Reserved.</div>
      <a class="go-top" @click="goTop">TOP</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
    }
  },
  methods: {
    goTop() {
      window.scrollTo({top:0, behavior:'smooth'});
    }
  }

}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;
[app-footer] { .wf; .rel; .pb(20); .-box; .mt(190);
  .inner { .p(0,20,0,70); .-box;
    .mo { .ib; }
    .copy { .fs(18); .lh(31); color:#a29992; .tl; .pt(30); .-box; .-t(#000,2px); }
    .go-top { .fs(20); .black; color:#3b3b3c; .tc; .wh(80,70); .-a(#3b3b3c,2px); .-box; .abs; .rt(20,-37); .pt(25); .bgc(#fff); z-index: 5;
      &:after { .cnt; .wh(17,10); .abs; .lt(30,14); .contain('/images/mo/go-top.png'); pointer-events: none; }
    }
  }
}
@media screen and(min-width:768px) {
  [app-footer] .inner .copy { .lh(24); }
}
@media screen and(min-width:1240px) {
  [app-footer] { .pb(0); .mt(0); .-t(#3b3b3c); z-index: 1;
    .inner { .max-w(1240); .mh-c; .p(25,0); .-box; .rel;
      .mo { .hide; }
      .copy { .fs(14); .medium; .p(0,0,0,60); .-t; }
      .go-top { .fs(20); .wh(80,70); .-a(#3b3b3c,2); .lt(50%,-27); .ml(540); .pt(25);
        &:after { .wh(17,10); .lt(32,14); }
      }
    }
  }
}
</style>