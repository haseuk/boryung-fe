<template>
  <div history :class="{ready}">
    <h2>Our History.</h2>
    <div v-if="lang === 'ko'">
      <p class="tit">2022년 4월,<br class="mo">
        보령의 새로운 도전이 시작됩니다.</p>
    </div>
    <div v-else></div>
    <span class="v-bg"></span>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      ready: true,
    };
  },
  mounted() {
    setTimeout(() =>{ this.ready = false },500)
  },
};
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[history] { .fs(0); .p(0,60,0,70); .-box; .mt(140); .pb(200); .-box;
  .web { .hide; }
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(75); }
  ul {
    &:last-child { .mb(0); }
    li { .mb(19); .wf;
      &:last-child { .mb(0); }
      &.tit { .mt(80);
        p { .fs(72); .lh(100); .medium; color:#e3d7cb; .ls(-0.05em); }
      }
      p { .fs(20); .lh(29); color:#2d2d2f; .ls(-0.05em); .ib; .medium; .vat;
        &.date { .w(18%); }
        &.txt { .w(82%); }
      }
      &.b p { .bold;
        &.txt { .fs(24); }
      }
    }
  }
  h2, ul li, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  ul li { transition: opacity 0.5s, transform 0.8s; }
  @li: 35;
  .loop(@i) when (@i > 0){
    ul li:nth-child(@{i}) {
      transition-delay:1s + (0.1 * @i);
    }
    .loop(@i - 1);
  }
  .loop(@li);
  .v-bg { transition-delay: 3s; }
  &.ready {
    h2 { opacity:0; transform: translateY(100px); }
    ul li.tit { opacity:0; transform: translateY(80%); }
    ul li { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  .v-bg { .hide; }
}

#app {
  &.ko {
    .c-en { .hide; }
    .c-ko { .block; }
  }
  &.en {
    .c-ko { .hide; }
    .c-en { .block; }
  }
}
@media screen and(min-width: 1240px) {
  [history] { .max-w(1240); .p(180,40,200,60); .-box; .mh-c; .mt(0);
    .web { .ib; }
    h2 { .lh(80); .mb(105); }
    ul { .pl(150); .-box;
      li {
        &.tit p { .lh(75); }
        p {
          &.date { .w(115); }
          &.txt { width:auto; }

        }
        &.b p {
          &.txt { .fs(24); }
        }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
</style>
