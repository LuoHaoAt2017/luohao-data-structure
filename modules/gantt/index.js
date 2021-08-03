import Vue from 'vue';
import VXETable from 'vxe-table';
import router from './route/index';
import App from './App.vue';
import Antd from 'ant-design-vue';
import fetch from './utils/fetch';
import 'xe-utils';
import 'ant-design-vue/dist/antd.css';
import 'vxe-table/lib/style.css';
import '../../libs/gantt/gantt.scss';
import './mocks/index'; // mock拦截请求

import { message } from 'ant-design-vue';
Vue.prototype.$message = message;
Vue.prototype.$axios = fetch;
Vue.use(Antd);
Vue.use(VXETable);

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});