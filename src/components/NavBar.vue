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
        <a class="navbar-item" href="/maincontents"> Main </a>

        <a class="navbar-item" href="/dashboard/firstmenu"> Documentation </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <!-- <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div> -->
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Dropdown </a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item"> First item </a>
            <a class="navbar-item"> Second item </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Third item </a>
          </div>
          <div class="navbar-item">
            <div calss="buttons">
              <a class="button is-light" @click="$store.dispatch('logout')">
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
