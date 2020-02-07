<template>
  <div class="skill-chart">
    <canvas id="skill-canvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import { GRAPH_RADAR_OPTIONS, GRAPH_DATASET_CONFIG } from "@/utils/constants";

export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      radar: null,
      graphData: null
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    getCurrentLang: function() {
      this.radar.data = this.getGraphData;
      this.radar.update();
    },
    isBigScreen: function() {
      /** */
    }
  },
  methods: {
    init() {
      const ctx = document.getElementById("skill-canvas");
      this.setGraphOptions();

      this.radar = new Chart(ctx, {
        type: "radar",
        data: this.getGraphData,
        options: GRAPH_RADAR_OPTIONS
      });
    },
    setGraphOptions() {
      GRAPH_RADAR_OPTIONS.title.text = this.$props.data.name;
      GRAPH_RADAR_OPTIONS.aspectRatio = this.screenSizeGraphRation;
      GRAPH_RADAR_OPTIONS.scale.ticks.userCallback = value => {
        return this.getTickLabels[value];
      };
    }
  },
  computed: {
    getGraphData() {
      const data = {
        labels: this.getLabels,
        datasets: [
          {
            label: this.$t("graph-labels.overview"),
            data: this.$props.data.data,
            ...GRAPH_DATASET_CONFIG
          }
        ]
      };
      return data;
    },
    getTickLabels() {
      return {
        5: "",
        10: this.$t("graph-ticks-labels.no"),
        15: "",
        20: this.$t("graph-ticks-labels.basic"),
        25: "",
        30: this.$t("graph-ticks-labels.proficient"),
        35: "",
        40: this.$t("graph-ticks-labels.great"),
        45: "",
        50: this.$t("graph-ticks-labels.outstanding")
      };
    },
    getCurrentLang() {
      return this.$i18n.locale;
    },
    getLabels() {
      return [
        this.$t("graph-labels.speed"),
        this.$t("graph-labels.knowledge"),
        this.$t("graph-labels.level"),
        this.$t("graph-labels.enjoy"),
        this.$t("graph-labels.comfort")
      ];
    },
    screenSizeGraphRation() {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (1400 < width && width < 1900) {
        return 1.3;
      }
      if (width > 1900) {
        return 1.5;
      }
      if (width > 2400) {
        return 2;
      }

      return 1;
    }
  },
  beforeDestroy() {
    this.radar.destroy();
  }
};
</script>
