const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter > 37) {
        return "Too much!";
      } else if (this.counter < 37) {
        return "Too less :(";
      } else {
        return this.counter;
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    addCount(num) {
      return (this.counter = this.counter + num);
    },
  },
});

app.mount("#assignment");
