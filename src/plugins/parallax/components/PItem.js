export default {
  name: 'PItem',
  props: {
    tag: { type: String, default: 'div' },
    rollup: { type: Boolean, default: false },
  },
  mounted() {
    this.$parallax.addItem(this);
  },
  beforeDestroy() {
    this.$parallax.removeItem(this);
  },
  render(h) {
    return h(this.tag, { attrs: { 'p-item': '' } }, this.$slots.default);
  },
}
