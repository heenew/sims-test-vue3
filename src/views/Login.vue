<template>
  <div class="login-form">
    <form class="box">
      <h4 class="title is-5" style="text-align: center">SIMS 로그인</h4>
      <div class="field">
        <label class="label">ID</label>

        <input
          class="input"
          type="email"
          placeholder="user id"
          label="Email"
          v-model="email"
          required
        />

        {{ email }}
      </div>

      <div class="field">
        <label class="label">Password</label>

        <input
          class="input"
          type="password"
          placeholder="password"
          label="Password"
          v-model="password"
          required
        />
        {{ password }}

        <!-- <input type="checkbox" id="idsave" name="idsave" v-model="saveId" />
        <label for="idsave">
          <span> ID 저장하기</span>
        </label> -->
      </div>
      <button
        style="margin: 0"
        class="button is-primary"
        type="submit"
        @click.prevent="login({ email, password })"
      >
        로그인
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null,
      saveId: "",
    };
  },
  computed: {
    // ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.box {
  height: 350px;
  width: 500px;
}
</style>
