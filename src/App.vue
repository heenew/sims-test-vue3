<template>
  <!-- <div v-show="!isLogin">
    <Login />
  </div> -->
  <!-- <nav v-show="isLogin"> -->
  <nav>
    <!-- 상단 네비게이션 바 -->
    <NavBar />

    <!-- 컨텐츠 영역 -->
    <router-view></router-view>
    <!-- <Login /> -->

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
import LongIssue from "./views/statistic/LongIssue.vue";
import Login from "./views/Login";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLogin"]),
  },

  mounted() {
    // if (this.isLogin === false) {
    //   this.$router.push({ name: "login" });
    // } else {
    //   console.log("???");
    // }
  },
  components: {
    NavBar,
    Footer,
    ChartEx,
    SpreadSheet,
    IssueStatus,
    ByIssueType,
    LongIssue,
    Login,
  },
};
</script>

<style lang="scss">
@import "~bulma";
</style>
