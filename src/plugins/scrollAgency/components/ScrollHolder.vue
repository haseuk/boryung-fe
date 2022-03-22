<template>
  <div scroll-holder :class="{ inertia, moving, frozen }">
    <div scroll-pseudo-body></div>
    <div scroll-container :class="containerClass">
      <div scroll-body :class="bodyClass">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollHolder',
  props: {
    containerClass: {type: String, default: 'scroll-container'},
    bodyClass: {type: String, default: 'scroll-body'},
  },
  data() {
    return {};
  },
  watch: {
  },
  computed: {
    inertia() { return this.$store.getters.isInertia; },
    moving() { return this.$store.state.scrollAgency.moving; },
    frozen() { return this.$store.state.scrollAgency.frozen; }
  },
  mounted() {
    this.$scroll.setHolder(this);
  }
};
</script>

<style lang="less">
@import "~@/less/proj";
[scroll-holder] { .rel; }
[scroll-pseudo-body] { .hide; }
[scroll-container] { .rel; }
[scroll-body] { .rel; }

.inertia {
  [scroll-pseudo-body] { .block; }
  [scroll-container] { .fix; .lt; .f; .-box; .crop; }
}
</style>
