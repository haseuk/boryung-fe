<template>
  <div mission :class="{ready}">
    <h2>Our Mission.</h2>
    <div class="c-ko">
      <p class="top-tit">
        <em>인류의 건강을 위해<br class="mo"> 꼭 필요한 기업이 되겠습니다.</em>
      </p>
      <p class="bg-tit">Mission</p>
      <div class="core-values">
        <p class="c-tit">핵심가치</p>
        <ul>
          <li>
            <em>Become Irreplaceable</em>
            대체할 수 없는 기업
          </li>
          <li>
            <em>Think Long-Term</em>
            장기적 관점으로 판단하는 기업
          </li>
          <li>
            <em>Pursue Extreme Transparency</em>
            투명하고 깨끗한 기업
          </li>
          <li>
            <em>Be Nice</em>
            상대방에 친절한 기업
          </li>
        </ul>
      </div>
    </div>
    <div class="c-en">
      <p class="top-tit">
        <em>Boryung will devote itself<br class="mo"> to become an indispensable<br> contributor to human health.</em>
      </p>
      <p class="bg-tit">Mission</p>
      <div class="core-values">
        <p class="c-tit">Core Value</p>
        <ul>
          <li>
            <em>Become Irreplaceable</em>
          </li>
          <li>
            <em>Think Long-Term</em>
          </li>
          <li>
            <em>Pursue Extreme Transparency</em>
          </li>
          <li>
            <em>Be Nice</em>
          </li>
        </ul>
      </div>
    </div>
    <span class="v-bg"></span>
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

[mission] { .fs(0); .mt(140); .tc; .pb(200); .-box;
  .mo { .ib; }
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(65); .ml(70); .rel; z-index: 1; }
  .top-tit { .fs(30); .medium; color:#2d2d2f; .ls(-0.05em);
    em { .fs(48); }
  }
  .bg-tit { .fs(120); .lh(150); color:#e3d7cb; .bold; .ls(-0.05em); opacity: 0.4; }
  .core-values { .mt(150);
    .c-tit { .fs(60); .semi-bold; .ls(-0.05em); .p(0,40); .-box; .ib; .bgc(#fff); .rel; .nowrap;
      &:before { .cnt; .wh(100%,100%); .bgc(#fff); .abs; .lt(50%,0); transform: translateX(-50%); z-index: -1; }
      &:after { .cnt; .bgc(#e3d7cb); .wh(650,1); .abs; .lt(50%,50%); .ml(-325); z-index: -2; }
    }
    ul { .mt(75);
      li { .fs(30); .semi-bold; .ls(-0.05em); .rel; .mb(60);
        &:after { .cnt; .wh(22,22); .ls(-0.05em); .bgc(#e3d7cb); .br(50%); .abs; .lt(50%,-20); .ml(-11); }
        em { .fs(48); .block; .break-all; }
        &:last-child { .mb(0);
          &:after { .t(-25); }
        }
      }
    }
  }
  h2, .top-tit, .bg-tit, .c-tit, ul li, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .top-tit { transition-delay: 1s; }
  .bg-tit { transition-delay: 1.4s; opacity: 0.4; }
  .c-tit { transition-delay: 1.8s; }
  ul {
    li {
      &:nth-child(1) { transition-delay: 2.2s; }
      &:nth-child(2) { transition-delay: 2.6s; }
      &:nth-child(3) { transition-delay: 3.0s; }
      &:nth-child(4) { transition-delay: 3.4s; }
    }
  }
  .v-bg { transform: translateX(0); transition-delay: 3.8s; }
  &.ready {
    h2, .top-tit, .bg-tit, .c-tit, ul li { opacity: 0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  .v-bg { .hide; }
}


@media screen and(min-width: 1200px) {
  [mission] { .p(180,40,200,60); .max-w(1240); .-box; .mh-c; .mt(0);
    .mo { .hide; }
    h2 { .mb(105); .ml(0); }
    .top-tit { .fs(24);
      em { .fs(36); .mt(13); .ib; }
    }
    .bg-tit { .mt(10); }
    .core-values {
      .c-tit { .fs(48); }
      ul { .mt(90);
        li { .mb(70);
          em { .lh(67); }
        }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; }
  }
}
</style>
