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

const groupList = [
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
];

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
        labels: groupList,
        datasets: [{ data: [] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
