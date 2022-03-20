<template>
  <button class="atom-icon-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AtomIconButton',
}
</script>

<style scoped>
.atom-icon-button {
  border: 0;
  padding: 0;
  appearance: none;
  background: 0;
  color: inherit;
  font: inherit;
  line-height: 0;
}

.atom-icon-button .icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
