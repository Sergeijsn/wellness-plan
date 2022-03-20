<template>
  <div class="atom-card" :class="size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AtomCard",
  props: {
    size: {
      type: String,
      default: 'sm'
    }
  }
};
</script>

<style scoped>
.atom-card {
  border: 1px solid #e8eced;
  border-radius: 0.75rem;
}

.atom-card.lg {
  padding: 30px 25px;
}

.atom-card.sm {
  padding: 10px;
}
</style>
