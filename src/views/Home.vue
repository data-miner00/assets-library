<!--
  This should be the landing page of the whole docs site

-->
<template>
  <div class="home">
    <section class="home__landing">
      <div class="home__landing__logo--img">
        <img src="/logo.svg" alt="Assets Library Logo" height="200" />
      </div>
      <div class="home__landing__logo--text">Assets<br />Library</div>
      <div class="home__landing__btns">
        <button class="home__landing__btn home__landing__btn--primary">
          Get Started
        </button>
        <button class="home__landing__btn home__landing__btn--secondary">
          Learn More
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>

<style lang="sass" scoped>
.home
  &__landing
    display: flex
    flex-direction: column
    align-items: center
    padding: 60px 0
    &__logo
      &--text
        font-size: 3.6em

    &__btns
      display: flex
    &__btn
      display: block
      border-radius: 5px
      padding: 0 24px
      line-height: 52px
      font-size: 1.2em
      font-weight: 500
      margin-top: 2em
      &--primary
        background: #6610f2
        color: white
      &--secondary
        color: #6610f2
        border: 2px solid #6610f2
        margin-left: 1.5em
</style>
