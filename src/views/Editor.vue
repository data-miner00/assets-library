<template>
  <div class="editor-page">
    <textarea id="editor-textarea" ref="editor" v-model="code"></textarea>
    <iframe ref="viewer" id="viewer"></iframe>
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
  height: 100vh
  display: inline-flex
  width: 100%

#editor-textarea
  width: 100%
  height: 95%
  margin: 10px
  padding: 5px

#viewer
  background: white
  border: none
  width: 100%
  height: 95%
  margin: 10px
  border: 1px solid #3498db
</style>
