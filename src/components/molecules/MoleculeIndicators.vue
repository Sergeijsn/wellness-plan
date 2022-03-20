<template>
  <div class="molecule-indicators">
    <atom-indicator 
      v-for="indicator in indicators" 
      :key="indicator.id"
      :status="indicator.status"
    />
  </div>
</template>

<script>
import AtomIndicator from '../atoms/AtomIndicator.vue';

export default {
  components: { AtomIndicator },
  name: "MolecileIndicators",
  props: {
    indicators: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.molecule-indicators .atom-indicator {
  margin-bottom: 4px;
}
</style>
