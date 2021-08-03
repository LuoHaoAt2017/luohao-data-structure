import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import fetch from '../utils/fetch';
import '../mocks/index';

Vue.prototype.$axios = fetch;

export default new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App);
  }
});