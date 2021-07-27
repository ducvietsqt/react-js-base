import axios  from 'axios'

const $laravel_api = axios.create({
  baseURL: process.env.REACT_CONNECT_LARAVEL_API
})
// Add a request interceptor
$laravel_api.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
$laravel_api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
export default $laravel_api;
