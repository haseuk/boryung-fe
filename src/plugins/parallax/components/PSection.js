export default {
  name: 'PSection',
  props: {
    tag: { type: String, default: 'section' },
    rollup: { type: Boolean, default: false },
    theme: { type: String, default: 'default' }
  },
  mounted() {
    this.$parallax.addSection(this);
  },
  beforeDestroy() {
    this.$parallax.removeSection(this);
  },
  render(h) {
    return h(this.tag, { attrs: { 'p-section': '' } }, this.$slots.default);
  },
}
