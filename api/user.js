import request from '@/utils/request'
export function getUser(data) {
  return request({
    url: '/user/userInfo/get',
    method: 'get'
  })
}

/**
 * 
 * @param {*} data 修改基本信息
 */
export function editInfo(data) {
  return request({
    url: '/user/userInfo/update',
    method: 'post',
    data
  })
}

export function editPass(data) {
  return request({
    url: '/user/userInfo/password',
    method: 'post',
    data
  })
}