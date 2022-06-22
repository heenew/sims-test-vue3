<template>
  <nav class="navbar is-info" role="navigation ">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          /> -->
        <b>SNET SYSTEMS</b>
      </a>
      <!-- <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> -->
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Main </a>

        <a class="navbar-item" href="/issueregister/firstmenu">
          장애 이력 등록
        </a>
        <a class="navbar-item" href="/issuestate/bygroup"> 장애 현황 </a>
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
            <i class="material-icons">person</i>
          </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item" href="/resetpw">
              <i class="material-icons" style="padding-right: 0.5em"
                >lock_reset</i
              >비밀번호 변경
            </a>

            <hr class="navbar-divider" />
            <a
              class="navbar-item"
              href="/login"
              @click="$store.dispatch('logout')"
            >
              <i class="material-icons" style="padding-right: 0.5em">logout</i
              >로그아웃
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
