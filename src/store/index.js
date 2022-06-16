import { createStore } from "vuex";
import router from "../router";
import axios from "axios";

export default createStore({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    allUsers: [
      {
        id: 1,
        name: "HEEWOO KIM",
        email: "heewoo@gmail.com",
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
    // 로그인 -> 토큰 반환
    login({ dispatch }, loginObj) {
      axios
        .post("https://reqres.in/api/login", loginObj) // 파라메터
        .then((res) => {
          // 성공시 토큰을 헤더에 포함시켜 유저 정보 요청

          let token = res.data.token; // 토큰을 로컬스토리지에 저장

          localStorage.setItem("access_token", token);
          console.log("get sssssssssss");

          dispatch("getMemberInfo");
        })
        .catch((err) => {
          console.log("post err", err);
          // alert("아이디와 비밀번호를 확인하세요");
        });

      // let selectedUser = null;
      // state.allUsers.forEach((user) => {
      //   if (user.userid === loginObj.userid) selectedUser = user;
      // });
      // if (selectedUser === null || selectedUser.password !== loginObj.password)
      //   commit("loginError", loginObj);
      // else {
      //   // 로그인 성공하면 payload로 selectedUser를 보내줌
      //   commit("loginSuccess", selectedUser);
      //   router.push({ name: "maincontents" });
      // }
    },
    getMemberInfo({ commit }) {
      // 로컬스토리지에 저장된 토큰을 불러옴

      let token = localStorage.getItem("access_token");
      let config = {
        // (보안), 헤더 값 설정
        headers: {
          "access-token": token,
        },
      };

      // 토큰 -> 멤버 정보를 반환
      // 새로 고침 -> 토큰만 가지고 멤버 정보를 요청
      axios
        .get("https://reqres.in/api/users/page/2", config)
        .then((response) => {
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar,
          };

          commit("loginSuccess", userInfo);
          router.push({ name: "maincontents" });
        })
        .catch(() => {
          console.log("get err");
          alert("아이디와 비밀번호를 확인하세요");
        });
    },

    // 로그아웃
    logout() {
      this.commit("logout");
      router.push({ name: "login" });
    },
  },
  modules: {},
});
