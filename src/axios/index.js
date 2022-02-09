import serve from 'axios'
// 添加请求拦截器
serve.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // get请求和post请求统一进行转JSON处理
    return JSON.parse(config);
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });