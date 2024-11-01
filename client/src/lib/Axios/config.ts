import axios, { AxiosInstance } from 'axios'
// import { LOGIN_PATH } from '../../routes/Routes'
// import { getAccessToken, removeTokens } from '../Cookie/auth'

let hasAuthError = false

const https: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

// https.interceptors.request.use((config: AxiosRequestConfig) => {
//   const accessToken = getAccessToken()

//   // 타입 단언을 사용하여 headers 접근
//   if (config.headers) {
//     config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
//   }

//   return config
// })

// https.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response
//   },
//   async (error: AxiosError) => {
//     // error.response가 존재하는지 확인
//     if (error.response && error.response.status === 401) {
//       if (!hasAuthError) {
//         hasAuthError = true
//         await alert('로그인 토큰이 만료되었습니다')
//         removeTokens()
//         window.location.href = LOGIN_PATH
//       }
//     }

//     return Promise.reject(error)
//   }
// )

export default https
