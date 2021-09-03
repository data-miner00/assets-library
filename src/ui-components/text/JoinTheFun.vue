<template>
  <div class="join-the-fun">
    <div class="text">Join the <span>fun.</span></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  //
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"

.join-the-fun
  font-family: $poppins
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  font-weight: 700
  background: #2f303a
  .text
    color: white
    font-size: 64px
    span
      color: #bc3a80
      font-size: 96px
</style>

<!-- Reference: https://www.youtube.com/watch?v=FK4YusHIIj0 -->
