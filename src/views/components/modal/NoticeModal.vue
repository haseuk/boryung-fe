<template>
  <div notice-modal>
    <div class="dim"></div>
    <div class="content">
      <div v-html="content"></div>
      <a @click="$emit('resolve')">확인</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeModal',
  props: {
    options: Object
  },
  computed: {
    content() {
      return this.options && this.options.content;
    },
  },
  mounted() {
    this.$scroll.freeze();
  },
  beforeDestroy() {
    this.$scroll.release();
  }
};
</script>

<style lang="less">
@import "~@/less/proj";
[notice-modal] {  .tc;
  .dim { .abs; .f; .lt; .bgc(rgba(0,0,0,0.3)); }
  .content { .p(30); .fs(20); .bgc(#fff); .abs; .lt(50%,50%); .t-xyc;
    a { .-a(#333); .p(5,10); .ib; .mt(20); }
  }
}
</style>
