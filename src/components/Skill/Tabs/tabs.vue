<template>
  <div class="skill-tabs">
    <div class="tabs">
      <a
        v-for="(item, index) in data"
        :key="item.tabName"
        @click="activeTab=index"
        :class="isClassActive(index)"
      >{{ $t(`tabs-name.${item.tabName}`) }}</a>
    </div>

    <div class="content">
      <div v-for="(item, index) in data" :key="item.tabName">
        <div class="tabcontent" v-if="activeTab === index && item.type === 'description'">
          <DescriptionConntent
            v-for="content in item.content"
            :key="content.name"
            :content="content"
          />
        </div>

        <div class="tabcontent" v-if="activeTab === index && item.type === 'options'">
          <OptionContent v-for="content in item.content" :key="content.name" :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionConntent from "./description-conntent";
import OptionContent from "./option-conntent";
export default {
  name: "Tabs",
  components: {
    DescriptionConntent,
    OptionContent
  },
  props: {
    data: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      activeTab: 0
    };
  },
  computed: {
    isClassActive() {
      return index => (this.activeTab === index ? "active" : "");
    }
  }
};
</script>
