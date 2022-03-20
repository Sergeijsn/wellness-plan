<template>
  <component :is="tag" class="atom-link">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AtmoLink',
  props: {
    tag: {
      type: String,
      default: 'a'
    },
  },
}
</script>

<style scoped>
.atom-link {
  margin: 0;
  padding: 0 0 1px;
  border: 0;
  border-bottom: 1px solid currentColor;
  font: inherit;
  appearance: none;
  background: 0;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
