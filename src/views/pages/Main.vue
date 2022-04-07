<template>
  <div main>
    <div class="inner" :class="{ready}">
      <h1 class="h1">BORYUNG</h1>
      <ul class="page-link">
        <li><RouterLink to="ceo">CEO Letter</RouterLink></li>
        <li><RouterLink to="our-mission">Our Mission</RouterLink></li>
        <li><RouterLink to="our-history">Our History</RouterLink></li>
        <li><RouterLink to="reports">Reports</RouterLink></li>
        <li class="news"><RouterLink to="news">News</RouterLink></li>
        <li><RouterLink to="care">Care In Space</RouterLink></li>
        <li><RouterLink to="link">Link to Sub. Co.</RouterLink></li>
      </ul>
      <div class="home">
        <a href="">Pharma HOME</a>
      </div>
      <span class="v-bg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
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
[main] { .fs(0); .h(1313); .pt(275); .mb(100); .-box; .rel;
  .inner {
    h1 { .wh(559,83); .contain('/images/mo/boryung.png'); opacity:1; .mh-c; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
    .page-link { .tl; .abs; .lt(50%,456); .ml(-52);
      li { .fs(54); .ls(-0.05em); opacity: 1; transition: opacity 1.5s;
        &:nth-child(1) { transition-delay: 1.0s; }
        &:nth-child(2) { transition-delay: 1.6s; }
        &:nth-child(3) { transition-delay: 1.2s; }
        &:nth-child(4) { transition-delay: 1.8s; }
        &:nth-child(5) { transition-delay: 1.4s; }
        &:nth-child(6) { transition-delay: 2.0s; }
        &:nth-child(7) { transition-delay: 2.4s; }
        &:last-child { color:#a29992; }
      }
    }
    .home { .wh(330,100); .tl; .abs; .lt(50%,1069); .ml(-52); overflow: hidden; opacity: 1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-delay: 2.8s; transition-timing-function: ease-out;
      a { .fs(30); .ls(-0.025em); .bold; .lh(96); .f; .-a(#2d2d2f,2px); .-box; .ib; .pl(25); .rel;
        &:after { .cnt; .wh(35,20); .contain('/images/mo/arr-r.png'); .abs; .rt(25,40); }
      }
    }
    .v-bg { .wh(198,1322); .contain('/images/mo/boryung-ver.png'); .abs; .lt(-12,32); opacity: 1; transform: translateX(0); transition: opacity 1s, transform 1s; transition-delay: 3.4s;  transition-timing-function: ease-out; }

    &.ready {
      .h1, .home { transform: translateY(100px); opacity: 0; }
      .page-link li { opacity: 0; }
      .v-bg { opacity:0; transform: translateX(-100%); }
    }
  }
}

@media screen and(min-width:1240px) {
  [main] { height: auto; .pt(220); .tl; .pb(110); .mb(0);
    .inner { .max-w(1240); .mh-c; .pl(60); .-box; .rel;
      h1 { .wh(592,89); .contain('/images/pc/boryung.png'); .ib; }
      .page-link { .rel; .lt; .ml(0); .mt(70);
        li { .fs(48); .light; .medium; .rel; .mb(5);
          a { .w(490); .ib; }
          &.news:after { .cnt; .wh(143,20); .contain('/images/pc/arr-r.png'); .abs; .lb(345,0); }
        }
      }
      .home { top:auto; .rb(40,15);
        a { .lh(100); .pl(30);
          &:after { .rt(25,38); }
        }
      }
      .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(-70,-300); }
    }
  }
}
</style>