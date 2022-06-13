<template>
  <div class="table-container">
    <h2>Meta Tech Center 장애 이력 현황</h2>
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th colspan="5">장애 이력 현황</th>
        </tr>
        <tr>
          <th rowspan="2">조직</th>

          <th colspan="3">진행중(긴급도)</th>
          <th rowspan="2">완료</th>
        </tr>
        <tr>
          <th>상</th>
          <th>중</th>
          <th>소계</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(group, index) in groupList" :key="index">
          <td>{{ group }}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><b>Total</b></td>
          <td>0</td>
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
      groupList: [
        "공공기술1",
        "공공기술2",
        "금융기술",
        "ICT인프라기술1",
        "ICT인프라기술2",
        "SOC기술",
        "SDDC",
        "BDM",
        "BTS",
        "C&C",
        "Cloud서비스사업팀",
        "Cloud컨설팅",
        "오감지능연구소",
      ],
    };
  },
};
</script>

<style scope>
table,
th,
td,
tr {
  text-align: center;
}
table {
  width: 800px;
  height: 600px;
}
</style>
