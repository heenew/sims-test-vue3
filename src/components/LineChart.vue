<template>
  <Line :chart-options="chartOptions" :chart-data="chartData" :height="200" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  name: "LineChart",
  components: { Line },
  props: ["chartData"],
  watch: {
    chartData: function (newVal) {
      this.renderChart(newVal, {
        responsive: true,
        maintainAspectRatio: false,
      });
    },
  },
  //   mounted: function () {
  //     console.log(this.chartData);
  //       this.renderChart(this.chartData, {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //       });
  //   },
};
</script>
