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
        <tr>
          <td :rowspan="IssueTypes.Legacy.length + 1">Legacy</td>
        </tr>
        <tr v-for="(legacy, index) in IssueTypes.Legacy" :key="index">
          <td>{{ legacy }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.EN가상화.length + 1">EN가상화</td>
        </tr>
        <tr v-for="(en, index) in IssueTypes.EN가상화" :key="index">
          <td>{{ en }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.SDN.length + 1">SDN</td>
        </tr>
        <tr v-for="(sdn, index) in IssueTypes.SDN" :key="index">
          <td>{{ sdn }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.서버.length + 1">서버</td>
        </tr>
        <tr v-for="(server, index) in IssueTypes.서버" :key="index">
          <td>{{ server }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.스토리지.length + 1">스토리지</td>
        </tr>
        <tr v-for="(storage, index) in IssueTypes.스토리지" :key="index">
          <td>{{ storage }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.Soft_Defined_Storage.length + 1">
            Soft_Defined_Storage
          </td>
        </tr>
        <tr
          v-for="(
            soft_defined_storage, index
          ) in IssueTypes.Soft_Defined_Storage"
          :key="index"
        >
          <td>{{ soft_defined_storage }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.가상화.length + 1">가상화</td>
        </tr>
        <tr v-for="(virtualization, index) in IssueTypes.가상화" :key="index">
          <td>{{ virtualization }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.PaaS.length + 1">PaaS</td>
        </tr>
        <tr v-for="(paas, index) in IssueTypes.PaaS" :key="index">
          <td>{{ paas }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.솔루션.length + 1">솔루션</td>
        </tr>
        <tr v-for="(solution, index) in IssueTypes.솔루션" :key="index">
          <td>{{ solution }}</td>
          <td>0</td>
          <td>0</td>
        </tr>

        <tr>
          <td :rowspan="IssueTypes.SI.length + 1">SI</td>
        </tr>
        <tr v-for="(si, index) in IssueTypes.SI" :key="index">
          <td>{{ si }}</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tfoot>
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
    };
  },
};
</script>

<style scoped>
table,
th,
td {
  text-align: center;
  text-align-last: center;
}

th {
  background-color: rgb(190, 189, 189);
}
</style>
