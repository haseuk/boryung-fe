<template>
  <PSection home-other theme="type1">
    <ul>
      <li v-for="item in list" :key="item.seq">{{ item.title }}</li>
    </ul>
  </PSection>
</template>

<script>
import { sleep } from '@/utils';

export default {
  name: 'HomeOther',
  data() {
    return {
      list: null
    };
  },
  async asyncData({ route }) {
    await sleep(500);
    return route.query.flag === '1' ? {
      list: [
        { seq:1, title: '오 다른 제목1' },
        { seq:2, title: '오 다른 제목2' },
        { seq:3, title: '오 다른 제목3' },
      ]
    } : {
      list: [
        { seq:1, title: '오 제목1' },
        { seq:2, title: '오 제목2' },
        { seq:3, title: '오 제목3' },
      ]
    };
  }
};
</script>

<style lang="less">
@import "~@/less/proj";
[home-other] { .bgc(#000); .rel;
  li { .c(#fff); .fs(20); .p(10); }
  li + li { .-t(#fff); }
}
</style>
