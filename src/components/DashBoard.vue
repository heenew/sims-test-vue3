<template>
  <div>
    <section class="section $section-padding: 3rem 1.5rem">
      <div class="columns">
        <div class="column is-2">
          <side-bar v-bind:menuActive="menuItem"> </side-bar>
        </div>
        <div class="container">
          <app-dashboard v-if="menuItem === 'main'"> </app-dashboard>
          <first-menu v-else-if="menuItem === 'firstmenu'"> </first-menu>
          <second-menu v-else-if="menuItem === 'secondmenu'"> </second-menu>
          <third-menu v-else-if="menuItem === 'thirdmenu'"> </third-menu>

          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import firstmenu from "../views/FirstMenu";
import secondmenu from "../views/SecondMenu";
import thirdmenu from "../views/ThirdMenu";
export default {
  components: {
    "side-bar": SideBar,
    "first-menu": firstmenu,
    "second-menu": secondmenu,
    "third-menu": thirdmenu,
  },
  data() {
    return {
      menuItem: this.$route.params.SideBar,
    };
  },
};
</script>

<style></style>
