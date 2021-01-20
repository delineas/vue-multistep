import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home";
import FormSteps from "./views/FormSteps";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./views/NotFound.vue"),
  },
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/form",
    redirect: {
      name: "form",
      params: {
        step: 1
      }
    },
  },
  {
    path: "/form/:step(\\d+)",
    component: FormSteps,
    name: "form",
    meta: {
      steps: [1, 2],
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
