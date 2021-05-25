<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  name: "LineChart",
  mixins: [reactiveProp],
  // data() {
  //   return {
  //     chartdata: {
  //       labels: ["January", "February", "March", "April", "May", "June"],
  //       datasets: [
  //         {
  //           label: "Users",
  //           backgroundColor: "turquoise",
  //           data: [10, 20, 5, 50, 30, 60],
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //     },
  //   };
  // },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>