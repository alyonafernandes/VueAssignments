const app = Vue.createApp({
  data() {
    return {
      classInput: "",
      paragraphIsVisible: true,
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.classInput == "user1",
        user2: this.classInput == "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");
