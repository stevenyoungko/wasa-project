import axios from 'axios'
const service = axios.create({
  baseURL: '/apis',
  timeout: 25000
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // 重複登入處理
    return response.data
  },
  (error) => {
    const { response, config } = error

    if (response) {
      // 可以做錯誤處理
    }

    return Promise.reject(error)
  }
)

export default service
