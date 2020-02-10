<template>
  <div class="skill-option-description">
    <div class="header">
      <i :class="getInnerData.icon"></i>
      <span class="language-cour">{{ data.name }}</span>
    </div>
    <div class="description">{{ $t(`skill-description.${getInnerData.description}`) }}</div>

    <div class="link-skill-desc" v-if="isValidLink(getInnerData.link)">
      <p>{{ $t('skill-description.link')}}</p>
      <a
        target="_blank"
        class="language-cour"
        :href="getInnerData.link"
        rel="noreferrer"
      >{{ data.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  computed: {
    getInnerData() {
      return this.$props.data.data;
    },
    isValidLink() {
      return link => link !== "#";
    }
  }
};
</script>
