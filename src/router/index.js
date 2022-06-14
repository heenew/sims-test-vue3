import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import MainContents from "../views/MainContents";
import DashBoard from "../views/DashBoard";
import FirstMenu from "../views/FirstMenu";
import SecondMenu from "../views/SecondMenu";
import ThirdMenu from "../views/ThirdMenu";

const routes = [
  {
    path: "/",
    name: "maincontents",
    component: MainContents,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
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
    path: "login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
