<template>
  <div class="login-form">
    <form class="box">
      <h4 class="title is-5" style="text-align: center">SIMS 로그인</h4>
      <div class="field">
        <label class="label">ID</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="user id"
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
            v-model="password"
            required
            @keydown.enter="login({ email, password })"
          />
        </div>
        <!-- <input type="checkbox" id="idsave" name="idsave" v-model="saveId" />
        <label for="idsave">
          <span> ID 저장하기</span>
        </label> -->
      </div>
      <button
        style="margin: 0"
        class="button is-primary"
        type="submit"
        @click="login({ email, password })"
      >
        로그인
      </button>
      <button class="button is-primary" block depressed @click="test()">
        test
      </button>
      <button class="button is-primary" block depressed @click="posttest()">
        posttest
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      password: null,
      saveId: "",
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
    test() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then((res) => {
          // handle success
          console.log(res);
        })
        .catch((err) => {
          // handle error
          console.log(err);
        })
        .then(() => {
          // always executed
        });
    },
    posttest() {
      axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "maincontents" });
        })
        .catch((err) => {
          console.log(err);
        });
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
