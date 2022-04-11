<template>
  <div news :class="{ready, 'list-ready': listReady}">
    <h2>News.</h2>
    <ul>
      <li v-for="item in list" :key="item.sq">
        <span class="list-vis"><img :src="file(item)" alt=""></span>
        <LngLink :to="`/news/detail/${item.sq}`">
          <p class="l-tit">{{ item.title }}</p>
          <p class="l-txt">{{ item.description }}</p>
        </LngLink>
      </li>
    </ul>
    <Pagination :paging="paging" @go="changePage" />
    <span class="v-bg"></span>
  </div>
</template>

<script>
import axios from 'axios'
import Pagination from "@/views/components/Pagination";
export default {
  name: "News",
  components: {Pagination},
  data() {
    return {
      ready: true,
      listReady: true,
      list: [],
      paging: {},
      params: { perPage: 3, pageNo: 1 }
    }
  },
  watch: {
    $route() {
      this.changePage(1)
    }
  },
  methods: {
    changePage(pageNo) {
      this.params.pageNo = pageNo;
      this.loadList()
    },
    async loadList() {
      this.listReady = true;
      const { data } = await axios.get(`/api/board/${this.lang}/news`, { params: this.params })
      this.list = data.list;
      this.paging = data.paging;
      await this.sleep(100)
      this.ready = false;
      this.listReady = false;
    }
  },
  mounted() {
    this.loadList()
  },
}
</script>

<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[news] { .mt(140); .p(0,70); .tl; .pb(200); .-box;
  h2 { .fs(80); .lh(100); .medium; .ls(-0.05em); .tl; }
  ul { .mt(75);
    li { .pb(50); .mb(50); .-b(#a29992); .-box;
      a { .f; .pointer; }
      .list-vis { .wh(520,142); .ib; .-a(#e3d7cb); .mb(43); .bgc(#fff); overflow: hidden;
        img { .wf; transform: translateY(-50%); .mt(71) }
      }
      .l-tit { .fs(24); .bold; color:#3b3b3c; .mb(30); .ls(-0.05em); }
      .l-txt { .fs(24); color:#a29992; .ls(-0.025em); .wf; overflow: hidden; text-overflow: ellipsis; display: -webkit-inline-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; word-wrap:break-word;
        &:hover { color:#2d2d2f; }
      }
    }
  }
  .v-bg { .hide; }

  h2,  ul li, [pagination], .v-bg { opacity:1; transform: translateY(0); transition: opacity 1s, transform 1s, color 0.4s; transition-timing-function: ease-out; }
  ul li {
    &:nth-child(1) { transition-delay: 1s; }
    &:nth-child(2) { transition-delay: 1.6s; }
    &:nth-child(3) { transition-delay: 2.2s; }
  }
  [pagination] { transition-delay: 2.8s; }
  .v-bg { transform: translateX(0); transition-delay: 3.4s; }
  &.ready {
    h2, ul li, [pagination] { opacity:0; transform: translateY(100px); }
    .v-bg { opacity:0; transform: translateX(-100%); }
  }
  &.list-ready {
    ul li, [pagination] { opacity:0; transform: translateY(100px); }
  }
}
@media screen and(min-width: 1240px) {
  [news] { .max-w(1240); .p(180,40,200,60); .-box; .mh-c; .mt(0);
    h2 { .lh(80); }
    ul { .mt(110);
      li { .pb(30); .w(810);
        .list-vis { .wh(580,158); .mb(20);
          img { .mt(79) }
        }
        .l-tit { .fs(18); .mb(15); }
        .l-txt { .fs(16); -webkit-line-clamp: 2; }
      }
    }
    .v-bg { .wh(170,1141); .contain('/images/pc/boryung-ver.png'); .abs; .lt(50%,32); .ml(-690); .ib; z-index: -1; }
  }
}
</style>