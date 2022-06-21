import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";

const app = createApp({
  extends: App,
  created() {
    this.$store.dispatch("getMemberInfo");
    console.log("before create!");
    console.log(location.origin);
  },
})
  .use(store)
  .use(router)
  .mount("#app");

// const app = createApp(App);
// app.use(store).use(router).mount("#app");
