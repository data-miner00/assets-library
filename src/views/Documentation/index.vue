<template>
  <div class="docs">
    <nav class="docs__nav">
      <router-link to="">
        <div class="docs__nav__link">
          <span>Getting Started</span>
        </div>
      </router-link>
      <router-link to="html">
        <div class="docs__nav__link">
          <span>HTML Elements</span>
        </div>
      </router-link>
      <router-link to="buttons">
        <div class="docs__nav__link">
          <span>Buttons</span>
        </div>
      </router-link>
      <router-link to="loaders">
        <div class="docs__nav__link">
          <span>Loaders</span>
        </div>
      </router-link>
      <router-link to="fonts">
        <div class="docs__nav__link">
          <span>Fonts</span>
        </div>
      </router-link>
      <router-link to="frameworks">
        <div class="docs__nav__link">
          <span>Frameworks</span>
        </div>
      </router-link>
      <router-link to="assets">
        <div class="docs__nav__link">
          <span>Assets</span>
        </div>
      </router-link>
      <router-link to="palettes">
        <div class="docs__nav__link">
          <span>Color Palettes</span>
        </div>
      </router-link>
      <router-link to="wysiwyg">
        <div class="docs__nav__link">
          <span>WYSIWYG</span>
        </div>
      </router-link>
    </nav>
    <main class="docs__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="sass" scoped>
.active div
  background: #f5ecff
  color: #996ed0

.docs
  padding: 0 20%
  display: flex

  &__nav
    padding: 2rem 0
    border-right: 1px solid #eee
    height: calc(100vh - 65px)
    flex-basis: 300px

    &__link
      margin: 5px 20px 5px 0
      padding: 15px 15px
      font-size: 1.3em
      border-radius: 5px
      transition: background .2s, color .2s

      &:hover
        background: #f5ecff
        color: #996ed0

  &__content
    padding: 2rem 0 2rem 2rem
    min-height: 200vh
    flex-grow: 1
</style>
