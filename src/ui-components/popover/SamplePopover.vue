<!-- By chocochip at https://codepen.io/chocochip/pen/zYxMgRG -->

<template>
  <div class="popover__wrapper">
    <a href="#">
      <h2 class="popover__title">Hover:me</h2>
    </a>
    <div class="popover__content">
      <p class="popover__message">Joseph Francis "Joey" Tribbiani, Jr.</p>
      <img
        alt="Joseph Francis Joey Tribbiani, Jr."
        src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
      />
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.popover__title {
  font-size: 24px;
  line-height: 36px;
  text-decoration: none;
  color: rgb(228, 68, 68);
  text-align: center;
  padding: 15px 0;
}

.popover__wrapper {
  max-width: 768px;
  margin: 0 auto;
  position: relative;
  margin-top: 1.5rem;
}
.popover__content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: -150px;
  transform: translate(0, 10px);
  background-color: #bfbfbf;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: auto;
}
.popover__content:before {
  position: absolute;
  z-index: -1;
  content: "";
  right: calc(50% - 10px);
  top: -8px;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #bfbfbf transparent;
  transition-duration: 0.3s;
  transition-property: transform;
}
.popover__wrapper:hover .popover__content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.popover__message {
  text-align: center;
}
</style>
