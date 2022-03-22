export default {
  methods: {
    shareFb() {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, 'share', 'width=800,height=800');
    },
    shareTw() {
      window.open(`https://twitter.com/share?url=${encodeURIComponent(location.href)}`, 'share', 'width=800,height=800');
    },
    shareIn() {
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(location.href)}`, 'share', 'width=800,height=800');
    },
  }
}
