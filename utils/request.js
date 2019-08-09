import axios from 'axios'
import { getSession } from './session';
const Cookie = process.client ? require('js-cookie') : undefined
const service = axios.create({
  timeout: 5000,
  baseURL: process.env.baseUrl
})
service.interceptors.request.use(config => {
    if(Cookie.get('login_token')){
      config.headers['Authorization'] = Cookie.get('login_token')
    }
    return config  
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '200') {
      if (res.code === '999' ) {
        window.location.href =  '/'
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)
export default service