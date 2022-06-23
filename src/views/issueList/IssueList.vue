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
                v-bind:href="'/issuelist/' + menuItem.name"
              >
                {{ menuItem.title }}
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div class="container">
        <i
          class="material-icons"
          @click="toggle"
          style="font-size: 24px; cursor: default"
          >menu</i
        >

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
          name: "publictech1",
          title: "공공기술1그룹",
          toggle: false,
        },
        {
          name: "publictech2",
          title: "공공기술2그룹",
          toggle: false,
        },
        {
          name: "financialtech",
          title: "금융기술그룹",
          toggle: false,
        },
        {
          name: "ictinfra1",
          title: "ICT인프라기술1그룹",
          toggle: false,
        },
        {
          name: "ictinfra2",
          title: "ICT인프라기술2그룹",
          toggle: false,
        },
        {
          name: "soc",
          title: "SOC기술그룹",
          toggle: false,
        },
        {
          name: "sddc",
          title: "SDDC그룹",
          toggle: false,
        },
        {
          name: "bdm",
          title: "BDM그룹",
          toggle: false,
        },
        {
          name: "bts",
          title: "BTS그룹",
          toggle: false,
        },
        {
          name: "cnc",
          title: "C&C그룹",
          toggle: false,
        },
        {
          name: "cloudservice",
          title: "Cloud서비스사업팀",
          toggle: false,
        },
        {
          name: "cloudconsulting",
          title: "Cloud컨설팅그룹",
          toggle: false,
        },
        {
          name: "s2f",
          title: "오감지능연구소",
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
