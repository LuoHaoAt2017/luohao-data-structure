import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/table",
      component: () => import("../pages/table.vue"),
    },
    {
      path: "/gantt",
      component: () => import("../pages/gantt.vue"),
    },
    {
      path: "/tree",
      component: () => import("../pages/tree/index.vue"),
      children: [
        {
          path: "/tree/base",
          component: () => import("../pages/tree/base.vue"),
        },
        {
          path: "/tree/lazy",
          component: () => import("../pages/tree/lazy.vue"),
        },
        {
          path: "/tree",
          redirect: '/tree/base'
        },
      ],
    },
    {
      path: "/",
      redirect: "/tree",
    },
  ],
});
