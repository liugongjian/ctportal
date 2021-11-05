import request from '@/utils/request'

/**
 * 请求AI算法列表
 */
 export function getAiAlgorithm () {
  return request({
    url: 'ai/info',
    method: 'get'
  })
}

/**
 * 新建对接客户
 */
export function createCustomer (data) {
  return request({
    url: 'potentialCustomer/h5/create',
    method: 'post',
    data
  })
}
