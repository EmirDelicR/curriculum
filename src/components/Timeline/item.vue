<template>
  <div class="swiper-slide">
    <div class="description">
      <div class="header">
        <i :class="item.icon"></i>
        <span class="language-cour">{{ item.title }}</span>
      </div>
      <div class="link-desc">
        <p>{{ item.job }}</p>
        <a :href="item.link" class="language-cour" target="blank">{{ item.linkDescription }}</a>
      </div>

      <div class="location">
        <span>{{ item.location }}</span>
        <i class="fas fa-map-marker-alt"></i>
      </div>
    </div>

    <div class="line"></div>
    <div class="timestamp">
      <span>{{ item.time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>
