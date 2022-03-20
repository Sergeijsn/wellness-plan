<template>
  <atom-container class="template-plan">
    <atom-tagline>2021 Wellness plan</atom-tagline>
    <atom-card size="lg">
      <div class="template-plan-header">
        <atom-tagline tag="h2">Your progress</atom-tagline>
        <div class="template-plan-description"
          >{{ stepsLeft }} steps to compile</div
        >
        <atom-link
          tag="button"
          type="button"
          class="template-plan-hide"
          @click="showDetails = !showDetails"
        >
          {{ showDetails ? "hide" : "show" }}
        </atom-link>
      </div>
      <div class="template-plan-content" v-if="showDetails">
        <organism-progress
          class="template-plan-progress"
          :size="130"
          :stepsLeft="stepsLeft"
          :steps="steps"
          label="Completed appointments"
        />
        <div class="template-plan-items">
          <atom-card size="sm" class="template-plan-calendar">
            <organism-calendar :events="events" />
          </atom-card>
          <organism-event-statuses :events="events" />
        </div>
      </div>
    </atom-card>
  </atom-container>
</template>

<script>
import AtomCard from "../atoms/AtomCard.vue";
import AtomContainer from "../atoms/AtomContainer.vue";
import AtomLink from "../atoms/AtomLink.vue";
import AtomTagline from "../atoms/AtomTagline.vue";
import OrganismCalendar from "../organisms/OrganismCalendar.vue";
import OrganismEventStatuses from "../organisms/OrganismEventStatuses.vue";
import OrganismProgress from "../organisms/OrganismProgress.vue";

export default {
  name: "TemplatePlan",
  components: {
    AtomLink,
    AtomContainer,
    AtomTagline,
    AtomCard,
    OrganismProgress,
    OrganismCalendar,
    OrganismEventStatuses,
  },
  data: () => ({
    showDetails: true,
    events: [
      {
        id: 1,
        date: "2021-07-01",
        name: "Hormone replacement therapy",
        status: "complete",
      },
      {
        id: 2,
        date: "2021-07-05",
        name: "Ozon therapy",
        status: "complete",
      },
      {
        id: 3,
        date: "2021-07-15",
        name: "NAD",
        status: "complete",
      },
      {
        id: 4,
        date: "2021-07-30",
        name: "Hormone replacement therapy",
        status: "complete",
      },
      {
        id: 5,
        date: "2022-02-01",
        name: "Ozon therapy",
        status: "booked",
      },
      {
        id: 6,
        date: "2022-02-05",
        name: "NAD",
        status: "booked",
      },
      {
        id: 7,
        date: "2022-04-15",
        name: "Hormone replacement therapy",
        status: "unbooked",
      },
    ],
  }),
  computed: {
    steps() {
      return this.events.length;
    },
    stepsLeft() {
      return this.events.filter((event) => event.status !== "complete").length;
    },
  },
  methods: {
    toggleView() {},
  },
};
</script>

<style scoped>
.template-plan {
  padding-top: 19px;
}

.template-plan-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}

.template-plan-hide {
  margin-left: auto;
  color: #66696d;
}

.template-plan-description {
  margin-left: 0.7em;
  font-size: 1.05rem;
  font-weight: 500;
  color: #999999;
}

.template-plan-progress {
  padding-top: 15px;
  padding-left: 35px;
  padding-right: 40px;
  padding-bottom: 20px;
}

.template-plan-calendar {
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  .template-plan-header {
    flex-wrap: nowrap;
  }

  .template-plan-content {
    display: flex;
    align-items: flex-start;
  }

  .template-plan-items {
    flex: 1;
  }
}

@media (min-width: 992px) {
  .template-plan-items {
    padding-right: 70px;
  }
}
</style>
