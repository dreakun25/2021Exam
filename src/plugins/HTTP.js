import axios from "axios";
import nprogress from "nprogress";
const instance = axios.create({ baseURL: "https://api.artic.edu/api/v1/" });

instance.interceptors.request.use(config => {
  nprogress.start();
  return config;
});

instance.interceptors.response.use(response => {
  nprogress.stop();
  return response;
});

export default instance;
