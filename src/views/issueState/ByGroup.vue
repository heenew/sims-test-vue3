<template>
  <div>
    <br />
    <h1>조직별 통계</h1>
    <hr />
    <div class="block">
      <div class="columns">
        <div class="column is-half">
          <h2><b>진행중인 장애 건수</b></h2>
          <br />
          <div class="box">
            <ChNumByGroup />
          </div>
        </div>
        <div class="column is-half">
          <h2><b>장기 미완료 장애 건수</b></h2>
          <br />
          <div class="box">
            <ChLongByGroup />
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="block">
      <h2><b>Meta Tech Center 장애 이력 현황</b></h2>
      <br />
      <div class="box">
        <ExUrgency />
      </div>
    </div>
  </div>
</template>

<script>
import ChNumByGroup from "../../components/chart/ChNumByGroup";
import ChLongByGroup from "../../components/chart/ChLongByGroup";
import ExUrgency from "../../components/spreadsheet/ExUrgency";

export default {
  components: {
    ChNumByGroup,
    ChLongByGroup,
    ExUrgency,
  },
};
</script>

<style></style>
