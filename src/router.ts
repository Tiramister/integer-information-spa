import { createRouter, createWebHistory } from "vue-router";
import Top from "./components/top/Top.vue";

const routes = [{ path: "/", name: "root", component: Top }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
