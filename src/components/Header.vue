<template>
  <header class="header">
    <div class="header__logo">
      <div class="header__logo__svg">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div class="header__logo__text">assets library</div>
    </div>
    <nav class="header__navs">
      <div class="header__navs__search"></div>
      <router-link to="/docs">
        <div class="header__navs__link">
          <span>Documentation</span>
        </div></router-link
      >
      <router-link to="/editor">
        <div class="header__navs__link"><span>Editor</span></div></router-link
      >
      <router-link to="/showcase">
        <div class="header__navs__link"><span>Showcase</span></div></router-link
      >
      <router-link to="/gallery">
        <div class="header__navs__link">
          <span>Gallery</span>
        </div></router-link
      >
    </nav>
  </header>
</template>

<style lang="sass" scoped>
// Default active state set by vue router
.active div span
  position: relative
  &::after
    content: ''
    position: absolute
    left: 0
    right: 0
    bottom: -5px
    height: 3px
    background: #8857ed

.header
  display: flex
  justify-content: space-between
  height: 65px
  padding: 0 10%
  align-items: center
  border-bottom: 1px solid #eee
  &__logo
    display: flex
    align-items: center
    &__svg
      width: 40px
      height: 40px
      img
        width: 40px
    &__text

      font-size: 1.7em
      text-transform: lowercase
      font-weight: 600
  &__navs
    display: flex
    &__link
      padding: 10px 0

      padding-right: .6em
      margin: 0 .8em
</style>
