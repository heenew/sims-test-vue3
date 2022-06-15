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
        name: "HEEWOO KIM",
        userid: "heewoo",
        password: "12",
      },
    ],
  },
  getters: {},
  mutations: {
    // 로그인이 성공
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인이 실패
    loginError(state, payload) {
      state.isLogin = false;
      state.isLoginError = true;

      // 로그인 실패 알림창
      if (
        (payload.userid == null || payload.userid == "") &&
        (payload.password == null || payload.password == "")
      ) {
        alert("아이디와 비밀번호를 입력하세요.");
      } else if (payload.userid == null || payload.userid == "") {
        alert("아이디를 입력하세요.");
      } else if (payload.password == null || payload.password == "") {
        alert("비밀번호를 입력하세요.");
      } else {
        alert("아이디와 비밀번호가 일치하지 않습니다.");
      }
    },

    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.userid === loginObj.userid) selectedUser = user;
      });
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError", loginObj);
      else {
        // 로그인 성공하면 payload로 selectedUser를 보내줌
        commit("loginSuccess", selectedUser);
        router.push({ name: "maincontents" });
      }
    },

    // 로그아웃
    logout({ commit }) {
      commit("logout");
      router.push({ name: "login" });
    },
  },
  modules: {},
});
