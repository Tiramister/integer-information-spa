import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage/MainPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "MainPage", component: MainPage }],
});
