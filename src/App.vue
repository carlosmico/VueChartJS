<template>
  <div id="app">
    <h1>VUE-CHARTJS</h1>

    <div class="charts">
      <div class="chart">
        <h2>Line Chart</h2>

        <LineChart />
      </div>

      <div class="chart">
        <h2>Bar Chart</h2>

        <BarChart />
      </div>

      <div class="chart">
        <h2>Combo Bar/Line Chart</h2>

        <ComboBarLineChart />
      </div>

      <div class="chart">
        <h2>Bubble Chart</h2>

        <BubbleChart />
      </div>

      <div class="chart">
        <h2>Doughnut Chart</h2>

        <DoughnutChart />
      </div>

      <div class="chart">
        <h2>Pie Chart</h2>

        <PieChart />
      </div>
    </div>

    <div class="chart">
      <h2>Chart with dynamic styles</h2>

      <ChartWithDynamicStyles />
    </div>
  </div>
</template>

<script>
import LineChart from "./components/LineChart.vue";
import BarChart from "./components/BarChart.vue";
import BubbleChart from "./components/BubbleChart.vue";
import DoughnutChart from "./components/DoughnutChart.vue";
import PieChart from "./components/PieChart.vue";
import ChartWithDynamicStyles from "./components/ChartWithDynamicStyles.vue";
import ComboBarLineChart from "./components/ComboBarLineChart.vue";

export default {
  name: "App",
  components: {
    BarChart,
    BubbleChart,
    ChartWithDynamicStyles,
    ComboBarLineChart,
    DoughnutChart,
    PieChart,
    LineChart,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 50px;
}

.charts {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px;
}

.charts .chart {
  padding: 4vh;
  max-width: 400px;
}
</style>
