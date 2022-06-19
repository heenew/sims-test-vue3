import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import MainContents from "../views/MainContents";
import DashBoard from "../views/DashBoard";
import FirstMenu from "../views/FirstMenu";
import SecondMenu from "../views/SecondMenu";
import ThirdMenu from "../views/ThirdMenu";
import store from "../store";

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    console.log("라우터 가드 실패");
    // 이미 로그인 된 유저이면 막음
    alert("로그인이 필요한 기능입니다.");
    next("/"); // 홈으로 리다이렉션
  } else {
    next(); // 아니면 그대로 입장 허용
  }
};

const routes = [
  {
    path: "/maincontents",
    name: "maincontents",
    beforeRouteEnter: onlyAuthUser,
    component: MainContents,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
    beforeRouteEnter: onlyAuthUser,
    children: [
      {
        path: "/dashboard/firstmenu",
        name: "firstmenu",
        component: FirstMenu,
      },
      {
        path: "/dashboard/secondmenu",
        name: "secondmenu",
        component: SecondMenu,
      },
      {
        path: "/dashboard/thirdmenu",
        name: "thirdmenu",
        component: ThirdMenu,
      },
    ],
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
