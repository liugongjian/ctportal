import axios from 'axios'

/**
 * 请求AI算法列表
 */
 export function signature (data) {
  return axios({
    url: '/v1/custom/signature',
    method: 'post',
    data
  })
}