<template>
  <div id="app" :class="[lang, touch ? 'touch' : 'no-touch', fetching, home]">
    <scroll-holder container-class="scroll-container" body-class="scroll-body">
      <AppHeader />
      <SideNavBar />
      <div content-holder>
        <router-view/>
      </div>
      <AppFooter />
    </scroll-holder>
  </div>
</template>

<script>
import AppHeader from '@/views/common/AppHeader';
import AppFooter from "@/views/common/AppFooter";
import SideNavBar from "@/views/common/SideNavBar";
export default {
  name: 'App',
  components: {SideNavBar, AppFooter, AppHeader },
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
    home() { return this.$route.path === '/'+this.lang+'/' && 'home'; }
  },
  methods: {
  },
}
</script>

<style lang="less">
@import "~@/less/common";
#app { color:#2d2d2f; }
[content-holder] {
  min-height: calc(100vh - 3rem);
}

@media screen and(min-width:768px) {
  html { font-size: 24px; }
}
@media screen and(min-width:1240px) {
  html { font-size: 32px; }
  [content-holder] {
    min-height: calc(100vh - 109px - 87px);
  }
}

@media screen and(min-width:1600px) {
  [app-header] { .pr(200) }
  [content-holder] { .pr(200) }
  [app-footer] { .pr(200) }
  .v-bg { .ml(-785)!important; }
}
@media screen and(min-width:1800px) {
  [app-header] { .pr(0) }
  [content-holder] { .pr(0) }
  [app-footer] { .pr(0) }
  .v-bg { .ml(-690)!important; }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
