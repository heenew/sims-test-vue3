<template>
  <div class="login-form">
    <form class="box">
      <h4 class="title is-5" style="text-align: center"><b> SIMS 로그인</b></h4>

      <div class="field">
        <label class="label">사번</label>

        <input
          class="input"
          type="text"
          placeholder="user id"
          label="UserId"
          v-model="email"
          required
        />
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

        <!-- <input type="checkbox" id="idsave" name="idsave" v-model="saveId" />
        <label for="idsave">
          <span> ID 저장하기</span>
        </label> -->
      </div>
      <div class="field">
        <div id="btn">
          <button
            class="button is-info is-hovered"
            type="submit"
            @click.prevent="login({ email, password })"
          >
            로그인
          </button>
        </div>
        <div id="btn">
          <router-link to="/resetpw">
            <button class="button is-info is-outlined">
              비밀번호 변경 및 초기화
            </button>
          </router-link>
        </div>
      </div>
      <div>
        <b> 테스트용</b>
        <br />
        아이디: eve.holt@reqres.in
        <br />
        비밀번호: cityslicka
      </div>
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
  computed: {},
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
.button {
  width: 100%;
}
#btn {
  padding-top: 1em;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.box {
  width: 500px;
}
</style>
