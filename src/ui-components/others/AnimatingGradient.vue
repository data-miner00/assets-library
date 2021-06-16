<!-- Source: The old unreal engine page, x < 16/6/2021 
  -->

<template>
  <div class="animating-gradient">
    <h1>c' mon</h1>
  </div>
</template>

<style scoped>
.animating-gradient {
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  position: relative;
  animation: change 10s ease-in-out infinite;
}

h1 {
  font-size: 5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 3px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 10rem;
}

@keyframes change {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
