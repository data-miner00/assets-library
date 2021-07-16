<template>
  <div class="docs">
    <div class="wrap">
      <nav class="docs__nav">
        <router-link :to="{ name: 'getting-started' }">
          <div class="docs__nav__link">
            <span>Getting Started</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'html-elements' }">
          <div class="docs__nav__link">
            <span>HTML Elements</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'buttons' }">
          <div class="docs__nav__link">
            <span>Buttons</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'loaders' }">
          <div class="docs__nav__link">
            <span>Loaders</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'fonts' }">
          <div class="docs__nav__link">
            <span>Fonts</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'frameworks' }">
          <div class="docs__nav__link">
            <span>Frameworks</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'assets' }">
          <div class="docs__nav__link">
            <span>Assets</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'color-palettes' }">
          <div class="docs__nav__link">
            <span>Color Palettes</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'wysiwyg' }">
          <div class="docs__nav__link">
            <span>WYSIWYG</span>
          </div>
        </router-link>
      </nav>
    </div>
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
  padding: 0 16%
  display: flex

  .wrap
    height: calc(100vh - 65px)
    flex-basis: 300px
    flex-shrink: 0
  &__nav
    border-right: 1px solid #eee
    padding: 2rem 0
    width: 300px
    height: 100%
    position: fixed
    top: 65px


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
