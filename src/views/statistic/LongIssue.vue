<template>
  <div class="table-container">
    <h2>.</h2>
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th>조직 별</th>
          <th>장기 미완료 장애 건수</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(group, index) in groupList" :key="index">
          <td>{{ group }}</td>
          <td>0</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td>0</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="table-container2">
    <h2>.</h2>
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th>기간</th>
          <th>15일 이내</th>
          <th>16~30일</th>
          <th>31~45일</th>
          <th>46~60일</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>장애 건수</td>
          <td>0</td>
          <td>0</td>
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
        "Cloud서비스사업",
        "Cloud컨설팅",
        "오감지능연구소",
      ],
    };
  },
};
</script>

<style scoped>
.table-container2 {
  height: 10%;
  width: 500px;
}
</style>
