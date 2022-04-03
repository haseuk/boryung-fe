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
  .inner {
    .mo { .ib; }
    &:after { .cnt; .wh(83vw,4); .bgc(#000); .abs; .lt(70,0); }
    .copy { .fs(18); .lh(31); color:#a29992; .tl; .p(30,0,0,70); .-box; }
    .go-top { .fs(20); .black; color:#3b3b3c; .tc; .wh(80,70); .-a(#3b3b3c,2px); .-box; .abs; .rt(20,-37); .pt(25); .bgc(#fff); z-index: 5;
      &:after { .cnt; .wh(17,10); .abs; .lt(30,14); .contain('/images/mo/go-top.png'); pointer-events: none; }
    }
  }
}
@media screen and(min-width:1200px) {
  [app-footer] { .pb(0); .mt(0); .-t(#3b3b3c);
    .inner { .max-w(1200px); .mh-c; .p(25px,0); .-box; .rel;
      .mo { .hide; }
      &:after { .hide; }
      .copy { .fs(14px); .lh(31px); .medium; .p(0); }
      .go-top { .fs(20px); .wh(80px,70px); .-a(#3b3b3c,2px); .rt(-42px,-27px); .pt(25px);
        &:after { .wh(17px,10px); .lt(32px,14px); }
      }
    }
  }
}
</style>