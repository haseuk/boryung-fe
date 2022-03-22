<template>
  <div main >
    <h1 class="h1">BORYUNG</h1>
    <ul class="page-link">
      <li><a>CEO Letter</a></li>
      <li><a>About Us</a></li>
      <li><a>Reports</a></li>
      <li><a>News Release</a></li>
      <li><a>Care In Space</a></li>
      <li><a>Link to Sub. Co</a></li>
    </ul>
    <div class="home">
      <a href="">Pharma HOME</a>
    </div>
    <span class="v-bg"></span>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[main] { .fs(0); .h(1313); .pt(275); .-box;
  h1 { .wh(559,83); .contain('/images/mo/boryung.png'); .mh-c; transform: translateY(0); transition: all 1s; }
  .page-link { .tl; .abs; .lt(50%,456); .ml(-52);
    li { .fs(54); .ls(-0.05em); .mb(10); opacity: 1; transition: opacity 0.7s;
      &:nth-child(1) { transition-delay: 0.2s; }
      &:nth-child(2) { transition-delay: 0.8s; }
      &:nth-child(3) { transition-delay: 0.4s; }
      &:nth-child(4) { transition-delay: 1.0s; }
      &:nth-child(5) { transition-delay: 0.6s; }
      &:nth-child(6) { transition-delay: 1.2s; }
      &:last-child { color:#a29992; .mt(20); }
    }
  }
  .home { .wh(330,100); .tl; .abs; .lt(50%,1069); .ml(-52); transform: translateY(0); overflow: hidden; opacity: 1; transition: all 0.7s;
    a { .fs(30); .ls(-0.025); .bold; .lh(96); .f; .-a(#2d2d2f,2px); .-box; .ib; .pl(25); .rel;
      &:after { .cnt; .wh(35,20); .contain('/images/mo/arr-r.png'); .abs; .rt(25,40); }
    }
  }
  .v-bg { .wh(198,1322); .contain('/images/mo/boryung-ver.png'); .abs; .lt(-12,-53); opacity: 1; transition: opacity 0.7s; }

  .ready {
    &.h1 { transform: translateY(26vw); opacity: 1;
      &.up { .bg-y(83); opacity: 0; }
    }
    &.page-link li { opacity: 0; }
    &.home { opacity:0; transform: translateY(7vw); }
    &.v-bg { opacity:0; .l(-13.2vw); }
  }
}
</style>