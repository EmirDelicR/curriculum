<template>
  <div class="certificate-wrapper">
    <SlideItem v-for="slide in getSlideItems" :item="slide" :key="slide.title" />
  </div>
</template>

<script>
import SlideItem from "@/components/Certificates/slide-item";
import { CERTIFICATIONS } from "@/utils/constants";

export default {
  name: "Contact",
  components: {
    SlideItem
  },
  computed: {
    getSlideItems() {
      return CERTIFICATIONS;
    }
  }
};
</script>