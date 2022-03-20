<template>
  <div class="organism-calendar">
    <table>
      <thead>
        <tr>
          <th v-for="month in sortedMonths" :key="month.name">
            {{ month.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="month in sortedMonths" :key="month">
            <molecule-indicators :indicators="getEvents(month.realIndex)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MoleculeIndicators from "../molecules/MoleculeIndicators.vue";
export default {
  components: { MoleculeIndicators },
  name: "OrganismCalendar",
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      months: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
    };
  },
  computed: {
    sortedMonths() {
      const copyEvents = [...this.events];
      const monthOfLastEvent =
        copyEvents
          .sort((event1, event2) => {
            return new Date(event2.date) - new Date(event1.date);
          })
          .map((event) => new Date(event.date).getMonth())[0] || 0;

      const formattedMonths = this.months.map((month, index) => ({
        realIndex: index,
        name: month,
      }));

      const startedMonths = formattedMonths.splice(0, monthOfLastEvent + 1);

      return [...formattedMonths, ...startedMonths];
    },
  },
  methods: {
    getEvents(monthIndex) {
      return this.events.filter((event) => {
        const eventDate = new Date(event.date);
        const eventMonth = eventDate.getMonth();
        return eventMonth === monthIndex;
      });
    },
  },
};
</script>

<style scoped>
.organism-calendar {
  max-width: 100%;
  overflow: auto;
}
table {
  width: 100%;
  min-width: 500px;
}

th {
  font-size: 0.875rem;
  font-weight: normal;
  color: #3d77af;
}

th,
td {
  width: 8.33%;
  text-align: center;
}

th::first-letter {
  text-transform: uppercase;
}

tbody td {
  padding-top: 2px;
  vertical-align: top;
}
</style>
