<template>
  <LngLink :to="to" @mouseenter.native="over" @mouseleave.native="out"><slot/><Arrow /></LngLink>
</template>
<script>
import Arrow from "@/views/components/Arrow";
import Vivus from "vivus";
export default {
  components: {Arrow},
  props: {
    to: null
  },
  data() {
    return {
      vivus: null
    };
  },
  mounted() {
    this.vivus = new Vivus(this.$el.querySelector('svg'), {duration:20});
    this.vivus.stop();
    this.vivus.reset();
  },
  methods: {
    over() {
      this.vivus?.play()
    },
    out() {
      this.vivus?.play(-2)
    }
  }
}
</script>