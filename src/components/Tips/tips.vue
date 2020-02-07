<template>
  <div>
    <div class="tabs">
      <a
        v-for="(item, index) in getTipsData"
        :key="item.tabName"
        @click="activeTab=index"
        :class="isClassActive(index)"
      >{{ $t(`tabs-name.${item.tabName}`) }}</a>
    </div>
    <div class="content">
      <div v-for="(item, index) in getTipsData" :key="item.tabName">
        <div class="tabcontent" v-if="activeTab === index">
          <Roadmap :content="item.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tipsData } from "./data";
import Roadmap from "./roadmap";

export default {
  name: "Tips",
  components: {
    Roadmap
  },
  data() {
    return {
      activeTab: 0
    };
  },
  computed: {
    isClassActive() {
      return index => (this.activeTab === index ? "active" : "");
    },
    getTipsData() {
      return tipsData;
    }
  }
};
</script>