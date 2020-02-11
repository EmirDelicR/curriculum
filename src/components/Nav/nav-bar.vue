<template>
  <nav class="pages-nav">
    <NavLink v-for="item in getNormalPages" :key="item.name" :item="item" />
    <NavLink v-for="item in getSmallPages" :key="item.name" :item="item" />
    <div class="pages-nav__item pages-nav__item--social">
      <SocialLink v-for="item in getSocialPages" :key="item.name" :item="item" />
    </div>
  </nav>
</template>

<script>
import { NORMAL_PAGES, SMALL_PAGES, SOCIAL_PAGES } from "@/utils/constants";
import NavLink from "./nav-link";
import SocialLink from "./social-link";

export default {
  name: "NavBar",
  components: {
    NavLink,
    SocialLink
  },
  computed: {
    getNormalPages() {
      return NORMAL_PAGES;
    },
    getSmallPages() {
      return SMALL_PAGES;
    },
    getSocialPages() {
      return SOCIAL_PAGES;
    }
  }
};
</script>
