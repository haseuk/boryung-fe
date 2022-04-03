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

[main] { .fs(0); .h(1313); .pt(275); .-box;
  .inner {
    h1 { .wh(559,83); .contain('/images/mo/boryung.png'); opacity:1; .mh-c; transform: translateY(0); transition: all 1.3s; transition-timing-function: ease-in-out; }
    .page-link { .tl; .abs; .lt(50%,456); .ml(-52);
      li { .fs(54); .ls(-0.05em); opacity: 1; transition-duration: 1.5s;
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
    .home { .wh(330,100); .tl; .abs; .lt(50%,1069); .ml(-52); transform: translateY(0); overflow: hidden; opacity: 1; transition-delay: 2.8s; transition-duration: 1s; transition-timing-function: ease-in-out;
      a { .fs(30); .ls(-0.025em); .bold; .lh(96); .f; .-a(#2d2d2f,2px); .-box; .ib; .pl(25); .rel;
        &:after { .cnt; .wh(35,20); .contain('/images/mo/arr-r.png'); .abs; .rt(25,40); }
      }
    }
    .v-bg { .wh(198,1322); .contain('/images/mo/boryung-ver.png'); .abs; .lt(-12,-53); opacity: 1; transition-delay: 3.4s; transition-duration: 1.2s; transition-timing-function: ease-in-out;  }

    &.ready {
      .h1, .home { transform: translateY(100%); opacity: 0; }
      .page-link li { opacity: 0; }
      .v-bg { opacity:0; .l(-13.2vw); }
    }
  }
}
@media screen and(min-width:1200px) {
  [main] { height: auto; .pt(330px); .tl;
    .inner { .max-w(1200px); .mh-c; .pl(60px); .-box; .rel;
      h1 { .wh(592px,89px); .contain('/images/pc/boryung.png'); .ib; }
      .page-link { .rel; .lt; .ml(0); .mt(70px);
        li { .fs(48px); .medium; .ls(-0.05em); .rel; .mb(5px);
          a { .w(490px); .ib; }
          &.news:after { .cnt; .wh(143px,20px); .contain('/images/pc/arr-r.png'); .abs; .lb(345px,0); }
        }
      }
      .home { .wh(330px,100px); .tl; .abs; top:auto; .lb(50%,15px); .ml(270px);
        a { .fs(30px); .lh(100px); .pl(30px);
          &:after {  .wh(35px,20px); .rt(25px,38px); }
        }
      }
      .v-bg { .hide; }
    }

  }
}
</style>