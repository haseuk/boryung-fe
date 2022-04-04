<template>
  <div mission :class="{ready}">
    <h2>Our Mission.</h2>
    <p class="top-tit">언제 어디서나,<br class="mo">누구나 행복한 삶을 누릴 수 있도록<br>
      <em>인류의 건강을 위해 꼭 필요한<br class="mo"> 헬스케어 기업이 되겠습니다.</em>
    </p>
    <p class="bg-tit">Mission</p>
    <div class="core-values">
      <p class="c-tit">핵심가치</p>
      <ul>
        <li>
          <em>Become Irreplaceable</em>
          대체할 수 없는 기업이 되자
        </li>
        <li>
          <em>Think Long-Term</em>
          장기적 관점으로 판단하자
        </li>
        <li>
          <em>Pursue Extreme Transparency</em>
          투명하고 깨끗한 기업이 되자
        </li>
        <li>
          <em>Be Nice</em>
          상대방에 친절한 기업이 되자
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mission',
  data() {
    return {
      ready:true,
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

[mission] { .fs(0); .mt(140); .tc;
  .mo { .ib; }
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(65); .ml(70);}
  .top-tit { .fs(30); .medium; color:#2d2d2f; .ls(-0.05em);
    em { .fs(48); }
  }
  .bg-tit { .fs(120); .lh(150); color:#e3d7cb; .bold; .ls(-0.05em); opacity: 0.4; }
  .core-values { .mt(127);
    .c-tit { .fs(48); .semi-bold; .ls(-0.05em); .w(252); .ib; .bgc(#fff); .rel;
      &:before { .cnt; .wh(252,100%); .bgc(#fff); .abs; .lt(50%,0); .ml(-126); z-index: -1; }
      &:after { .cnt; .bgc(#e3d7cb); .wh(650,1); .abs; .lt(50%,50%); .ml(-325); z-index: -2; }
    }
    ul { .mt(75);
      li { .fs(30); .semi-bold; .ls(-0.05em); .rel; .mb(40);
        &:after { .cnt; .wh(22,22); .ls(-0.05em); .bgc(#e3d7cb); .br(50%); .abs; .lt(50%,-10); .ml(-11); }
        em { .fs(48); .block; .break-all; }
        &:last-child:after { .t(-15); }
      }
    }
  }
  h2, .top-tit, .bg-tit, .c-tit, li { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-in-out; }
  .top-tit { transition-delay: 1s; }
  .bg-tit { transition-delay: 1.4s; opacity: 0.4; }
  .c-tit { transition-delay: 1.8s; }
  li {
    &:nth-child(1) { transition-delay: 2.2s; }
    &:nth-child(2) { transition-delay: 2.6s; }
    &:nth-child(3) { transition-delay: 3.0s; }
    &:nth-child(4) { transition-delay: 3.4s; }
  }
  &.ready {
    h2, .top-tit, .bg-tit, .c-tit, li { opacity: 0; transform: translateY(100%); }
  }
}
@media screen and(min-width: 1200px) {
  [mission] { .p(0); .mt(287px); .max-w(1200px); .mh-c; .pb(320px);
    .mo { .hide; }
    h2 { .fs(80px); .lh(80px); .mb(105px); .ml(60px); }
    .top-tit { .fs(24px);
      em { .fs(36px); .mt(13px); .ib; }
    }
    .bg-tit { .fs(120px); .lh(150px); .mt(10px); }
    .core-values { .mt(150px);
      .c-tit { .fs(48px); .w(252px);
        &:before { .cnt; .wh(252px,100%); .ml(-126px); }
        &:after { .wh(652px,1px); .lt(50%,50%); .ml(-326px); }
      }
      ul { .mt(75);
        li { .fs(30px); .mb(50px);
          &:after { .cnt; .wh(22px,22px); .lt(50%,-10px); .ml(-11px); }
          em { .fs(48px); .lh(67px); }
          &:last-child:after { .t(-15px); }
        }
      }
    }
  }
}
</style>
