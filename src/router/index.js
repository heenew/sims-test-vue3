import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login";
import ResetPw from "../views/login/ResetPw";
import MainContents from "../views/MainContents";
import IssueRegister from "../views/issueRegister/IssueRegister";
import FirstMenu from "../views/issueRegister/FirstMenu";
import SecondMenu from "../views/issueRegister/SecondMenu";
import ThirdMenu from "../views/issueRegister/ThirdMenu";
import IssueState from "../views/issueState/IssueState";
import store from "../store";

// const onlyAuthUser = (to, from, next) => {
//   if (store.state.isLogin === false) {
//     console.log("라우터 가드 실패");
//     // 이미 로그인 된 유저이면 막음
//     alert("로그인이 필요한 기능입니다.");
//     next("/"); // 홈으로 리다이렉션
//   } else {
//     next(); // 아니면 그대로 입장 허용
//   }
// };

const routes = [
  {
    path: "/",
    name: "maincontents",
    // beforeRouteEnter: onlyAuthUser,
    component: MainContents,
  },
  {
    path: "/issueregister",
    name: "issueregister",
    component: IssueRegister,
    // beforeRouteEnter: onlyAuthUser,
    children: [
      {
        path: "/issueregister/firstmenu",
        name: "firstmenu",
        component: FirstMenu,
      },
      {
        path: "/issueregister/secondmenu",
        name: "secondmenu",
        component: SecondMenu,
      },
      {
        path: "/issueregister/thirdmenu",
        name: "thirdmenu",
        component: ThirdMenu,
      },
    ],
  },
  {
    path: "/issuestate",
    name: "issuestate",
    component: IssueState,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/resetpw",
    name: "resetpw",
    component: ResetPw,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
