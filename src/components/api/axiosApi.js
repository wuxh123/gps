import axios from 'axios'
import { MessageBox, Indicator } from 'mint-ui';

export const Axios = axios.create({
  //baseURL: 'http://localhost:8083/renren-fast',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

//POST传参序列化(添加请求拦截器)
// 在发送请求之前做某件事
Axios.interceptors.request.use(config => {
   Indicator.open({
    text: '加载中,请稍后...',
    spinnerType: 'fading-circle'
  });
  // 设置以 form 表单的形式提交参数，如果以 JSON 的形式提交表单，可忽略
  // if(config.method  === 'post'){
  //     // JSON 转换为 FormData
  //     const formData = new FormData()
  //     Object.keys(config.data).forEach(key => formData.append(key, config.data[key]))
  //     config.data = formData
  // }

  // 下面会说在什么时候存储 token
  if (localStorage.getItem('token')) {
    //config.headers.Authorization = localStorage.getItem('token')
    console.log("attachment token=", localStorage.getItem('token'))
    config.headers['token'] = localStorage.getItem('token')// 请求头带上token
  }
  return config
}, error => {
  MessageBox.alert('超时,请检查网络或稍后重试!').then(action => {
    Indicator.close();
  });
  return Promise.reject(error)
})

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
  //对响应数据做些事
  if (res.data.msg != 'success') {
    return Promise.reject(res)
  }
  Indicator.close();
  return res
}, error => {
  MessageBox.alert('超时,请检查网络或稍后重试!!').then(action => {
    Indicator.close();
  });
  if (error.response.status === 401) {
    // 401 说明 token 验证失败
    // 可以直接跳转到登录页面，重新登录获取 token
    //location.href = '/login'
  } else if (error.response.status === 500) {
    // 服务器错误
    // do something
    return Promise.reject(error.response.data)
  }
  // 返回 response 里的错误信息
  return Promise.reject(error.response.data)
})

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}