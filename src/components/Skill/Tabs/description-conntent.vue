<template>
  <div class="description-tab-content">
    <p>{{ $t(`skill-list.${content.name}`) }}</p>
    <ul>
      <li
        v-for="element in content.data"
        :key="element"
        @click="showDetails(element)"
        :class="isActive(element)"
      >{{element | capitalize}}</li>
    </ul>
  </div>
</template>

<script>
import { STORE } from "@/utils/store";
import { capitalize, toggleSkillView } from "@/utils/helpers";

export default {
  name: "DescriptionConntent",
  props: {
    content: {
      required: true,
      type: Object
    }
  },

  filters: {
    capitalize
  },

  methods: {
    showDetails(element) {
      STORE.skillItem = element;
      toggleSkillView();
    }
  },
  computed: {
    isActive() {
      return elem => (STORE.skillItem === elem ? "active" : "");
    }
  }
};
</script>
