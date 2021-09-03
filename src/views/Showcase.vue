<template>
  <div class="showcase">
    <section class="showcase__section">
      <h1>Card Reflect Hover</h1>
      <CardReflectHover />
    </section>
    <section class="showcase__section">
      <h1>Animating Gradient Background</h1>
      <AnimatingGradient />
    </section>
    <section class="showcase__section">
      <h1>Sliding Text</h1>
      <SlidingText />
    </section>
    <section class="showcase__section">
      <h1>Join The Fun</h1>
      <JoinTheFun />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CardReflectHover from "@/ui-components/others/CardReflectHover/index.vue";
import AnimatingGradient from "@/ui-components/others/AnimatingGradient.vue";
import SlidingText from "@/ui-components/others/SlidingText.vue";
import JoinTheFun from "@/ui-components/text/JoinTheFun.vue";

export default Vue.extend({
  components: {
    CardReflectHover,
    AnimatingGradient,
    SlidingText,
    JoinTheFun,
  },
});
</script>

<style lang="sass" scoped>
.showcase
  padding: 100px 0
  &__section
    padding: 50px 0
    h1
      text-align: center
      margin-bottom: 50px
</style>
