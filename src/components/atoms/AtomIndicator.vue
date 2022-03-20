<template>
  <div
    class="atom-indicator"
    :class="status"
  ></div>
</template>

<script>
export default {
  name: 'AtomIndicator',
  props: {
    status: String
  }
}
</script>

<style scoped>
.atom-indicator {
  max-width: 100%;
  width: 44px;
  height: 4px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  background: #f6f6f6;
}

.atom-indicator.complete {
  background: #61b057;
}

.atom-indicator.booked {
  background: #13599e;
}

.atom-indicator.unbooked {
  background: #b4d7e8;
}
</style>
