<template>
  <div app-footer>
    <div class="copy">03127 서울특별시 종로구 창경궁로 136 보령빌딩<br> Copyright (C) 2022 by Boryung Co.,Ltd. All Rights Reserved.</div>
    <a class="go-top">TOP</a>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {}
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;
[app-footer] { .rel; .pb(20); .-box; .mt(190);
  &:after { .cnt; .wh(83%,4); .bgc(#000); .abs; .lt(70,0); }
  .copy { .fs(18); .lh(31); color:#a29992; .tl; .p(30,0,0,70); .-box; }
  .go-top { .fs(20); .black; color:#3b3b3c; .tc; .wh(80,70); .-a(#3b3b3c,2px); .-box; .abs; .rt(20,-37); .pt(30); .bgc(#fff); z-index: 5;
    &:after { .cnt; .wh(17,10); .abs; .lt(30,15); .contain('/images/mo/go-top.png'); pointer-events: none; }
  }
  &.main-ft .go-top { .hide; }
}
</style>