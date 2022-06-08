<template>
  <nav>
    <app-navbar></app-navbar>
    <dash-board></dash-board>
  </nav>
</template>

<script>
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";

export default {
  components: {
    "app-navbar": NavBar,
    "dash-board": DashBoard,
  },
};
</script>

<style lang="scss">
@import "~bulma";
</style>
