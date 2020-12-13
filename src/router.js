import { createRouter, createWebHashHistory } from "vue-router"

import Home from './views/Home'
import FormSteps from './views/FormSteps'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/about',
    component: () => import('./views/About.vue')
  },
  {
    path: '/form/:step(\\d+)',
    component: FormSteps,
    name: 'form'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;