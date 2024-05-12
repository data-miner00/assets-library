<template>
  <div class="html">
    <section class="lorem">
      <h2>Lorem Ipsum Examples</h2>
      <h3>1 lorem words</h3>
      <p>{{ loremWord }}</p>

      <h3>lorem sentences</h3>
      <p>{{ loremSentence }}</p>

      <h3>lorem paragraphs</h3>
      <p>{{ loremParagraph }}</p>
    </section>

    <section class="japanese">
      <h2>Japanese Ruby</h2>
      <p>
        これは<ruby
          ><rb>日</rb><rt>に</rt> <rb>本</rb><rt>ほん</rt> <rb>語</rb
          ><rt>ご</rt></ruby
        >です。
      </p>

      <a
        href="https://www.w3.org/International/articles/ruby/markup.en"
        target="_blank"
        >W3 Specification</a
      >
    </section>
  </div>
</template>

<script lang="ts">
import { LoremIpsum } from "lorem-ipsum";
import Vue from "vue";

export default Vue.extend({
  name: "Html",
  data: () => ({
    loremBuilder: new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    }),
  }),
  computed: {
    loremWord(): string {
      return this.loremBuilder.generateWords(1);
    },
    loremSentence(): string {
      return this.loremBuilder.generateSentences(5);
    },
    loremParagraph(): string {
      return this.loremBuilder.generateParagraphs(7);
    },
  },
});

const lorem = new LoremIpsum();

lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);
</script>

<style lang="sass">
.html
  h2
    font-size: 36px
    margin-bottom: 50px

  .lorem
    h3
      margin-bottom: 10px
    p
      margin-bottom: 24px

  .japanese
    p
      font-size: 24px
</style>
