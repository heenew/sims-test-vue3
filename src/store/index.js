import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    allUsers: [
      {
        id: 1,
        name: "heewoo",
        email: "heewoo@gmail.com",
        password: "123456",
      },
    ],
  },
  getters: {},
  mutations: {
    // 로그인이 성공했을 때
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError");
      else {
        // 로그인 성공하면 payload로 selectedUser를 보내줌
        commit("loginSuccess", selectedUser);
        router.push({ name: "maincontents" });
      }
    },
  },
  modules: {},
});
