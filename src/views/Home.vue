<template>
  <div class="home">
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>
    <p>
      This is a paragraph Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Dolorum, debitis quasi eligendi est consectetur culpa molestiae at
      voluptatibus, distinctio assumenda sit repellat unde obcaecati, natus aut
      error et quae cum!
    </p>
    <button>hello</button>
    <hr />
    <blockquote>
      This is a blockquote Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Commodi perspiciatis minus magni placeat, ipsum earum. Delectus
      natus expedita numquam sapiente cupiditate harum quos fugit praesentium
      dolores? Error maxime dolorem doloribus!
    </blockquote>
    <textarea name="display" id="" cols="30" rows="10">
fsdfsdfsdfasfsfasdfsadf</textarea
    >
    <input type="text" placeholder="This is a input" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>

<style lang="sass" scoped></style>
