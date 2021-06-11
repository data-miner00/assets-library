<!-- Author: BEN ABBESS 
     https://codepen.io/MEDALI1977/pen/VwaREaV
  ============================================ -->
<template>
  <div class="card-reflect-hover">
    <div class="container">
      <img src="./imgs/1.jpg" alt="" />
      <img src="./imgs/2.jpg" alt="" />
      <img src="./imgs/3.jpg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.card-reflect-hover {
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: grid;
  place-items: center;
}

img {
  width: 30%;
  height: 100%;
  object-fit: cover;

  -webkit-box-reflect: below 2px
    linear-gradient(transparent, transparent, #0004);

  transform-origin: center;
  transform: perspective(800px) rotateY(25deg);
  transition: 0.5s;
}
.container {
  max-width: 600px;
  max-height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container:hover img {
  opacity: 0.3;
}
.container img:hover {
  transform: perspective(800px) rotateY(0deg);
  opacity: 1;
}
</style>
