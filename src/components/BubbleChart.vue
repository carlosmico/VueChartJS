<script>
import { Bubble } from "vue-chartjs";

const data = [
  {
    x: 5,
    y: 4,
    r: 10,
  },
  {
    x: 2,
    y: 14,
    r: 3,
  },
  {
    x: 4,
    y: 12,
    r: 11,
  },
  {
    x: 2,
    y: 10,
    r: 7,
  },
  {
    x: 3,
    y: 4,
    r: 20,
  },
  {
    x: 3,
    y: 5,
    r: 2,
  },
  {
    x: 3,
    y: 8,
    r: 10,
  },
  {
    x: 6,
    y: 12,
    r: 5,
  },
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default {
  extends: Bubble,
  name: "BubbleChart",
  data: () => ({
    type: "bubble",
    chartdata: {
      labels: [1, "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Population",
          data: data,
          borderColor: "orange",
          backgroundColor: "orange",
        },
      ],
    },
    options: options,
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
