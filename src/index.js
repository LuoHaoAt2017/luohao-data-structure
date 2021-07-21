import Vue from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import router from './route/index';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '../gantt/gantt.scss';

Vue.use(Antd);
Vue.use(VXETable);

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});