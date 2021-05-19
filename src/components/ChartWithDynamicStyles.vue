<template>
  <div class="chart-with-dynamic-styles">
    <line-chart :styles="myStyles" />
    <button @click="increase()">+ height</button>
    <button @click="decrease()">- height</button>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";

export default {
  name: "ChartWithDynamicStyles",
  data() {
    return {
      height: 300,
    };
  },
  components: { LineChart },
  methods: {
    increase() {
      this.height += 40;
    },
    decrease() {
      this.height -= 40;
    },
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`,
        position: "relative",
      };
    },
  },
};
</script>

<style lang="css" scoped>
.chart-with-dynamic-styles button {
  margin: 10px;
  margin-top: 30px;
}
</style>