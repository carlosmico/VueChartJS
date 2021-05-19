<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "LineChart",
  data() {
    return {
      chartdata: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Users",
            backgroundColor: "turquoise",
            data: [10, 20, 5, 50, 30, 60],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>