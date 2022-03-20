<template>
  <atom-card size="sm">
    <div class="molecule-event-status">
      <div class="name">
        {{ name }}
      </div>
      <atom-icon-button
        class="status"
        v-if="status === 'unbooked'"
        @click="$emit('change')"
      >
        <atom-status :status="status" />
      </atom-icon-button>
      <div v-else class="status" >
        <atom-status :status="status" />
      </div>
      <div class="actions">
        <atom-icon-button @click="$emit('change')">
          <svg-sprite symbol="dots" size="24" />
        </atom-icon-button>
      </div>
    </div>
  </atom-card>
</template>

<script>
import AtomCard from "../atoms/AtomCard.vue";
import AtomIconButton from "../atoms/AtomIconButton.vue";
import AtomStatus from '../atoms/AtomStatus.vue';
export default {
  components: { AtomCard, AtomIconButton, AtomStatus },
  name: "MoleculeEventStatus",
  props: {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.molecule-event-status {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.name {
  flex-grow: 1;
}

.status {
  width: 140px;
  flex: 0 0 140px;
  margin-left: auto;
}

button.status {
  text-align: left;
  cursor: pointer;
}

.actions .icon {
  fill: #e8eced;
  transition: fill 0.5s;
}

.actions button {
  cursor: pointer;
}

.actions button:hover .icon {
  fill: #000
}

@media (min-width: 576px) {
  .molecule-event-status {
    flex-wrap: nowrap;
  }
}
</style>
