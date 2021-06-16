<template>
  <div class="sliding-text">
    <div class="slider-wrapper">
      I can write
      <div class="slider">
        <div class="slider-text1">HTML</div>
        <div class="slider-text2">CSS</div>
        <div class="slider-text3">PHP</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sliding-text {
  width: 98vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-wrapper {
  font-size: 40px;
  color: #aaa;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 50px;
  padding-left: 15px;
  overflow: hidden;
}

.slider div {
  color: #fff;
  height: 50px;
  margin-bottom: 50px;
  padding: 2px 15px;
  text-align: center;
}
.slider-text1 {
  background: lightgreen;
  animation: slide 5s linear infinite;
}

.slider-text2 {
  background: skyblue;
}
.slider-text3 {
  background: lightcoral;
}
@keyframes slide {
  0% {
    margin-top: -300px;
  }
  5% {
    margin-top: -200px;
  }
  33% {
    margin-top: -200px;
  }
  38% {
    margin-top: -100px;
  }
  66% {
    margin-top: -100px;
  }
  71% {
    margin-top: 0px;
  }
  100% {
    margin-top: 0px;
  }
}
</style>
