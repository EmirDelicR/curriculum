<template>
  <div class="options-tab-content">
    <div @click="addTransformEfect">
      <i class="far fa-times-circle close-icon"></i>
    </div>
    <Graph :data="getContentData" v-if="isVisual" />
    <Description :data="getContentData" v-if="!isVisual" />
  </div>
</template>

<script>
import Graph from "./Options/graph";
import Description from "./Options/description";
import { toggleView } from "@/utils/helpers";

export default {
  name: "OptionConntent",
  components: {
    Graph,
    Description
  },
  props: {
    content: {
      required: true,
      type: Object
    }
  },
  methods: {
    addTransformEfect() {
      toggleView("skill-option");
    }
  },
  computed: {
    getContentData() {
      return this.$props.content;
    },
    isVisual() {
      return this.$props.content.type === "visual";
    }
  }
};
</script>
