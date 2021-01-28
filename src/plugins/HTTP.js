import axios from "axios";

const instance = axios.create({ baseURL: "https://api.artic.edu/api/v1/" });

instance.interceptors.response.use(response => {
  response.doneLoading = false;
  return response;
});

export default instance;
