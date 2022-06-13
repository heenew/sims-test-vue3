<template>
  <nav>
    <!-- 상단 네비게이션 바 -->
    <NavBar />

    <!-- 컨텐츠 영역 -->
    <!-- <router-view></router-view> -->
    <ByIssueType />

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
import IssueStatus from "./views/statistic/ByUrgency.vue";
import ByIssueType from "./views/statistic/ByIssueType.vue";

export default {
  components: {
    NavBar,
    Footer,
    ChartEx,
    SpreadSheet,
    IssueStatus,
    ByIssueType,
  },
};
</script>

<style lang="scss">
@import "~bulma";
</style>
