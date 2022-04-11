const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      userInput2: "",
      confirmedName: "",
    };
  },
  methods: {
    func1() {
      alert("I was called!");
    },
    setName(event) {
      this.userInput = event.target.value;
    },

    confirmName() {
      this.confirmedName = this.userInput;
    },
  },
});
app.mount("#assignment");
