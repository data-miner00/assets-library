<template>
  <div class="getting">
    <div class="getting__content">
      <h1>Introduction</h1>
      <a href="">
        <h2>Why Assets Library?</h2>
      </a>
      <p>
        When starting out a project, there a so many things that needed to be
        taken care of from the ground-up, which oftentimes can be bothersome to
        do so.
      </p>
    </div>

    <div class="getting__table">
      <TableContent />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableContent from "@/components/TableContent.vue";

export default Vue.extend({
  components: {
    TableContent,
  },
});
</script>

<style lang="sass" scoped>
.getting
  display: flex

  &__content
    flex-grow: 1
    padding: 0 2rem
  &__table
    flex-basis: 230px
    flex-shrink: 0
</style>
