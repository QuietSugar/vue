/**
 * 角色
 */
import request from '@/utils/request'
// 增加
export function createRole(data) {
  return request({
    url: '/role/create',
    method: 'post',
    data
  })
}
//  修改
export function updateRole(data) {
  return request({
    url: '/role/update',
    method: 'post',
    data
  })
}
// 详情查询
export function fetchRole(id) {
  return request({
    url: '/role/detail',
    method: 'get',
    params: { id }
  })
}
// 列表查询
export function fetchList(query) {
  return request({
    url: '/role/list',
    method: 'get',
    params: query
  })
}
export function fetchPv(pv) {
  return request({
    url: '/role/pv',
    method: 'get',
    params: { pv }
  })
}
