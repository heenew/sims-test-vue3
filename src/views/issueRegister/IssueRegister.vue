<!-- 이슈 등록 템플릿 -->

<template>
  <section class="section" style="padding: 1.5em 1em">
    <div class="columns">
      <div class="column is-2 is-multiline" v-show="menuToggle">
        <aside class="menu">
          <p class="menu-label">Category</p>
          <ul class="menu-list">
            <li v-for="menuItem in menuItems" :key="menuItem.index">
              <a
                @click="menuItem.toggle = true"
                v-bind:class="{ 'is-active': menuItem.toggle }"
                v-bind:href="'/issueregister/' + menuItem.name"
              >
                {{ menuItem.title }}
              </a>
            </li>
          </ul>
        </aside>
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

        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "firstmenu",
          title: "FirstMenu",
          toggle: false,
        },
        {
          name: "secondmenu",
          title: "SecondMenu",
          toggle: false,
        },
        {
          name: "thirdmenu",
          title: "ThirdMenu",
          toggle: false,
        },
      ],
      menuToggle: true,
    };
  },
  methods: {
    activeToggle(menuItem) {
      this.menuItems[menuItem].toggle = true;
    },
    toggle() {
      this.menuToggle = !this.menuToggle;
    },
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>
