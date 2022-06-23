<template>
  <div class="wrapper">
    new line : Alt + Enter
    <div id="SetSpreadSheet" ref="refspreadsheet"></div>
    <br />

    <!-- 열 추가 -->
    <input
      type="button"
      value="Insert Row"
      @click="jspreadsheetObj.insertRow()"
    />
    &nbsp;
    <!-- 엑셀 다운로드 -->
    <input
      type="button"
      value="Download"
      @click="jspreadsheetObj.download()"
    /><br />
  </div>
</template>

<script>
import "jsuites/dist/jsuites.js";
import "jsuites/dist/jsuites.css";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import jSpreadSheet from "jspreadsheet-ce";
import axios from "axios";

export default {
  name: "sheet",
  data() {
    return {
      DataSets: [],
      selectState: ["진행중", "완료"],
      selectUrgency: ["상", "중"],
      selectIssueRange: ["서비스 중단", "장비 운용 불가", "기타"],
      //표의 초기값
    };
  },
  computed: {
    jSpreadSheetOptins() {
      return {
        // 표 설정
        data: this.DataSets,
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
            source: ["상", "중"],
          },
          {
            type: "dropdown",
            title: "장애범위",
            width: 90,
            source: ["서비스 중단", "장비 운용 불가", "기타"],
          },
          {
            type: "dropdown",
            title: "장애유형(A)",
            width: 90,
            source: [
              { id: "Legacy", name: "Legacy" },
              { id: "EN가상화", name: "EN가상화" },
              { id: "SDN", name: "SDN" },
              { id: "서버", name: "서버" },
              { id: "스토리지", name: "스토리지" },
              { id: "Soft_Defined_Storage", name: "Soft_Defined_Storage" },
              { id: "가상화", name: "가상화" },
              { id: "PaaS", name: "PaaS" },
              { id: "솔루션", name: "솔루션" },
              { id: "SI", name: "SI" },
            ],
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
            filter: this.dropdownFilter,
          },
          {
            type: "text",
            title: "장애내용",
            width: 120,
            wordWrap: true,
          },
          {
            type: "dropdown",
            title: "진행단계",
            width: 80,
            source: ["진행중", "완료"],
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
            // source: this.SUMCOL(TABLE(), 2),
          },
        ],
        tableOverflow: true, // 스크롤의 활성화
        csvFileName: "excelname", // 다운로드 시 파일 이름
        pagination: 10, // 페이지 번호 보이기
        search: true, // 검색기능
        footers: [["Total", "", "", "=SUMCOL(TABLE(), 3)"]],
      };
    },
  },
  methods: {
    // 장애유형(A)에 따른 장애유형(B) 드롭다운 필터링
    dropdownFilter(instance, cell, c, r, source) {
      var value = instance.jexcel.getValueFromCoords(c - 1, r);
      if (value === "Legacy") {
        return [
          "Router",
          "Switch",
          "Firewall",
          "IPS",
          "VPN",
          "Wifi",
          "IPT",
          "VDI",
        ];
      } else if (value === "EN가상화") {
        return ["SDA", "EN_Wifi", "ISE", "SDWAN"];
      } else if (value === "SDN") {
        return ["ACI", "NSX", "DCNM"];
      } else if (value === "서버") {
        return ["Cisco", "Dell", "HP", "기타"];
      } else if (value === "스토리지") {
        return ["Dell/EMC", "기타", "SAN", "스위치"];
      } else if (value === "Soft_Defined_Storage") {
        return ["HyperFlex", "Intersight", "VxRail/vSAN", "Powerflex", "기타"];
      } else if (value === "가상화") {
        return ["vSphere", "Openstack/KVM"];
      } else if (value === "PaaS") {
        return ["Tanzu", "Openshift", "K8s", "RedhatOS"];
      } else if (value === "솔루션") {
        return ["Nexus Dashboard", "vRealizeSuite", "CWOM", "RTLS"];
      } else if (value === "SI") {
        return [
          "web서버",
          "was서버",
          "미들웨어/연계서버",
          "DB",
          "java 등",
          "Language",
        ];
      } else {
        return source;
      }
    },

    pushExcel() {
      //인스턴스화
      const jspreadsheetObj = jSpreadSheet(
        //DOM 참조
        this.$refs["refspreadsheet"],
        //표 설정 데이터
        this.jSpreadSheetOptins
      );
      // 오브젝트에서 this에 대해 복사
      Object.assign(this, { jspreadsheetObj });
      this.fetchCases();
    },
    async fetchData(url, params) {
      const res = await this.axios.get(url, { params });
      return res.data;
    },

    async fetchCases() {
      const url = "./dataex.json";
      const summary = await this.fetchData(url);

      this.DataSets = summary;
      console.log(this.DataSets);

      this.pushExcel();
    },
  },
  mounted: function () {
    //인스턴스화
    const jspreadsheetObj = jSpreadSheet(
      //DOM 참조
      this.$refs["refspreadsheet"],
      //표 설정 데이터
      this.jSpreadSheetOptins
    );
    // 오브젝트에서 this에 대해 복사
    Object.assign(this, { jspreadsheetObj });

    // this.fetchCases();
  },
};
</script>
