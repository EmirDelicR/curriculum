<template>
  <div class="roadmap">
    <div class="language-cour title">
      <a
        href="https://github.com/kamranahmedse/developer-roadmap"
        target="_blank"
        rel="noreferrer"
      >{{ $t('tips.learn')}}</a>
    </div>
    <organization-chart :datasource="content"></organization-chart>
  </div>
</template>
<script>
import OrganizationChart from "vue-organization-chart";
import "vue-organization-chart/dist/orgchart.css";

export default {
  name: "Raodmap",
  components: { OrganizationChart },
  props: {
    content: {
      required: true,
      type: Object
    }
  },
  methods: {}
};
</script>
