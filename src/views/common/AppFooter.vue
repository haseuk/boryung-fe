<template>
  <div app-footer>
    <div class="inner">
      <div class="copy c-ko">(주)보령 대표 장두현    <s>|</s>    서울특별시 종로구 창경궁로 136 (원남동) <s class="web">|</s><br class="mo"> 등록번호: <i>208-81-00281</i> 사업자정보확인    <s>|</s>    고객센터 전화문의 <i>080-708-8088</i><br> <i>Copyright (C) 2022 by Boryung Co.,Ltd. All Rights Reserved.</i></div>
      <div class="copy c-en">136, Changgyeonggung-ro, Jongno-gu, Seoul, Republic of Korea (03127)<br class="mo"> Copyright (C) 2022 by Boryung Co.,Ltd. All Rights Reserved.</div>
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
[app-footer] { .wf; .rel; .pb(20); .-box;
  .inner { .p(0,20,0,70); .-box;
    .mo { .ib; }
    .web { .hide!important; }
    .copy { .fs(18); .lh(24); color:#a29992; .tl; .-t(#000); .pt(40); .ls(-0.04em); .light;
      s { .ib; .w(25); .tc; }
      i { .bold; }
    }
    .go-top { .fs(20); .bold; color:#3b3b3c; .tc; .wh(80,70); .-a(#3b3b3c); .-box; .abs; .rt(20,-37); .pt(25); .bgc(#fff); z-index: 5;
      &:after { .cnt; .wh(17,10); .abs; .lt(30,14); .contain('/images/mo/go-top.png'); pointer-events: none; }
    }
  }
}

#app {
  &.home [app-footer] { .-t;
    .inner {
      &:after { .hide; }
      .copy { .-t; }
      .go-top { .hide; }
    }
  }
  &.ko .c-en { .hide; }
  &.en {
    .copy { .lh(31); }
    .c-ko { .hide; }
  }
}

@media screen and(min-width:1240px) {
  [app-footer] { .pb(0); .mt(0); .-t(#3b3b3c); z-index: 1;
    .inner { .max-w(1240); .mh-c; .p(25,0); .-box; .rel;
      .mo { .hide; }
      .web { .ib!important; }
      .copy { .fs(14); .medium; .p(0,0,0,60); .-t; }
      .go-top { .fs(20); .wh(80,70); .-a(#3b3b3c); .lt(50%,-27); .ml(552); .pt(29);
        &:after { .wh(17,10); .lt(50%,14); transform:translateX(-50%); }
      }
    }
  }
}
</style>