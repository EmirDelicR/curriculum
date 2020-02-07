<template>
  <div class="home-wrapper">
    <div class="background">
      <span v-for="i in 20" :key="i"></span>
    </div>
    <div class="my-img"></div>
    <div class="my-description">
      <p>{{ $t('my-description.introduce') }}</p>
      <p v-html="$t('my-description.company', { '0': getLinks('company') })"></p>
      <p>
        {{ $t('my-description.born') }}
        <span class="language-cour">Saitama</span>.
      </p>
      <p v-html="$t('my-description.source', { '0': getLinks('git') })"></p>
      <p v-html="$t('my-description.mail', { '0': getLinks('mail') })"></p>
    </div>
  </div>
</template>

<script>
import { ALL_LINKS } from "@/utils/constants";
import SocialLink from "@/components/Nav/social-link";
export default {
  name: "Contact",
  components: {
    SocialLink
  },
  computed: {
    getLinks() {
      return name => ALL_LINKS[name];
    }
  }
};
</script>
