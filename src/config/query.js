import axios from 'axios'
// import store from '../store'

var baseURL
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://api.github.com'
} else {
  baseURL = 'https://test.com'
}

const config = {
  baseURL: baseURL,
  timeout: 5000
}

var Query = axios.create(config)
Query.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

//添加请求拦截器
Query.interceptors.request.use((config) => {
  // if (store.state.token) {
  //   config.headers.Authorization = `token ${store.state.token}`
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

//添加响应拦截器
Query.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       // 401 清除token信息并跳转到登录页面
  //       store.commit(types.LOGOUT);
  //       router.replace({
  //         path: 'login',
  //         query: {
  //           redirect: router.currentRoute.fullPath
  //         }
  //       })
  //   }
  // }
  return Promise.reject(error)
})

export default Query

// 其他方法：你可以使用qs库来格式化数据。
// var qs = require('qs');
// axios.post('/foo', qs.stringify({'bar':123}));
