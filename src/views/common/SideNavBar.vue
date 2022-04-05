<template>
  <div snb class="ready">
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

[snb] { transform: translateX(100%); opacity: 0; .wh(0); }
@media screen and(min-width: 1800px) {
  [snb] { .bgc(#fbf9f7); .p(518,0,0,40); .-box; .ib; .wh(260,100%); .abs; .rt; .tl; z-index: 1; opacity: 1; transform: translateY(0); transition: opacity 0.8s, transform 0.8s; transition-timing-function: ease-in-out;
    a { .fs(18); .lh(26); color:#e3d7cb; .medium; .ls(-0.05em); .block; .mb(20); .rel;
      &:after { .cnt; .wh(100%,1); .bgc(#e3d7cb); .abs; .lt(140,14); }
    }
  }
}

</style>