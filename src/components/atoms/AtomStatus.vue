<template>
  <div class="atom-status" :class="status">
    <svg-sprite :symbol="getIcon(status)" :size="iconSize" />
    <div class="text">{{ getText(status) }}</div>
  </div>
</template>

<script>
export default {
  name: "AtomStatus",
  props: {
    status: {
      type: String,
      required: true,
    },
    iconSize: {
      type: [String],
      default: "24",
    },
  },
  methods: {
    getIcon(status) {
      switch (status) {
        case "complete":
          return "complete";
        case "booked":
          return "booked";
        case "unbooked":
          return "calendar";
      }
    },
    getText(status) {
      switch (status) {
        case "complete":
        case "booked":
          return status;
        case "unbooked":
          return "book now";
      }
    },
  },
};
</script>

<style scoped>
.atom-status {
  display: flex;
  align-items: center;
}

.atom-status .icon {
  margin-right: 0.5rem;
  fill: currentColor;
  transition: color 0.5s;
}

.complete {
  color: #64b15a;
}

.complete .text {
  color: #b6dbb1;
}

.booked {
  color: #13599e;
}

.unbooked {
  color: #b4d7e8;
}

.unbooked .text {
  color: #2c81d6;
}

.unbooked:hover {
  color: #2c81d6;
}

.text::first-letter {
  text-transform: uppercase;
}
</style>
