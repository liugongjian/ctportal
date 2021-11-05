import axios from 'axios'

const service = axios.create({
  baseURL: '/operation/v1',
  timeout: 5 * 3600 * 1000,
  headers: {
    'X-Platform': 'H5'
  }
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // config.headers['accessToken'] = getStore('accessToken')
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    return responseHandler(response)
  },
  (error) => {
    console.dir(error)
    return responseHandler(error.response)
  }
)

function responseHandler(response) {
  if (response && (response.status === 200) && response.data) {
    // if (response.data.code === '0') {
      return response.data
    // } else {
    //   return Promise.reject(response.data.message)
    // }
  } else {
    return Promise.reject(response)
  }
}

export default service