<template>
  <div class="player-container" ref="player"></div>
</template>

<script>
import { Launcher } from "live-cat";
export default {
  name: "LivePlayer",
  props: {
    address: { type: String, default: "https://app.3dcat.live" },
    appKey: { type: String, default: "" },
  },
  data() {
    return { launch: null };
  },
  mounted() {
    this.launch = new Launcher({
      appKey: this.appKey, //公有化
      address: this.address,
    });
    this.launch.automata(this.$refs.player);
  },
};
</script>

<style scoped>
.player-container {
  background-color: black;
  width: 100%;
  height: 100%;
}
</style>
<style >
video:focus {
  outline: -webkit-focus-ring-color auto 0;
}
</style>