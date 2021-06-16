<template>
  <header class="header">
    <div class="header__logo">Assets Library</div>
    <nav class="header__nav">
      <router-link to="showcase">
        <div class="header__nav__item">Showcase</div>
      </router-link>

      <router-link to="library">
        <div class="header__nav__item">Library</div>
      </router-link>

      <router-link to="editor">
        <div class="header__nav__item">Editor</div>
      </router-link>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
.header
  height: 80px
  padding: 0 20%
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid #eee
  box-shadow: 1px 1px 10px #eee
  position: sticky
  top: 0
  left: 0
  width: 100%
  background: white
  z-index: 999

  &__logo
    font-size: 1.5em

  &__nav
    width: 200px
    justify-content: space-between
    display: flex
</style>
