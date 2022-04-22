<template>
  <div link :class="{ready}">
    <h2>Link to Sub. Co.</h2>
    <LngLink to="/" class="boryung"><img src="/images/mo/boryung-xs.png" alt="">
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="57.5px" height="21.5px">
        <path fill-rule="evenodd"  stroke="rgb(45, 45, 47)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,19.499 L53.499,19.499 L35.499,1.499 "/>
      </svg>
    </LngLink>
    <ul class="other-link">
      <li>
        <a href="http://www.boryungconsumer.co.kr/" target="_blank" class="br-health">BORYUNG Consumer Healthcare</a>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="57.5px" height="21.5px">
          <path fill-rule="evenodd"  stroke="rgb(45, 45, 47)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,19.499 L53.499,19.499 L35.499,1.499 "/>
        </svg>
      </li>
      <li>
        <a href="https://www.boryungand.co.kr/html/front/main/main.do" target="_blank" class="br-medical">BORYUNG A&D Medical</a>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="57.5px" height="21.5px">
          <path fill-rule="evenodd"  stroke="rgb(45, 45, 47)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,19.499 L53.499,19.499 L35.499,1.499 "/>
        </svg>
      </li>
      <li>
        <a href="https://www.vigencell.com/kr/index.asp" target="_blank" class="vigencell">ViGENCELL</a>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="57.5px" height="21.5px">
          <path fill-rule="evenodd"  stroke="rgb(45, 45, 47)" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M0.499,19.499 L53.499,19.499 L35.499,1.499 "/>
        </svg>
      </li>
      <li>
        <a class="recuon">RECUON</a>
      </li>
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

[link] { .fs(0); .p(0,70); .-box;  .tl; .rel; .mt(140);  .pb(200);
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(65); }
  .boryung { .w(86%); .p(37,0); .-box; .-t(#2d2d2f,2px); .-b(#2d2d2f,2px); .ib; .rel;
    img { .wh(303,45); }
    &:after { .cnt; .wh(56,20); .contain('/images/mo/arr-r-xl.png'); pointer-events: none; .abs; .rt(10,58); }
    .arrow { .hide; }
  }
  .other-link { .w(86%); .pl(21%); .-box; .mt(80);
    li { .wh(100%,63); .rel; .mb(56);
      &:after { .cnt; .wh(56,20); .contain('/images/mo/arr-r-xl.png'); .abs; .rt(5,42); pointer-events: none; }
      &:last-child:after { .hide; }
      a { .wh(100%,63); .rel;
        &:after { .cnt; .wh(240,63); }
        &.br-health:after { .contain('/images/mo/br-health.png'); }
        &.br-medical:after { .contain('/images/mo/br-medical.png'); }
        &.vigencell:after { .contain('/images/mo/vigencell.png'); }
        &.recuon:after { .contain('/images/mo/recuon.png'); }
      }
      .arrow { .hide; }
    }
  }
  .v-bg { .hide; }


  h2, .boryung, .other-link li, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  h2 { transition-delay: 0.8s; }
  .boryung { transition-delay: 1.2s; }
  .other-link li {
    &:nth-child(1) { transition-delay: 1.6s; }
    &:nth-child(2) { transition-delay: 2.0s; }
    &:nth-child(3) { transition-delay: 2.4s; }
    &:nth-child(4) { transition-delay: 2.8s; }
  }
  .v-bg { transform: translateX(0); transition-delay: 3.8s; }
  &.ready {
    h2, .boryung, .other-link li { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
}
@media screen and(min-width: 1240px) {
  [link] { .max-w(1240); .p(180,40,530,60); .-box; .mh-c; .mt(0);
    h2 { .lh(80); .mb(105); }
    .boryung { .w(530); .p(36,0);
      &:after { .hide; }
      .arrow { .ib; .abs; .rt(10,58); }
      &:hover {
        .arrow { stroke-dasharray: 200; stroke-dashoffset: 200; animation: dash 0.7s linear; animation-fill-mode: both; }
      }
    }
    .other-link { .w(385); .pl(0); .mt(0); .abs; .lt(660,400);
      li {
        &:after { .rt(0,42); .hide; }
        .arrow { .ib; .abs; .rt(0,42); pointer-events: none; }
        &:hover {
          .arrow { stroke-dasharray: 200; stroke-dashoffset: 200; animation: dash 0.7s linear; animation-fill-mode: both; }
        }
        @keyframes dash {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,-80); .ml(-690); .ib; }
  }
}
</style>