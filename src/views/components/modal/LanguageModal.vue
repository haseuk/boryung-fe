<template>
  <div language-modal>
    <div class="dim"></div>
    <div class="content">
      <a v-for="(label, code) in languages" @click="changeLang(code)" :key="code">{{ label }}</a>
      <br><br><a class="close" @click="$emit('close')">닫기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageModal',
  props: {
    options: Object
  },
  data() {
    return {
      languages: { en: 'English', ko: 'Korean', ja: 'Japaneses', zh: 'Chinese' },
    };
  },
  methods: {
    changeLang(lang) {
      this.$emit('resolve', lang);
    }
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
[language-modal] {  .tc;
  .dim { .abs; .f; .lt; .bgc(rgba(0,0,0,0.3)); }
  .content { .p(30); .fs(20); .bgc(#fff); .abs; .lt(50%,50%); .t-xyc;
    a { .-a(#333); .p(5,10); .ib; .mh(5); }
  }
}
</style>
