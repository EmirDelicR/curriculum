<template>
  <div class="portfolio-item" :id="generateId">
    <a :href="generateLink" @click.prevent="setClass">
      {{ $t(`portfolio-data.${getData.title}`) }}
      <i :class="['far fa-lightbulb', generateId]"></i>
    </a>
    <div :class="['content', generateId]">
      <div class="content-data">
        <p>{{ $t(`portfolio-data.${getData.content}`) }}</p>
        <p>{{ $t('portfolio-data.programing_env') }} {{ getData.programs }}</p>
        <div @click="updateView" class="open-icon">
          <i class="fas fa-image"></i>
        </div>
      </div>
      <div :class="['portfolio-image', generateSliderId]">
        <div @click="updateView">
          <i class="far fa-times-circle close-icon"></i>
        </div>
        <img :src="getImage(getData.img_url)" :alt="generateId" />
      </div>
    </div>
  </div>
</template>

<script>
import { lazyLoadImage, toggleView } from "@/utils/helpers";

export default {
  name: "PortfolioItem",
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  computed: {
    getData() {
      return this.$props.data;
    },
    generateLink() {
      return `#${this.generateId}`;
    },
    generateId() {
      return `protofolio-item-${this.getData.id}`;
    },
    getImage() {
      return name => lazyLoadImage(name);
    },
    generateSliderId() {
      return `slide-${this.getData.id}`;
    }
  },
  methods: {
    setClass() {
      this.toogleHtmlItemClass("content active");
      this.toogleHtmlItemClass(`content ${this.generateId}`);
      this.toogleHtmlItemClass("svg-inline--fa  active");
      this.toogleHtmlItemClass(`svg-inline--fa ${this.generateId}`);
    },
    toogleHtmlItemClass(className) {
      const item = document.getElementsByClassName(`${className}`)[0];
      if (item) {
        item.classList.toggle("active");
      }
    },
    updateView() {
      toggleView(this.generateSliderId);
    }
  }
};
</script>