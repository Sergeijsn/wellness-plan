<template>
  <component :is="tag" :class="`tagline tagline-${displayAs || tag}`">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AtomTagline',
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    displayAs: String
  }
}
</script>

<style scoped>
.tagline {
  margin-top: 0;
  margin-bottom: 0.75em;
  text-transform: capitalize;
  color: #192b3e;
}

.tagline-h1 {
  font-size: 2.15rem;
  letter-spacing: 0.005em;
}

.tagline-h2 {
  font-size: 1.65rem;
}
</style>
