<template>
  <div pagination>
    <a class="first" @click="first" :class="{disabled: pageNow === 1}"></a>
    <a class="prev" @click="prev" :class="{disabled: pageNow === 1}"></a>
    <div class="page-go">
      <a v-for="page in pageList" :key="page" :class="{on: page === pageNow }" @click="$emit('go', page)">{{ page }}</a>
    </div>
    <a class="next" @click="next" :class="{disabled: totalPages === pageNow}"></a>
    <a class="last" @click="end" :class="{disabled: totalPages === pageNow}"></a>
  </div>
</template>

<script>
export default {
  props: {
    paging: { type: Object, default: null },
  },
  data() {
    return {
      totalPages: 0,
      pageNow: 0,
      pageStart: 0,
      pageEnd: 0,
      pageList: null,
    };
  },
  watch: {
    paging: 'update',
  },
  methods: {
    first() {
      if (this.pageNow === 1) return;
      this.$emit('go', 1);
    },
    prev() {
      if (this.pageNow === 1) return;
      this.$emit('go', this.pageNow - 1);
    },
    next() {
      if (this.pageNow === this.totalPages) return;
      this.$emit('go', this.pageNow + 1);
    },
    end() {
      if (this.pageNow === this.totalPages) return;
      this.$emit('go', this.totalPages);
    },
    update() {
      const result = [];
      if (!this.paging) {
        result.push(1);
        return result;
      }
      if (this.paging) {
        const len = 5;
        const c = this.paging.pageNo - 1;
        const t = this.paging.pageCount;
        const s = (Math.floor(c / len) * len) + 1;
        const e = s + (t - s > len - 1 ? len - 1 : t - s);
        this.pageNow = this.paging.pageNo;
        this.totalPages = t;
        this.pageStart = s;
        this.pageEnd = e;
        for (let i = s; i <= e; i += 1) result.push(i);
      } else {
        this.pageNow = 0;
        this.totalPages = 0;
        this.pageStart = 0;
        this.pageEnd = 0;
        result.push(1);
      }
      this.pageList = result;
    }
  },
  mounted() {
    this.update()
  }
};
</script>
<style lang="less">
@import "~@/less/proj";
@use-rem: true;
@rem: 32;

[pagination] { .mt(30); .tc;
  > a { .ib; .vam; .mt(4);
    &.first { .wh(24,26); .contain('/images/mo/first-go.png'); }
    &.prev { .wh(14,26); .contain('/images/mo/prev-go.png'); .ml(65); .rel;
      &:after { .cnt; .wh(1,100%); .abs; .lt(-30,0); .bgc(#e3d7cb); }
    }
    &.next { .wh(13,24); .contain('/images/mo/next-go.png'); .mr(65); .rel;
      &:after { .cnt; .wh(1,100%); .abs; .rt(-30,0); .bgc(#e3d7cb); }
    }
    &.last { .wh(23,24); .contain('/images/mo/last-go.png'); }
    &.disabled { .o(0.2); cursor: default }
  }
  .page-go { .ib; .vam; .p(0,30); .-box;
    a { .fs(30); .lh(34); .ls(-0.05em); .w(40); .ib; .c(#a29992);
      &.on { .c(#3b3b3c); }
    }
  }
}
@media screen and(min-width: 1200px) {
  [pagination] { .mt(40px);
    > a { .mt(4px);
      &.first { .wh(24px,26px); }
      &.prev { .wh(14px,26px); .ml(70px);
        &:after { .lt(-35px,0); }
      }
      &.next { .wh(13px,24px); .mr(70px);
        &:after { .rt(-35px,0); }
      }
      &.last { .wh(23px,24px); }
    }
    .page-go { .p(0,60px);
      a { .fs(24px); .lh(34px); .w(32px); }
    }
  }
}
</style>