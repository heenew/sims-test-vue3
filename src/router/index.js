import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Login";
import ResetPw from "../views/login/ResetPw";
import MainContents from "../views/MainContents";

// 이슈 목록
import IssueList from "../views/issueList/IssueList";
import FirstMenu from "../views/issueList/FirstMenu";
import PublicTech1 from "../views/issueList/PublicTech1";
import PublicTech2 from "../views/issueList/PublicTech2";
import FinancialTech from "../views/issueList/FinancialTech";
import ICTInfra1 from "../views/issueList/ICTInfra1";
import ICTInfra2 from "../views/issueList/ICTInfra2";
import SOC from "../views/issueList/SOC";
import SDDC from "../views/issueList/SDDC";
import BDM from "../views/issueList/BDM";
import BTS from "../views/issueList/BTS";
import CNC from "../views/issueList/CNC";
import CloudService from "../views/issueList/CloudService";
import CloudConsulting from "../views/issueList/CloudConsulting";
import S2F from "../views/issueList/S2F";

// 이슈 현황
import IssueState from "../views/issueState/IssueState";
import ByGroup from "../views/issueState/ByGroup";
import ByIssueType from "../views/issueState/ByIssueType";
import store from "../store";

// const onlyAuthUser = (to, from, next) => {
//   if (store.state.isLogin === false) {
//     console.log("라우터 가드 실패");
//     // 이미 로그인 된 유저이면 막음
//     this.$alert("로그인이 필요한 기능입니다.");
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
    path: "/issuelist",
    name: "issuelist",
    component: IssueList,
    // beforeRouteEnter: onlyAuthUser,
    children: [
      {
        path: "/issuelist/firstmenu",
        name: "firstmenu",
        component: FirstMenu,
      },
      {
        path: "/issuelist/publictech1",
        name: "publictech1",
        component: PublicTech1,
      },
      {
        path: "/issuelist/publictech2",
        name: "publictech2",
        component: PublicTech2,
      },
      {
        path: "/issuelist/financialtech",
        name: "financialtech",
        component: FinancialTech,
      },
      {
        path: "/issuelist/ictinfra1",
        name: "ictinfra1",
        component: ICTInfra1,
      },
      {
        path: "/issuelist/ictinfra2",
        name: "ictinfra2",
        component: ICTInfra2,
      },
      {
        path: "/issuelist/soc",
        name: "soc",
        component: SOC,
      },
      {
        path: "/issuelist/sddc",
        name: "sddc",
        component: SDDC,
      },
      {
        path: "/issuelist/bdm",
        name: "bdm",
        component: BDM,
      },
      {
        path: "/issuelist/bts",
        name: "bts",
        component: BTS,
      },
      {
        path: "/issuelist/cnc",
        name: "cnc",
        component: CNC,
      },
      {
        path: "/issuelist/cloudservice",
        name: "cloudservice",
        component: CloudService,
      },
      {
        path: "/issuelist/cloudconsulting",
        name: "cloudconsulting",
        component: CloudConsulting,
      },
      {
        path: "/issuelist/s2f",
        name: "s2f",
        component: S2F,
      },
    ],
  },
  {
    path: "/issuestate",
    name: "issuestate",
    component: IssueState,
    children: [
      {
        path: "/issuestate/bygroup",
        name: "bygroup",
        component: ByGroup,
      },
      {
        path: "/issuestate/byissuetype",
        name: "byissuetype",
        component: ByIssueType,
      },
    ],
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
