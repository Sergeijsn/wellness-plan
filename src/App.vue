<template>
  <template-plan />
</template>

<script>
import TemplatePlan from "./components/templates/TemplatePlan.vue";

export default {
  name: "App",

  components: { TemplatePlan },

  data: () => ({
  }),
};
</script>

<style>
:root {
  font-family: Roboto, "sans-serif";
}

body {
  margin: 0;
}
</style>
