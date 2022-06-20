<template>
  <nav class="navbar is-info" role="navigation is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          /> -->
        <b>SNET SYSTEMS</b>
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Main </a>

        <a class="navbar-item" href="/issueregister/firstmenu">
          장애 이력 등록
        </a>
        <a class="navbar-item" href="/issuestate"> 장애 현황 </a>
      </div>

      <div class="navbar-end">
        <!-- <div class="navbar-item">
          <div calss="buttons">
            <a class="button is-light" @click="$store.dispatch('logout')">
              로그아웃
            </a>
          </div>
        </div> -->

        <!-- 드롭다운 -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon">
              <i
                class="material-icons"
                @click="toggle"
                style="font-size: 24px; cursor: default"
                >person</i
              >
            </span>
          </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item"> 마이페이지 </a>

            <hr class="navbar-divider" />
            <a class="navbar-item" @click="$store.dispatch('logout')">
              로그아웃
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <router-view /> -->
</template>

<script>
export default {};
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>
