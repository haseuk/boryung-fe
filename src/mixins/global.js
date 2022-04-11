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
      return this.$store.state.route.params.lang || 'ko';
    },
  },
  methods: {
    values,
    sleep,
    file(item) {
      return '/api/files/'+item.files[0]?.location
    },
    download(item) {
      return '/api/download/'+item.files[0]?.location
    },
    fileName(item) {
      return item.files[0]?.fileName
    },
    date(dt) {
      return dt?.split(' ')[0]
    }
  },
};
