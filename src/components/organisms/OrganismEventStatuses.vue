<template>
  <div class="organism-event-statuses">
    <molecule-event-status 
      v-for="event in events"
      :key="event.id"
      :name="event.name"
      :status="event.status"
    />
  </div>
</template>

<script>
import MoleculeEventStatus from '../molecules/MoleculeEventStatus.vue'
export default {
  components: { MoleculeEventStatus },
  name: 'OrganismEventStatuses',
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.organism-event-statuses > * {
  margin-bottom: 10px;
}
</style>
