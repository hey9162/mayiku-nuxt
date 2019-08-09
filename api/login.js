import request from '@/utils/request'
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
export function logout(data) {
  return request({
    url: '/user/logout',
    method: 'get',
    params: data
  })
}
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
export function getCode(query) {
  return request({
    url: '/user/genVerifyCode',
    method: 'get',
    params: query
  })
}

export function findPass(data){
  return request({
    url: '/user/forgotPassword',
    method: 'post',
    data
  })
}

export function resetPass(data){
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data
  })
}
