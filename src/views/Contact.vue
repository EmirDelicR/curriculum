<template>
  <div class="contact-wrapper">
    <div class="gmap-area">
      <div class="gmap">
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Mannhaimstra%C3%9Fe%204+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
          width="600"
          height="450"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="contact-container">
        <div class="address-wrap">
          <address>
            <h3>{{ $t('contact.home') }}</h3>
            <p>Mannheimstraße 4,</p>
            <p>{{ $t('contact.floor') }} 6/39</p>
            <p>4040 Linz</p>
            <p>{{ $t('contact.austria') }}</p>
          </address>
          <address>
            <h3>{{ $t('contact.work') }}</h3>
            <p>Spittelwiese 15</p>
            <p>4020 Linz</p>
            <p>{{ $t('contact.austria') }}</p>
          </address>
        </div>
        <div class="phone-number">
          <p>Tel: +43677-625-819-74</p>
          <p>Mail: emirdelictbf@gmail.com</p>
        </div>
        <div class="social-links">
          <SocialLink v-for="item in getSocialPages" :key="item.name" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SOCIAL_PAGES } from "@/utils/constants";
import SocialLink from "@/components/Nav/social-link";
export default {
  name: "Contact",
  components: {
    SocialLink
  },
  computed: {
    getSocialPages() {
      return SOCIAL_PAGES;
    }
  }
};
</script>