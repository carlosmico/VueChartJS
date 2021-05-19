<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "BarChart",
  data: () => ({
    chartdata: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Users",
          backgroundColor: "purple",
          data: [10, 20, 5, 50, 30, 60],
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
