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
      path: "/test",
      component: () => import("../pages/test.vue"),
    },
    {
      path: "/test2",
      component: () => import("../pages/test2.vue"),
    },
    {
      path: "/test3",
      component: () => import("../pages/test3.vue"),
    },
    {
      path: "/gantt",
      component: () => import("../pages/gantt.vue"),
    },
    {
      path: "/assign",
      component: () => import("../pages/assign.vue"),
    },
    {
      path: "/analysis",
      component: () => import("../pages/analysis.vue"),
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
          redirect: '/tree/lazy'
        },
      ],
    },
    {
      path: "/",
      redirect: "/analysis",
    },
  ],
});
