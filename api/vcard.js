import request from '@/utils/request'
export function qrcode(data,vm) {
  return request(vm)({
    url: '/qrcode/card',
    method: 'post',
    data
  })
}
export function create(data,vm) {
  return request(vm)({
    url: '/user/qrcode/create',
    method: 'post',
    data
  })
}

export function getById(id,vm) {
  return request(vm)({
    url: `/qrcode/show/${id}`,
    method: 'get'
  })
}

export function getQrcodeByType(data,vm) {
  return request(vm)({
    url:  `/user/qrcode/my`,
    method: 'post',
    data
  })
}
