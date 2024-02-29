import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

});

instance.interceptors.request.use(function (config) {
  config.params = {
    ...config.params
  };
  return config;
});

export default instance;