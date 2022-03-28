<template>
  <div snb>
    <RouterLink to="ceo" >CEO Letter</RouterLink>
    <RouterLink to="our-mission" >Our Mission</RouterLink>
    <RouterLink to="our-history" >Our History</RouterLink>
    <RouterLink to="reports" >Reports</RouterLink>
    <RouterLink to="news" >News</RouterLink>
    <RouterLink to="care" >Care In Space</RouterLink>
    <RouterLink to="link" >Link to Sub. Co.</RouterLink>
  </div>
</template>

<script>
export default {
  name: "SideNavBar",
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[snb] { .hide; }
@media screen and(min-width: 1200px) {
  [snb] { .bgc(#fbf9f7); .p(518px,0,0,40px); .-box; .ib; .wh(50vw,100%); .min-w(260px); .fix; .lt(50%,0); .ml(640px); .tl; z-index: 1;
    a { .fs(18px); .lh(26px); color:#e3d7cb; .medium; .ls(-0.05em); .block; .mb(20px); .rel;
      &:after { .cnt; .wh(100%,1px); .bgc(#e3d7cb); .abs; .lt(140px,14px); }
    }
  }
}

</style>