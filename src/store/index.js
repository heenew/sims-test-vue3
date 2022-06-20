import { createStore } from "vuex";
import router from "../router";
import axios from "axios";

export default createStore({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    allUsers: [],
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
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },

    // 로그아웃
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },

  actions: {
    login({ dispatch }, loginObj) {
      console.log(loginObj);

      axios
        .post("https://reqres.in/api/login", loginObj) // 파라미터
        .then((res) => {
          console.log(loginObj);
          console.log("post:", res);

          let token = res.data.token; // 토큰을 로컬스토리지에 저장
          localStorage.setItem("access_token", token);

          dispatch("getMemberInfo");
          router.push({ name: "maincontents" });
        })
        .catch((err) => {
          console.log("post err : ", err);

          // 로그인 실패 알림창
          if (
            (loginObj.email == null || loginObj.email == "") &&
            (loginObj.password == null || loginObj.password == "")
          ) {
            alert("아이디와 비밀번호를 입력하세요.");
          } else if (loginObj.email == null || loginObj.email == "") {
            alert("아이디를 입력하세요.");
          } else if (loginObj.password == null || loginObj.password == "") {
            alert("비밀번호를 입력하세요.");
          } else {
            alert("아이디와 비밀번호를 확인해주세요.");
          }
        });
    },

    getMemberInfo({ commit, dispatch }) {
      // 토큰을 확인해 사용자 정보 가져오기

      if (localStorage.getItem("access_token")) {
        let token = localStorage.getItem("access_token");
        let config = {
          // 헤더 값 설정
          headers: {
            "access-token": token,
          },
        };

        axios
          .get("https://reqres.in/api/users/2", config)
          .then((response) => {
            // let userInfo = {
            //   id: response.data.data.id,
            //   first_name: response.data.data.first_name,
            //   last_name: response.data.data.last_name,
            //   avatar: response.data.data.avatar,
            //   email: response.data.data.email,
            // };
            commit("loginSuccess", response.data.data);
            console.log("get:", response);
            console.log("getMemberInfo 성공");
          })
          .catch(() => {
            console.log("get err");
            // alert("로그인이 필요한 기능입니다.");
            dispatch("logout");
            router.push({ name: "login" });
          });
      } else {
        router.push({ name: "login" });
      }
    },

    // 로그아웃
    logout({ commit }) {
      commit("logout");
      localStorage.removeItem("access_token");
      router.push({ name: "login" });
    },
  },
  modules: {},
});
