import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/about',
      component: () => import('../pages/about.vue')
    },
    {
      path: '/',
      redirect: '/about'
    },
  ]
});
