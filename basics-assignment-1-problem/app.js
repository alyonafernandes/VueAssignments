const app = Vue.createApp({
  data() {
    return {
      name: "Alyona",
      age: 19,
      vueLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    };
  },
  methods: {
    // calculateAge() {
    //   return this.age + 5;
    // },
    random() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
