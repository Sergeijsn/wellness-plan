<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtomContainer',
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 996px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
</style>
