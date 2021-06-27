<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        <div class="header__logo__text">Assets Library</div>
      </router-link>
    </div>

    <nav class="header__nav">
      <router-link to="/" class="header__nav__item" active-class="active">
        <div>Home</div>
      </router-link>
      <router-link
        to="/showcase"
        class="header__nav__item"
        active-class="active"
      >
        <div>Showcase</div>
      </router-link>

      <router-link
        to="/library"
        class="header__nav__item"
        active-class="active"
      >
        <div>Library</div>
      </router-link>

      <router-link to="/editor" class="header__nav__item" active-class="active">
        <div>Editor</div>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"

.header
  padding: 1vw 3vw

  &__logo
    width: 1024px
    margin: 0 auto


    &__text
      font-family: $balthazar
      text-transform: uppercase
      font-size: 2em
      letter-spacing: 3px
      width: fit-content
      margin: 0 auto
  &__nav

    width: 1024px
    margin: 1vw auto 0
    display: flex
    justify-content: center

    &__item
      text-transform: uppercase
      font-size: 0.85em
      padding: 0 20px
      font-family: 'Times New Roman', Times, serif

      &.active
        div
          position: relative
          &::before
            position: absolute
            content: ''
            left: 0
            right: 0
            bottom: -2px
            height: 1px
            background: black
</style>
