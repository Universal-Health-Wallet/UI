import axios from 'axios';

let baseURL = 'http://localhost:5000';
if (typeof window !== 'undefined') {
  if (window && window.__INITIAL_STATE__.apiUrl) {
    baseURL = window && window.__INITIAL_STATE__.apiUrl;
  }
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

export default axiosInstance;
