<template>
  <div style="padding: 2em">
    <h1>Main</h1>
    <hr />
    <div class="columns">
      <div v-for="(num, index) in nums" :key="index" class="column">
        <div class="box has-background-grey-lighter">{{ num }} column</div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <Chart />
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/ChartEx.vue";
export default {
  data() {
    return {
      nums: ["First", "Second", "Third", "Fourth"],
    };
  },
  components: {
    Chart,
  },
};
</script>

<style>
/* @import "../../node_modules/bulma/css/bulma.css"; */
</style>
