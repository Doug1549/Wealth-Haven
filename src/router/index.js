import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CreativeView from '../views/CreativeView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/wealth-haven/',
      name: 'HOME',
      component: HomeView
    },
    {
      path: '/wealth-haven/creative',
      name: 'CREATIVE',
      component: CreativeView
    },
    {
      path: '/wealth-haven/contact',
      name: 'CONTACT',
      component: ContactView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

// Vue.component("home", require("./views/Home.vue").default);

export default router
