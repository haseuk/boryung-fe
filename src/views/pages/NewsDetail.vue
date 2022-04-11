<template>
  <div detail :class="{ready}" v-if="detail">
    <h2>News.</h2>
    <div class="news-visual"><img :src="file(detail)" alt=""></div>
    <div class="v-tit">{{ detail.title }}</div>
    <div class="v-txt" v-html="detail.cont">
    </div>
    <LngLink to="/news" class="list-go"><img src="/images/mo/before.png" alt="">List</LngLink>
    <span class="v-bg"></span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsDetail",
  data() {
    return {
      ready: true,
      detail: null,
      params: { perPage: 4, pageNo: 1 }
    }
  },
  methods: {
    async loadDetail() {
      const { data } = await axios.get(`/api/board/${this.lang}/news/${this.$route.params.sq}`)
      this.detail = data.detail
      await this.sleep(100)
      this.ready = false;
    }
  },
  mounted() {
    this.loadDetail()
  },
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[detail] { .mt(140); .p(0,70); .tl; .pb(140); .-box;
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; .mb(65); }
  .news-visual { .w(610); .mh-c; .-a(#e3d7cb); .bgc(#fff);
    img { .f; }
  }
  .v-tit { .fs(30); .lh(37); .bold; color:#3b3b3c; .ls(-0.05em); .mt(48); }
  .v-txt { .fs(24); .lh(30); color:#a29992; .mt(40); .p(25,0,50); .-box; .-t(#a29992); .-b(#a29992);
    br { .block; content: ''; .h(15); }
    strong { .bold; color: #666; }
    h3 { .fs(26); line-height: 1.5; .bold; color: #333; .m(0); }
  }
  .list-go { .fs(30); .ls(-0.05em); .block; .mh-c; .mt(30); .tc;
    img { .wh(28,24); .ib; pointer-events: none; .mr(25); }
  }
  .v-bg { .hide; }



  h2, .news-visual, .v-tit, .v-txt, .list-go, .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s; transition-timing-function: ease-out; }
  .news-visual { transition-delay: 0.8s; }
  .v-tit { transition-delay: 1.2s; }
  .v-txt { transition-delay: 1.6s; }
  .list-go { transition-delay: 2.0s; }
  .v-bg { transform: translateX(0); transition-delay: 2.4s; }
  &.ready {
    h2, .news-visual, .v-tit, .v-txt, .list-go, .v-bg { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
}
@media screen and(min-width: 1240px) {
  [detail] { .max-w(1240); .p(180,40,100,60); .-box; .mh-c; .mt(0); .tl;
    h2 {.lh(80); .mb(105); }
    .news-visual { .w(800); .ib; }
    .v-tit { .fs(24); .lh(37); .mt(30); }
    .v-txt { .fs(16); .lh(24); .mt(24); .p(45,0,45);
      h3 { .fs(20); }
      br { .h(19); }
    }
    .list-go { .mt(40);
      img { .mr(20); }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; z-index: -1; }
  }
}
</style>
