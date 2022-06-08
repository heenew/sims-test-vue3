import { createRouter, createWebHistory } from "vue-router";
import MainContents from "../views/MainContents";
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
    path: "/firstmenu",
    name: "firstmenu",
    component: FirstMenu,
  },
  {
    path: "/secondmenu",
    name: "secondmenu",
    component: SecondMenu,
  },
  {
    path: "/thirdmenu",
    name: "thirdmenu",
    component: ThirdMenu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
