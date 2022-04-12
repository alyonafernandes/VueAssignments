const app = Vue.createApp({
  data() {
    return {
      goal: [],
      enteredGoalValue: "",
      taskListVisible: true,
    };
  },
  computed: {
    btnCaption() {
      return this.taskListVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addGoal() {
      this.goal.push(this.enteredGoalValue);
    },
    toggleButton() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
});

app.mount("#assignment");
