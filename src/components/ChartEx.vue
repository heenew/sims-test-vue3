<template>
  <Bar :chart-options="chartOptions" :chart-data="chartData" :height="200" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {},
  data() {
    return {
      chartData: {
        labels: ["data1", "data2", "data3", "data4", "data5"],
        datasets: [{ data: [40, 20, 12, 90, 20] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
