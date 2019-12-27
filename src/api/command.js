/**
 * 角色
 */
import request from '@/utils/request'

// 增加
export function createCommand(data) {
  return request({
    url: '/command/create',
    method: 'post',
    data
  })
}

//  修改
export function updateCommand(data) {
  return request({
    url: '/command/update',
    method: 'post',
    data
  })
}

// 详情查询
export function fetchCommand(id) {
  return request({
    url: '/command/detail',
    method: 'get',
    params: { id }
  })
}

// 列表查询
export function fetchList(query) {
  return request({
    url: 'statement/list',
    method: 'get',
    params: query
  })
}
