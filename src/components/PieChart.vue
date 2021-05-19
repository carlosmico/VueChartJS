<script>
import { Pie } from "vue-chartjs";

const labels = ["Tomato", "Purple", "Orange", "Turquoise", "Pink"];

export default {
  extends: Pie,
  name: "PieChart",
  data: () => ({
    chartdata: {
      labels: labels,
      datasets: [
        {
          label: "Users",
          backgroundColor: labels,
          data: [10, 20, 50, 30, 60],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
