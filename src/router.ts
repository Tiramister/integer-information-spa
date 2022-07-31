import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage/MainPage.vue";
import NotFound from "./components/NotFound/NotFound.vue";

export default createRouter({
  history: createWebHistory("/integer/"),
  routes: [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/:catchAll(.*)", name: "NotFound", component: NotFound }
  ],
});
