<template>
  <div class="slide" :style="{ 'background-image': `url(${getImage(item.image)})` }">
    <div class="overlay"></div>
    <div class="content">
      <h2>{{ item.title }}</h2>
    </div>
  </div>
</template>

<script>
import { lazyLoadImage } from "@/utils/helpers";

export default {
  name: "Item",
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    getImage() {
      return name => lazyLoadImage(name);
    }
  }
};
</script>
