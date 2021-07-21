import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/table',
      component: () => import('../pages/table.vue')
    },
    {
      path: '/gantt',
      component: () => import('../pages/gantt.vue')
    },
    {
      path: '/',
      redirect: '/table'
    },
  ]
});
