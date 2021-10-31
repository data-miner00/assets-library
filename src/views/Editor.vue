<template>
  <div class="editor-page">
    <div class="editor-page__heading">
      <h1>Mini Editor</h1>
    </div>
    <div class="editor-page__editor">
      <textarea id="editor-textarea" ref="editor" v-model="code"></textarea>
      <iframe ref="viewer" id="viewer"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    code: "Type away!",
  }),
  methods: {
    refresh(): void {
      var textContent: string = (this.$refs.editor as HTMLTextAreaElement)
        .value;
      (this.$refs.viewer as HTMLIFrameElement).srcdoc = textContent;
    },
  },
  watch: {
    code() {
      this.refresh();
    },
  },
});
</script>

<style lang="sass" scoped>
.editor-page
  width: 100%
  padding: 50px 16%

  &__editor
    display: inline-flex
    height: 400px

#editor-textarea
  width: 400px
  height: 95%
  margin: 10px
  padding: 5px

#viewer
  background: white
  border: none
  width: 400px
  height: 95%
  margin: 10px
  border: 1px solid #3498db
</style>
