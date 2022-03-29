<template>
  <div id="app">
    <live-player :appKey="appKey"></live-player>
  </div>
</template>

<script>
import { LivePlayer } from "../../dict/live-cat.esm";
export default {
  name: "App",
  components: { LivePlayer },
  data() {
    return { appKey: "" };
  },
  mounted() {},
};
</script>
<style >
#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
</style>