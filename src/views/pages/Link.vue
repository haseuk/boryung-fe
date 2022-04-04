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
  h2, .boryung, .other-link li { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-in-out; }
  h2 { transition-delay: 0.8s; }
  .boryung { transition-delay: 1.6s; }
  .other-link li {
    &:nth-child(1) { transition-delay: 2.0s; }
    &:nth-child(2) { transition-delay: 2.4s; }
    &:nth-child(3) { transition-delay: 2.8s; }
    &:nth-child(4) { transition-delay: 3.2s; }
  }
  &.ready {
    h2, .boryung, .other-link li { opacity:0; transform: translateY(100%); }
  }
}
@media screen and(min-width: 1200px) {
  [link] { .p(0); .mt(287px); .max-w(1200px); .mh-c; .pb(320px);
    h2 { .fs(80px); .lh(80px); .mb(105px); .ml(60px); }
    .boryung { .w(530px); .p(36px,0); .ml(60px);
      img { .wh(303px,45px); }
      &:after { .cnt; .wh(56px,20px); .rt(10px,58px); }
    }
    .other-link { .w(385px); .pl(0); .mt(0); .abs; .lt(660px,220px);
      li { .wh(100%,63px); .mb(56px);
        &:after { .cnt; .wh(56px,20px); .rt(0,42px);  }
        a { .wh(100%,63px);
          &:after { .cnt; .wh(240px,63px); }
        }
      }
    }
  }
}
</style>