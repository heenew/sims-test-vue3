<!-- 이슈 등록 템플릿 -->

<template>
  <div>
    <section class="section $section-padding: 3rem 1.5rem">
      <div class="columns">
        <div class="column is-2 is-multiline" v-show="menuToggle">
          <side-menu v-bind:menuActive="menuItem"> </side-menu>
        </div>

        <div class="container">
          <span class="icon">
            <i
              class="material-icons"
              @click="toggle"
              style="font-size: 24px; cursor: default"
              >menu</i
            >
          </span>

          <first-menu v-if="menuItem === 'firstmenu'"> </first-menu>
          <second-menu v-else-if="menuItem === 'secondmenu'"> </second-menu>
          <third-menu v-else-if="menuItem === 'thirdmenu'"> </third-menu>

          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SideMenu from "./SideMenu";
import firstmenu from "./FirstMenu";
import secondmenu from "./SecondMenu";
import thirdmenu from "./ThirdMenu";
export default {
  components: {
    "side-menu": SideMenu,
    "first-menu": firstmenu,
    "second-menu": secondmenu,
    "third-menu": thirdmenu,
  },
  data() {
    return {
      menuItem: this.$route.params.SideMenu,
      menuToggle: true,
    };
  },
  methods: {
    toggle() {
      this.menuToggle = !this.menuToggle;
    },
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>
