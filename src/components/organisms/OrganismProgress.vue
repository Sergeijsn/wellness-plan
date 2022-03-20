<template>
  <div class="organism-progress">
    <div class="organism-progress-container" :style="{ fontSize }">
      <circle-progress
        :size="size"
        :border-width="borderWidth"
        :border-bg-width="borderBgWidth"
        :percent="percent"
        :is-gradient="true"
        :gradient="circleGradient"
        empty-color="#f2f2f2"
      />
      <div class="percents"> {{ percent }}% </div>
    </div>
    <div v-if="label" class="organism-progress-label" :style="`max-width: ${size}px`">{{ label }}</div>
  </div>
</template>

<script>
import CircleProgress from "vue3-circle-progress";
import "vue3-circle-progress/dist/circle-progress.css";

export default {
  name: "OrganismProgress",
  components: { CircleProgress },
  props: {
    size: {
      type: Number,
      default: 140,
    },
    borderWidth: {
      type: Number,
      default: 15,
    },
    borderBgWidth: {
      type: Number,
      default: 15,
    },
    fontSize: {
      type: String,
      default: "1.875rem",
    },
    steps: {
      type: Number,
      required: true,
    },
    stepsLeft: {
      type: Number,
      required: true,
    },
    label: String,
  },
  computed: {
    percent() {
      return Math.round(((this.steps - this.stepsLeft) / this.steps) * 100);
    },
  },
  data() {
    return {
      circleGradient: {
        angle: 100,
        startColor: "#aed3e1",
        stopColor: "#61b057",
      },
    };
  },
};
</script>

<style>
.organism-progress {
  text-align: center;
}

.organism-progress-container {
  position: relative;
  display: inline-flex;
  margin-bottom: 20px;
}

.organism-progress .percents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.organism-progress-label {
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
}
</style>
