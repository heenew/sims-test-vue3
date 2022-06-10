<template>
  <div>
    <div id="excel" ref="spreadsheet"></div>
    <div>
      <input
        type="button"
        value="Add new row"
        @click="() => spreadsheet.insertRow()"
      />
    </div>
  </div>
</template>

<script>
import jexcel from "jspreadsheet-ce";

var data = [
  ["Jazz", "Honda", "2019-02-12", "", true, "$ 2.000,00", "#777700"],
  ["Civic", "Honda", "2018-07-11", "", true, "$ 4.000,01", "#007777"],
];
var options = {
  data: data,
  allowToolbar: true,
  search: true,
  pagination: 10,
  filters: true,
  allowComments: true,
  columns: [
    {
      type: "text",
      title: "프로젝트 명",
      width: 120,
    },
    {
      type: "text",
      title: "프로젝트 코드",
      width: 100,
    },
    {
      type: "text",
      title: "고객사",
      width: 90,
    },
    {
      type: "dropdown",
      title: "긴급도",
      width: 50,
      source: this.selectUrgency,
    },
    {
      type: "dropdown",
      title: "장애범위",
      width: 90,
      source: this.selectIssueRange,
    },
    {
      type: "dropdown",
      title: "장애유형(A)",
      width: 90,
      source: Object.keys(this.selectIssueTypeA),
      // source: [{'id':'1', 'name':Object.keys(this.selectIssueTypeA)[0]}, {'id':'2', 'name':Object.keys(this.selectIssueTypeA)[1]},
      // {'id':'3', 'name':Object.keys(this.selectIssueTypeA)[2]},{'id':'4', 'name':Object.keys(this.selectIssueTypeA)[3]},
      // {'id':'5', 'name':Object.keys(this.selectIssueTypeA)[4]},{'id':'6', 'name':Object.keys(this.selectIssueTypeA)[5]},
      // {'id':'7', 'name':Object.keys(this.selectIssueTypeA)[6]},{'id':'8', 'name':Object.keys(this.selectIssueTypeA)[7]},
      // {'id':'9', 'name':Object.keys(this.selectIssueTypeA)[8]},{'id':'10', 'name':Object.keys(this.selectIssueTypeA)[9]},
      // ]
    },
    {
      type: "dropdown",
      title: "장애유형(B)",
      width: 90,
      source: [
        "Router",
        "Switch",
        "Firewall",
        "IPS",
        "VPN",
        "Wifi",
        "IPT",
        "VDI",
        "SDA",
        "EN_Wifi",
        "ISE",
        "SDWAN",
        "ACI",
        "NSX",
        "DCNM",
        "Cisco",
        "Dell",
        "HP",
        "기타",
        "Dell/EMC",
        "기타",
        "SAN",
        "스위치",
        "HyperFlex",
        "Intersight",
        "VxRail/vSAN",
        "Powerflex",
        "기타",
        "vSphere",
        "Openstack/KVM",
        "Tanzu",
        "Openshift",
        "K8s",
        "RedhatOS",
        "Nexus Dashboard",
        "vRealizeSuite",
        "CWOM",
        "RTLS",
        "web서버",
        "was서버",
        "미들웨어/연계서버",
        "DB",
        "java 등",
        "Language",
      ],
      filter: this.selectIssueTypeB,
    },
    {
      type: "text",
      title: "장애내용",
      width: 120,
    },
    {
      type: "dropdown",
      title: "진행단계",
      width: 80,
      source: this.selectState,
    },
    {
      type: "calendar",
      title: "발생시점",
      width: 100,
      options: { format: "YYYY/MM/DD" },
    },
    {
      type: "calendar",
      title: "종료시점",
      width: 100,
      options: { format: "YYYY/MM/DD" },
    },
    {
      type: "text",
      title: "담당자",
      width: 80,
    },
    {
      type: "text",
      title: "비고",
      width: 80,
    },
    {
      type: "text",
      title: "경과일",
      width: 60,
    },

    { type: "color", width: "100px", render: "square" },
  ],
};
export default {
  name: "Excel",
  mounted: function () {
    let spreadsheet = jexcel(this.$el, options);
    Object.assign(this, { spreadsheet });
  },
};
</script>
<style>
@import "https://jsuites.net/v4/jsuites.css";
@import "https://bossanova.uk/jspreadsheet/v4/jexcel.css";
</style>
