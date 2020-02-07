<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <Item v-for="item in steps" :key="item.id" :item="item" />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, Pagination, Autoplay } from "swiper/js/swiper.esm.js";
import { timelineConfiguration } from "@/utils/swiper";
import { data } from "./data";
import Item from "./item";

Swiper.use([Pagination, Autoplay]);

export default {
  name: "Timeline",
  components: {
    Item
  },
  data() {
    return {
      steps: data,
      swiper: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-container", timelineConfiguration);
    });
  },

  beforeDestroy() {
    this.swiper.destroy();
  }
};
</script>
<style src="swiper/css/swiper.min.css"></style>
