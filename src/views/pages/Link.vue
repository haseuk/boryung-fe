<template>
  <div link :class="{ready}">
    <h2>Link to Sub. Co.</h2>
    <a class="boryung"><img src="/images/mo/boryung-xs.png" alt=""></a>
    <ul class="other-link">
      <li><a href="" class="br-health">BORYUNG Consumer Healthcare</a></li>
      <li><a href="" class="br-medical">BORYUNG A&D Medical</a></li>
      <li><a href="" class="vigencell">ViGENCELL</a></li>
      <li><a href="" class="recuon">RECUON</a></li>
    </ul>
    <span class="v-bg"></span>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
      ready: true,
    }
  },
  mounted() {
    setTimeout(() =>{ this.ready = false },500)
  },
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[link] { .fs(0); .p(0,70); .-box; .mt(140); .tl; .rel;
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(65); }
  .boryung { .w(86%); .p(37,0); .-box; .-t(#2d2d2f,2px); .-b(#2d2d2f,2px); .ib; .rel;
    img { .wh(303,45); }
    &:after { .cnt; .wh(56,20); .contain('/images/mo/arr-r-xl.png'); pointer-events: none; .abs; .rt(10,58); }
  }
  .other-link { .w(86%); .pl(21%); .-box; .mt(80);
    li { .wh(100%,63); .rel; .mb(56);
      &:after { .cnt; .wh(56,20); .contain('/images/mo/arr-r-xl.png'); .abs; .rt(5,42);  }
      &:last-child:after { .hide; }
      a { .wh(100%,63); .rel;
        &:after { .cnt; .wh(240,63); }
        &.br-health:after { .contain('/images/mo/br-health.png'); }
        &.br-medical:after { .contain('/images/mo/br-medical.png'); }
        &.vigencell:after { .contain('/images/mo/vigencell.png'); }
        &.recuon:after { .contain('/images/mo/recuon.png'); }
      }
    }
  }
  .v-bg { .hide; }


  h2, .boryung, .other-link li, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-in-out; }
  h2 { transition-delay: 0.8s; }
  .boryung { transition-delay: 1.6s; }
  .other-link li {
    &:nth-child(1) { transition-delay: 2.0s; }
    &:nth-child(2) { transition-delay: 2.4s; }
    &:nth-child(3) { transition-delay: 2.8s; }
    &:nth-child(4) { transition-delay: 3.2s; }
  }
  .v-bg { transform: translateX(0); transition-delay: 3.8s; }
  &.ready {
    h2, .boryung, .other-link li { opacity:0; transform: translateY(100%); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
}
@media screen and(min-width: 1200px) {
  [link] { .max-w(1240); .p(180,40,180,60); .-box; .mh-c; .mt(0);
    h2 { .lh(80); .mb(105); }
    .boryung { .w(530); .p(36,0); }
    .other-link { .w(385); .pl(0); .mt(0); .abs; .lt(660,400);
      li {
        &:after { .rt(0,42);  }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,-80); .ml(-690); .ib; }
  }
}
</style>