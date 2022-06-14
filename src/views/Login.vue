<template>
  <div class="login-form">
    <form class="box">
      <h4 class="title is-5" style="text-align: center">SIMS 로그인</h4>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="email"
            label="Email"
            v-model="email"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="password"
            label="Password"
            autoComplete="off"
            v-model="password"
            required
          />
        </div>
        <input type="checkbox" id="idsave" name="idsave" v-model="saveId" />
        <label for="idsave">
          <span> ID 저장하기</span>
        </label>
      </div>
      <button
        class="button is-primary"
        type="submit"
        @click="login({ email, password })"
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
      email: "",
      password: "",
      saveId: "",
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
    loginSubmit: function () {
      if (
        (this.email == null || this.email == "") &&
        (this.password == null || this.password == "")
      ) {
        alert("아이디와 비밀번호를 입력하세요.");
        return;
      } else if (this.email == null || this.email == "") {
        alert("아이디를 입력하세요.");
        return;
      } else if (this.password == null || this.password == "") {
        alert("비밀번호를 입력하세요.");
        return;
      }
    },
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
