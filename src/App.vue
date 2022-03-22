<template>
  <div id="app" :class="[lang, touch ? 'touch' : 'no-touch', fetching]">
    <AppHeader />
    <scroll-holder container-class="scroll-container" body-class="scroll-body">
      <router-view/>
    </scroll-holder>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/views/common/AppHeader';
import AppFooter from "@/views/common/AppFooter";
export default {
  name: 'App',
  components: {AppFooter, AppHeader },
  data() {
    return {
    };
  },
  metaInfo() {
    return {
      title: this.$t('meta.title'),
      meta: [
        { vmid: 'title', content: this.$t('meta.title'), },
        { vmid: 'description', content: this.$t('meta.description'), },
        { vmid: 'keywords', content: this.$t('meta.keywords'), },
        { vmid: 'image', content: '/img/og.png', },
        { vmid: 'path', content: this.$route.path.replace(/^\/(ko|en|zh|ja)/, '') },
      ],
    }
  },
  computed: {
    touch() { return this.$store.state.browser.touch; },
    fetching() { return this.$store.state.fetchingAsyncData && 'fetching'; },
  },
  methods: {
  }
}
</script>

<style lang="less">
@import "~@/less/common";
#app { color:#2d2d2f; }
</style>
