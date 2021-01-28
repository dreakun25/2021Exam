import axios from "axios";

function checkLoading(loadingState) {
  axios.interceptors.response.use(response => {
    loadingState = !loadingState;
    return { response, loadingState };
  });
}

export default checkLoading;
