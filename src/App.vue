<template>
  <nav>
    <!-- 상단 네비게이션바 -->
    <NavBar />

    <!-- 컨텐츠 영역 -->
    <router-view></router-view>

    <!-- 하단 Footer 영역 -->
    <Footer />

    <!-- <ChartEx /> -->
    <!-- <SpreadSheet /> -->
  </nav>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.vue";
import ChartEx from "./components/ChartEx.vue";
import SpreadSheet from "./components/SpreadsheetEx.vue";

export default {
  components: {
    NavBar,
    Footer,
    ChartEx,
    SpreadSheet,
  },
};
</script>

<style lang="scss">
@import "~bulma";
</style>
