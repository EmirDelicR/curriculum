<template>
  <div class="options-tab-content">
    <i class="far fa-times-circle close-icon" @click="addTransformEfect"></i>
    <Graph :data="getContentData" v-if="isVisual" />
    <Description :data="getContentData" v-if="!isVisual" />
  </div>
</template>

<script>
import Graph from "./Options/graph";
import Description from "./Options/description";
import { toggleSkillView } from "@/utils/helpers";

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
      toggleSkillView();
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
