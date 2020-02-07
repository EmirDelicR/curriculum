<template>
  <div class="skill-container">
    <div class="skill-description">
      <Tabs :data="getDescription" />
    </div>
    <div class="skill-option">
      <Tabs :data="getOption" />
    </div>
  </div>
</template>

<script>
import Tabs from './Tabs/tabs';
import { descriptionData, optionData } from './data';
import { STORE } from '@/utils/store';

export default {
  name: 'SkillTemplate',
  components: { Tabs },
  data() {
    return {
      options: null,
      description: null
    };
  },
  mounted() {
    this.options = optionData;
    this.description = descriptionData;
  },
  computed: {
    getDescription() {
      return this.description ? this.description : [];
    },
    getOption() {
      if (!this.options) {
        return [];
      }
      const filteredItem = this.options.filter(
        item => item.name === STORE.skillItem
      );
      return filteredItem[0] ? filteredItem[0].data : [];
    }
  }
};
</script>
