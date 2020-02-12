<template>
  <div class="accordion">
    <PortfolioItem v-for="item in getPortfolioData" :key="item.id" :data="item" />
  </div>
</template>

<script>
import PortfolioItem from "./portfolio-item";
import { portfolioData } from "./data";

export default {
  name: "Accordion",
  components: { PortfolioItem },
  data() {
    return {
      data: null
    };
  },
  mounted() {
    this.data = portfolioData;
  },
  computed: {
    getPortfolioData() {
      if (!this.data) {
        return [];
      }

      return this.data;
    }
  }
};
</script>
