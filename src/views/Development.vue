<template>
  <div class="dev">
    <div class="dev__page-label">
      <h1>Development / Testing</h1>
      <p>A page that dedicate for quick experimentation via source</p>
    </div>
    <div class="dev__playground"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="sass" scoped>
.dev
  padding: 50px 16%
  &__page-label
    h1
      background: linear-gradient(90deg, rgba(84,212,165,1) 0%, rgba(87,50,196,1) 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      width: fit-content
      margin-bottom: 5px
    p
      font-size: .8em
      color: #888
      margin-bottom: 20px

  &__playground
    min-height: 500px
    border: 1px solid #c59618
</style>
