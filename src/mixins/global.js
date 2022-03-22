import { values, sleep } from '@/utils';

export default {
  data() {
    return {};
  },
  computed: {
    matchedMedia() {
      return this.$store.state.browser.matchedMedia;
    },
    routeMeta() {
      return this.$route.matched.reduce((acc, route) => ({...acc, ...route.meta}), {});
    },
    lang() {
      return this.$store.state.route.params.lang || 'en';
    },
  },
  methods: {
    values,
    sleep,
  },
};
