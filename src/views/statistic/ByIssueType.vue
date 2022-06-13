<template>
  <div class="table-container">
    <h2>장애 유형별 통계</h2>
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th rowspan="2" colspan="2">장애 유형</th>
          <th rowspan="2">진행 중인 장애 건수</th>
          <th>60일 이상</th>
        </tr>
        <tr>
          <th>장기 미완료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(IssueType, index) in IssueTypes" :key="index">
          <td rowspan="IssueType.length">
            {{ index }}
          </td>
        </tr>
        <tr v-for="(IssueType, index) in IssueTypes" :key="index">
          <td>{{ IssueType }}</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IssueTypes: {
        Legacy: [
          "Router",
          "Switch",
          "Firewall",
          "IPS",
          "VPN",
          "Wifi",
          "IPT",
          "VDI",
        ],
        EN가상화: ["SDA", "EN_Wifi", "ISE", "SDWAN"],
        SDN: ["ACI", "NSX", "DCNM"],
        서버: ["Cisco", "Dell", "HP", "기타"],
        스토리지: ["Dell/EMC", "기타", "SAN", "스위치"],
        Soft_Defined_Storage: [
          "HyperFlex",
          "Intersight",
          "VxRail/vSAN",
          "Powerflex",
          "기타",
        ],
        가상화: ["vSphere", "Openstack/KVM"],
        PaaS: ["Tanzu", "Openshift", "K8s", "RedhatOS"],
        솔루션: ["Nexus Dashboard", "vRealizeSuite", "CWOM", "RTLS"],
        SI: [
          "web서버",
          "was서버",
          "미들웨어/연계서버",
          "DB",
          "java 등",
          "Language",
        ],
      },
      typeA: [],
    };
  },
  mounted() {
    this.typeA = Object.keys(this.IssueTypes);
    console.log(this.typeA);
    console.log(this.IssueTypes.Legacy.length);
    console.log(this.IssueTypes.object);
  },
  methods: {
    getRowSpan(index) {
      let rowSpan = this.IssueTypes.index.length;

      return rowSpan;
    },
  },
};
</script>

<style scope>
table,
th,
td {
  text-align: center;
}
</style>
