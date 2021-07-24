import Vue from 'vue';
import App from './App.vue';
import router from './route';

export default new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App);
  }
});