<template>
  <div>
    <aside class="menu">
      <p class="menu-label">Category</p>
      <ul class="menu-list">
        <li v-for="menuItem in menuItems" :key="menuItem.index">
          <a
            v-bind:class="{ 'is-active': tabActive(menuItem.name) }"
            v-bind:href="'/issueregister/' + menuItem.name"
          >
            {{ menuItem.title }}
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  props: ["menuActive"],
  data() {
    return {
      menuItems: [
        {
          name: "firstmenu",
          title: "FirstMenu",
        },
        {
          name: "secondmenu",
          title: "SecondMenu",
        },
        {
          name: "thirdmenu",
          title: "ThirdMenu",
        },
      ],
    };
  },
  methods: {
    tabActive: function (tab) {
      return this.menuActive === tab;
    },
  },
};
</script>

<style></style>
