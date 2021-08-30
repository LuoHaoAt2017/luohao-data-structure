import axios from "axios";

axios.defaults.baseURL = "/";
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

// 请求拦截器
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return window.location.href = '/login'
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;