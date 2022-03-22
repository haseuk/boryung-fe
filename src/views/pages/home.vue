<template>
  <div home>
    <p-section class="s1" theme="type3">
      <div class="screen" v-prx:fixed>
        <h1 v-t:home.welcome="{ name: user1 }"></h1>
        <h1 v-t:home.welcome="{ name: user2 }"></h1>
      </div>
    </p-section>
    <p-section class="s2" rollup theme="type1">
      <p-item tag="h1" v-t:home.bye="{ name: user1 }" v-prx:intro="{ r:[0,10], tx:[30,-30], unit: 'vw', o:[0,1] }"></p-item>
      <a href="https://daum.net" v-prx:outro.home.type1="0.5">history back test</a>
    </p-section>
    <HomeNews />
    <p-section class="s3" theme="type2">
      <div class="screen" v-prx:sticky>
        <h1 v-t:home.welcome="{ name: user1 }" v-prx:progress="{ r:[1,3,6,8], tx:[150,0,0,-150], o:[0,1,1,0] }" @click="errorModalTest"></h1>
      </div>
    </p-section>
    <HomeOther />
    <p-section class="s4" theme="type3">
      <h2 v-t:home.bye="{ name: user2 }"></h2>
    </p-section>
  </div>
</template>

<script>

import { sleep } from '@/utils';
import HomeNews from '@/views/components/home/HomeNews';
import HomeOther from '@/views/components/home/HomeOther';

export default {
  name: 'Home',
  components: { HomeOther, HomeNews },
  data() {
    return {
      user1: null,
      user2: null,
    };
  },
  method: {

  },
  async asyncData() {
    await sleep(1000);
    return { user1: '허남진', user2: '개똥이' };
  },
  methods: {
    async errorModalTest() {

    }
  },
};
</script>

<style lang="less">
@import "~@/less/proj";
[home] {
  h1 { .tc; }
  h2 { .abs; .lb(0, 100); .wf; .tc; }
  .s1 { height: calc(100vh + 500px); .bgc(#666666); .-box; .rel;
    .screen { .pt(100); .lt; .wh(100%, 100vh);
      p { .tc; }
    }
  }
  .s2 { height: calc(100vh + 500px); .bgc(#ff4800); .pt(100); .-box; .rel; .crop;
    a { .abs; .rb(20,20); }
    .intro-up(5, {
      h1 {
        color: white;
      }
    });
  }
  .s3 { height: 200vh; .bgc(#aaaaaa); .rel; .-box;
    .screen { .wh(100%, 100vh); .lt; .pt(200); .crop;
      h1 { .pointer; }
    }
    .progress-up(5, {
      h1 {
        color: white;
      }
    });
  }
  .s4 { height: calc(100vh + 500px); .bgc(#0048ff); .rel; }
}
</style>
