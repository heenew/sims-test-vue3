<template>
  <!-- <nav v-show="isLogin"> -->
  <nav>
    <!-- 상단 네비게이션 바 -->
    <NavBar v-if="isLogin" />

    <!-- 컨텐츠 영역 -->
    <router-view></router-view>
    <!-- <Login /> -->

    <!-- 하단 Footer 영역 -->
    <Footer />
  </nav>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLogin"]),
  },

  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~bulma";
</style>
